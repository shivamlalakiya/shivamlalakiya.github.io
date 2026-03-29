import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import SuspenseFallback from "./components/SuspenseFallback";
import ReactGA from "react-ga4";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  useEffect(() => {
    const initAnalytics = () => {
      ReactGA.initialize("G-ZC359GW4XVID");
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
        title: document.title,
      });
    };

    // Defer GA init so it doesn't compete with Three.js startup.
    const ric = (window as unknown as { requestIdleCallback?: Function })
      .requestIdleCallback;
    if (ric) {
      ric(initAnalytics, { timeout: 2000 });
    } else {
      setTimeout(initAnalytics, 1);
    }
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense fallback={<SuspenseFallback label="Loading site" />}>
          <MainContainer>
            <Suspense fallback={<SuspenseFallback label="Loading 3D scene" />}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
