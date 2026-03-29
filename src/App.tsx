import { lazy, Suspense } from "react";
import "./App.css";
import SuspenseFallback from "./components/SuspenseFallback";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
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
