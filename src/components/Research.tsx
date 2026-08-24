import { useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Research.css";
import { publications, type PublicationType } from "../data/publications";
import { mergedPRs, philanthroPy } from "../data/opensource";

const FILTERS: PublicationType[] = ["Conference", "Journal", "Book", "Preprint"];
const OPEN_SOURCE = "Open Source" as const;
type View = PublicationType | "All" | typeof OPEN_SOURCE;

const libraries = Array.from(new Set(mergedPRs.map((pr) => pr.repo))).map((repo) => {
  const prs = mergedPRs.filter((pr) => pr.repo === repo);
  return { repo, stars: prs[0].stars, count: prs.length };
}).sort((a, b) => b.count - a.count || (b.stars ?? 0) - (a.stars ?? 0));

const latestMerge = mergedPRs.reduce((latest, pr) =>
  new Date(pr.merged) > new Date(latest) ? pr.merged : latest, mergedPRs[0].merged);

const Research = () => {
  const [active, setActive] = useState<View>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: publications.length };
    FILTERS.forEach((type) => {
      c[type] = publications.filter((p) => p.type === type).length;
    });
    c[OPEN_SOURCE] = libraries.length;
    return c;
  }, []);

  const filtered =
    active === "All"
      ? publications
      : active === OPEN_SOURCE
        ? []
        : publications.filter((p) => p.type === active);

  return (
    <div className="research-section section-container" id="research">
      <h3 className="section-eyebrow">
        <span className="section-index">04</span> Research
      </h3>

      <div className="section-hero">
        <h2 className="section-headline">
          Research that made it into <span className="about-accent">production</span>.
        </h2>
        {active === OPEN_SOURCE ? (
          <p className="section-subhead">
            {mergedPRs.length} pull requests merged into {libraries.length}{" "}
            open-source libraries — conformal prediction, Bayesian marketing mix,
            time series, and LLM tooling.
          </p>
        ) : (
          <p className="section-subhead">
            {publications.length} publications across AI systems, observability,
            and fundraising analytics — spanning IEEE conferences and
            peer-reviewed journals.
          </p>
        )}
      </div>

      <div className="research-filters" role="tablist" aria-label="Filter research by type">
        <button
          className={`research-filter ${active === "All" ? "research-filter-active" : ""}`}
          onClick={() => setActive("All")}
          data-cursor="disable"
        >
          All <span>{counts.All}</span>
        </button>
        {FILTERS.filter((type) => counts[type] > 0).map((type) => (
          <button
            key={type}
            className={`research-filter ${active === type ? "research-filter-active" : ""}`}
            onClick={() => setActive(type)}
            data-cursor="disable"
          >
            {type} <span>{counts[type]}</span>
          </button>
        ))}
        <button
          className={`research-filter ${active === OPEN_SOURCE ? "research-filter-active" : ""}`}
          onClick={() => setActive(OPEN_SOURCE)}
          data-cursor="disable"
        >
          {OPEN_SOURCE} <span>{counts[OPEN_SOURCE]}</span>
        </button>
      </div>

      {active === OPEN_SOURCE ? (
        <>
          <div className="oss-stats">
            <div className="oss-stat">
              <span className="oss-stat-value">{mergedPRs.length}</span>
              <span className="oss-stat-label">Merged PRs</span>
            </div>
            <div className="oss-stat">
              <span className="oss-stat-value">{libraries.length}</span>
              <span className="oss-stat-label">Libraries</span>
            </div>
            <div className="oss-stat">
              <span className="oss-stat-value">
                {new Date(latestMerge).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="oss-stat-label">Latest merge</span>
            </div>
          </div>

          <div className="oss-grid">
            {libraries.map((lib) => (
              <a
                className="oss-card"
                key={lib.repo}
                href={`https://github.com/${lib.repo}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label={`${lib.repo}: ${lib.count} merged pull request${
                  lib.count > 1 ? "s" : ""
                }. Open on GitHub`}
              >
                <span className="research-repo">
                  {lib.repo} <MdArrowOutward />
                </span>
                <span className="oss-card-stats">
                  {lib.count} merged
                  {lib.stars ? ` · ${lib.stars.toLocaleString()}★` : ""}
                </span>
              </a>
            ))}
          </div>

          <div className="about-card research-own-project">
            <h4 className="card-eyebrow">Own project</h4>
            <a
              className="research-own-name"
              href={philanthroPy.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              {philanthroPy.name} <MdArrowOutward />
            </a>
            <p>{philanthroPy.description}</p>
            <div className="tool-tags">
              {philanthroPy.stats.map((s) => (
                <span className="tool-tag" key={s.label}>
                  {s.label}: {s.value}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="research-list">
          {filtered.map((pub) => (
            <div className="research-item" key={pub.title}>
              <div className="research-item-meta">
                <span className="research-type">{pub.type}</span>
                <span className="research-year">{pub.year}</span>
              </div>
              <div className="research-item-body">
                <h4>{pub.title}</h4>
                <p className="research-authors">
                  {pub.authors.split(", ").map((author, i, arr) => (
                    <span key={author}>
                      {author === "S. Lalakiya" ? <strong>{author}</strong> : author}
                      {i < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="research-venue">{pub.venue}</p>
                <p className="research-desc">{pub.description}</p>
              </div>
              {pub.link ? (
                <a
                  className="research-link"
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  aria-label={`Read "${pub.title}" on IEEE Xplore`}
                >
                  <MdArrowOutward />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Research;
