import { minify } from "html-minifier-terser";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addFilter("dateISO", (d) => new Date(d).toISOString().slice(0, 10));

  eleventyConfig.addTransform("minify-html", async function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        minifyCSS: false,
        minifyJS: true,
        conservativeCollapse: false,
      });
    }
    return content;
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
}
