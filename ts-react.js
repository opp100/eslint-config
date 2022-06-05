const rules = require("./ts-rules");

module.exports = {
    extends: ["airbnb", "airbnb-typescript"],
    rules: {
        ...rules,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
    },
    overrides: [
        {
            files: [
                "**/*.test.ts",
                "**/*.test.tsx",
                "**/*.spec.ts",
                "**/*.spec.tsx",
                "**/__test__/**/*",
            ],
            env: { jest: true },
            extends: ["./jest"],
            plugins: ["jest"],
            rules: { "max-lines": "off" },
        },
    ],
};
