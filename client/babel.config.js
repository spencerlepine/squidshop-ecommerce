module.exports = function (api) {
  api.cache(true)

  const presets = [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ]
  const plugins = ["@babel/plugin-transform-runtime"]

  return {
    presets,
    plugins,
  }
}