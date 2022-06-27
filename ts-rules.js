const {
    rules: baseStyleRules,
} = require("eslint-config-airbnb-base/rules/style");

module.exports = {
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            SwitchCase: 1,
        },
    ],
    "max-len": ["error", 120, 4, baseStyleRules["max-len"][3]],
    "linebreak-style": "off",
    "prefer-const": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    eqeqeq: "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "no-plusplus": "off",
    "no-minusminus": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "import/prefer-default-export": "off",
    "no-floating-promises": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "no-void": [
        "error",
        {
            allowAsStatement: true,
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
    "max-lines": ["error", 500],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: false },
    ],
};
