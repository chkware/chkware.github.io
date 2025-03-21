// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

 export default {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "./tutorials" }],
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorials",
      items: [
        "tutorials/http-client",
        "tutorials/validate-json",
        "tutorials/bitcoin-api-parser",
        "tutorials/cli-pass-vars"
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/http-examples",
        "examples/validate-examples",
        "examples/variable-examples",
        "examples/workflow-examples",
      ],
    }
  ],
  docsSidebar: [
    {
      type: "doc",
      label: "🏡 Home",
      id: "home",
    },
    {
      type: "doc",
      label: "🏎️ Quick start",
      id: "quick-start",
    },
    {
      type: "category",
      label: "⚒️ Setup CHKware",
      items: ["setup", "setup/setup-ext"],
    },
    {
      type: "category",
      label: "🗂 References",
      items: [
        "references/console-command",
        "references/version",
        "references/variables",
        "references/variables-exposable",
        "references/http-spec",
        "references/validate-spec",
        "references/assertions",
        "references/workflows",
      ],
    },
    {
      type: "category",
      label: "👩‍💻 Developers",
      items: [
        "setup/setup-ext-dev",
        "setup/setup-cli-dev",
        "setup/setup-site-dev",
        "setup/release-pypi",
      ],
    },
    {
      type: "category",
      label: "⛵️ CHANGELOG",
      items: ["changelogs/cli-v0.x"],
    },
    {
      type: "doc",
      label: "☑︎ About CHKware",
      id: "about",
    },
  ],
}
