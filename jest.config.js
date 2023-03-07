const config = {
    preset: "react-native",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
    ],
    collectCoverage: false,
    coverageDirectory: "<rootDir>/coverage/",
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "**/*.{ts,tsx}",
        "!**/*.spec.{ts,tsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
        "!**/babel.config.js",
        "!**/jest.setup.js",
    ],
    modulePaths: ["<rootDir>"],
};

module.exports = config;
