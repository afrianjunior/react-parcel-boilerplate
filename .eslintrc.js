module.exports = {
    "extends": ["standard", "standard-react"],
    "env": {
        "browser": false,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "import"
    ],
    "rules": {
        "no-param-reassign": ["error", { "props": false }]
    }
}
  