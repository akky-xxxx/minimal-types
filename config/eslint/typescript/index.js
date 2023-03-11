const { Off, Error, Warn } = require("../const")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  overrides: [
    {
      files: ["**/spec/**"],
      rules: collectiveSetting(
        [
          "@typescript-eslint/no-unused-vars",
          "@typescript-eslint/no-explicit-any",
        ],
        Off,
      ),
    },
  ],
}
