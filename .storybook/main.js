const path = require('path')
const fs = require('fs')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ],
  webpackFinal: (config) => {
    const variablesScss = fs.readFileSync(path.resolve(__dirname, "../src/styles/_variables.scss")).toString()
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            additionalData: variablesScss
          }
        }
      ]
    })
    return config
  }
}
