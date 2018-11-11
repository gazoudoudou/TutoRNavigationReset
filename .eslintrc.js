module.exports = {
  extends: 'bambi/native',
  rules: {
    'prettier/prettier': 'error',
    'promise/catch-or-return': 'off', // TODO fix-me -> this rule forces .done() to be called after .then() and .catch()
    'no-unused-vars': 'error',
    'max-lines': 'warn',
  },
};
