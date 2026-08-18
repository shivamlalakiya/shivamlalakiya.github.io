export type MergedPR = {
  repo: string;
  stars?: number;
  title: string;
  link: string;
  merged: string;
};

export const mergedPRs: MergedPR[] = [
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "feat(core): allow Memory to accept any AsyncDBChatStore",
    link: "https://github.com/run-llama/llama_index/pull/22541",
    merged: "Aug 4, 2026",
  },
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "fix(weaviate): return real properties as node metadata",
    link: "https://github.com/run-llama/llama_index/pull/22540",
    merged: "Aug 4, 2026",
  },
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "fix(llama-cpp): report the model's effective context window",
    link: "https://github.com/run-llama/llama_index/pull/22539",
    merged: "Aug 4, 2026",
  },
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "fix(core): persist SimpleChatStore without escaping non-ASCII",
    link: "https://github.com/run-llama/llama_index/pull/22538",
    merged: "Aug 4, 2026",
  },
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "fix: filter unknown kwargs before VectorStoreQuery construction",
    link: "https://github.com/run-llama/llama_index/pull/21054",
    merged: "Apr 8, 2026",
  },
  {
    repo: "run-llama/llama_index",
    stars: 51730,
    title: "fix(dashscope): separate num_output from context_window",
    link: "https://github.com/run-llama/llama_index/pull/21051",
    merged: "Apr 8, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "fix(mmm): allow constant tensors in adstock sample_prior",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2795",
    merged: "Aug 18, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "fix(mmm): use original model when clone_model=False in sample_posterior_predictive",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2796",
    merged: "Aug 17, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "fix(mmm): support arbitrary VariableFactory in FourierBase.sample_prior",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2873",
    merged: "Aug 13, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "Input validation for CLV models",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2794",
    merged: "Aug 5, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "Handle DateIndex in CSA plot_data to resolve crash",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2302",
    merged: "Mar 15, 2026",
  },
  {
    repo: "pymc-labs/pymc-marketing",
    stars: 1227,
    title: "Docs: add CSA module to README header",
    link: "https://github.com/pymc-labs/pymc-marketing/pull/2301",
    merged: "Feb 25, 2026",
  },
  {
    repo: "scikit-learn-contrib/MAPIE",
    stars: 1579,
    title: "fix: classification quantile one order statistic too high",
    link: "https://github.com/scikit-learn-contrib/MAPIE/pull/973",
    merged: "Aug 11, 2026",
  },
  {
    repo: "sktime/sktime",
    stars: 9941,
    title: "[DOC]: complete VAR docstring for method, missing, freq, dates",
    link: "https://github.com/sktime/sktime/pull/10698",
    merged: "Aug 16, 2026",
  },
  {
    repo: "ml-stat-Sustech/TorchCP",
    stars: 476,
    title: "docs: fix calculate_conformal_value docstring",
    link: "https://github.com/ml-stat-Sustech/TorchCP/pull/122",
    merged: "Aug 5, 2026",
  },
];

export const philanthroPy = {
  name: "PhilanthroPy",
  description:
    "Python / scikit-learn donor analytics library for nonprofit fundraising teams — donor scoring, lifecycle segmentation, and campaign metrics estimators.",
  link: "https://github.com/PhilanthroPy-Project/PhilanthroPy",
  stats: [
    { label: "Release", value: "v0.6.0" },
    { label: "PyPI downloads", value: "258/mo" },
    { label: "Stars", value: "7" },
    { label: "Contributors", value: "6" },
    { label: "Tests", value: "1,679" },
    { label: "License", value: "MIT" },
  ],
};
