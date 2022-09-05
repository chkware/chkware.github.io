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
    'home',
    'introduction',
    'setup',
    'quick-start',
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/http-examples',
        'examples/testcase-examples',
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'references/concepts',
        'references/version-reference',
        'references/variable-reference',
        'references/http-reference',
        'references/testcase-reference',
      ],
    },
  ],
};

module.exports = sidebars;
