module.exports = {
  // testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageReporters: ["html", "text", "text-summary", "cobertura", "lcov"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: [],
  testEnvironment: "node",
  coverageProvider: "v8",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", { swcrc: false }],
  },
};
