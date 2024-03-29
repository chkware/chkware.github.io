/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "🏡 Home",
      id: "home",
    },
    {
      type: "doc",
      label: "💡 Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "⚒️ Setup docs",
      items: ["setup", "setup/setup-ext"],
    },
    {
      type: "doc",
      label: "🏃‍♂️ Quick start",
      id: "quick-start",
    },
    {
      type: "category",
      label: "👨‍🏫 Tutorials and Examples",
      items: [
        {
          type: "category",
          label: "Tutorial",
          items: [
            "tutorials/http-client",
            "tutorials/feature-test",
            "tutorials/bitcoin-api-parser",
            "tutorials/automate-chucknorris-jokes",
          ],
        },
        "examples/http-examples",
        "examples/testcase-examples",
        "examples/variable-examples",
      ],
    },
    {
      type: "category",
      label: "🗂 References",
      items: [
        "references/concepts",
        "references/version-reference",
        "references/variable-reference",
        "references/http-reference",
        "references/testcase-reference",
        "references/assertion-reference",
      ],
    },
    {
      type: "category",
      label: "👩‍💻 Developers",
      items: [
        "setup/setup-ext-dev",
        "setup/setup-cli-dev",
        "setup/setup-site-dev",
        "setup/build-wheel",
        "setup/build-zipapp",
      ],
    },
    {
      type: "category",
      label: "⛵️ CHANGELOG",
      items: ["changelogs/cli"],
    },
  ],
};

module.exports = sidebars;
