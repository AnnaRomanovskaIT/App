import globals from "globals";

export default [
    {
        files: ["**/*.js"],
        ignores: ["node_modules/**"],

        languageOptions: {
            globals: {
                ...globals.node
            }
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }
];