module.exports = {
  displayName: "i-want-you-backend",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/apps/i-want-you-backend",
};
