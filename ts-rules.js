const {
    rules: baseStyleRules,
} = require("eslint-config-airbnb-base/rules/style");
const airbnbBaseTypescript = require("eslint-config-airbnb-typescript/lib/shared");

module.exports = {
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            SwitchCase: 1,
        },
    ],
    "max-len": ["error", 100, 4, baseStyleRules["max-len"][3]],
    "linebreak-style": "off",
    "prefer-const": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    eqeqeq: "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "no-plusplus": "off",
    "no-minusminus": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "no-void": [
        "error",
        {
            allowAsStatement: true,
        },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
            allowString: false,
            allowNumber: false,
        },
    ],
    "@typescript-eslint/comma-dangle": [
        "error",
        {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
            accessibility: "no-public",
        },
    ],
    "@typescript-eslint/no-inferrable-types": "off",
    "max-lines": ["error", 1000],
};
