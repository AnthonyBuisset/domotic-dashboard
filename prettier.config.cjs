module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "auto",
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 120,
  plugins: [import("prettier-plugin-tailwindcss")],
};
