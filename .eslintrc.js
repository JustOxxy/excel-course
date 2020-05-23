module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "google"],
    "parcer": "babel-eslint",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
