module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["standard", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "multiline-ternary": [0, "always-multiline"],
        "no-unused-vars": 1,
        "react/prop-types": "warn",
        "no-multiple-empty-lines": 0,
        "react/no-deprecated": "warn",
        "object-curly-spacing": 0,
        "keyword-spacing": 0,
        "operator-linebreak": 0,
        "no-trailing-spaces": 0
    }
};
