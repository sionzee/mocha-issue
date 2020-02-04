module.exports = {
  diff: true,
  fullTrace: true,
  require: ["esm", "ts-node/register", "chai/register-expect"],
  spec: ["src/**/*.spec.ts"],
}
