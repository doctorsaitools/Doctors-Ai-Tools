import { minify } from "html-minifier-terser";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.amendLibrary("md", (md) => md.use(markdownItAnchor, { level: [2] }));

  const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  eleventyConfig.addFilter("dateShort", fmt);
  eleventyConfig.addFilter("readTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 220));
  });
  eleventyConfig.addFilter("toc", (html) => {
    const out = [];
    const re = /<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g;
    let m;
    while ((m = re.exec(String(html || "")))) out.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, "").replace(/\s*#\s*$/, "") });
    return out;
  });
  // posts of a category; sample posts are hidden once the site is live
  eleventyConfig.addFilter("byCategory", (posts, category, live) =>
    posts.filter((p) => (!category || p.data.category === category) && !(live && p.data.sample)));
  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("exclude", (posts, url) => posts.filter((p) => p.url !== url));
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date));
  // Affiliate link: {% aff "https://…", "Visit Tool" %}
  eleventyConfig.addShortcode("aff", (url, text) =>
    `<a href="${url}" rel="sponsored noopener" target="_blank">${text}</a>`);

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
    markdownTemplateEngine: "njk",
  };
}
