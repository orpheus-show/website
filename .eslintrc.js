module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['only-warn', 'prettier'],
  rules: {
    'prettier/prettier': [1],
    'react/no-unescaped-entities': [0]
  }
}
