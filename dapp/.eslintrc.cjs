module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: "module",
    },
    settings: {
        react: { version: "18.2" },
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": [
            1,
            {
                custom: "ignore",
            },
        ],
        "react/jsx-curly-spacing": [2, "never"],
        "default-param-last": "off",
        "react/display-name": "off",
    },
};
