module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: ["strict-check", "./config/eslint/typescript"],
  ignorePatterns: ["**/dist/**"],
  reportUnusedDisableDirectives: true,
}
