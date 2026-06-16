function readPackage(pkg, context) {
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
  allowedDeprecatedVersions: {},
  onlyBuiltDependencies: ['esbuild'],
}
