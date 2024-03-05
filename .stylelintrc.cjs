// @see: https://stylelint.io

module.exports = {
  root: true,
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html"
    },
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less"
    }
  ],
  rules: {
    "function-url-quotes": "always",
    "color-hex-length": "long",
    "rule-empty-line-before": "never",
    "font-family-no-missing-generic-family-keyword": null,
    "no-empty-source": null,
    "selector-class-pattern": null,
    "value-no-vendor-prefix": null,
    "no-descending-specificity": null,
    "custom-property-pattern": null,
    "media-feature-range-notation": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"]
      }
    ]
  },
  ignoreFiles: ["**/.js", "/*.jsx", "/.tsx", "**/.ts"]
};
