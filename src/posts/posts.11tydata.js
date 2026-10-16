const HUBS = { "AI Scribes": "/ai-scribes/", "Radiology AI": "/radiology-ai/" };
const SITE = "https://doctorsaitools.com";
const iso = (x) => new Date(x).toISOString().slice(0, 10);

export default {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (d) => (d.sample && d.site.live ? false : `${HUBS[d.category] || "/"}${d.page.fileSlug}/`),
    hubUrl: (d) => HUBS[d.category] || "/",
    ogType: () => "article",
    schema: (d) => {
      const url = `${SITE}${HUBS[d.category] || "/"}${d.page.fileSlug}/`;
      const article = {
        "@type": d.type === "review" ? "Review" : "Article",
        headline: d.title,
        description: d.description,
        datePublished: iso(d.date),
        dateModified: iso(d.updated || d.date),
        mainEntityOfPage: url,
        image: `${SITE}/img/og.png`,
        author: { "@type": "Organization", name: "Doctors AI Tools editorial team" },
        editor: {
          "@type": "Person",
          "@id": `${SITE}/#editor`,
          honorificPrefix: "Dr.",
          name: "Ravi Shankar Gupta",
          honorificSuffix: "DMRE, DCP, FAGS",
          jobTitle: "Chief Medical Editor",
        },
        publisher: { "@type": "Organization", "@id": `${SITE}/#org`, name: "Doctors AI Tools", url: SITE },
      };
      if (d.type === "review") {
        article.itemReviewed = { "@type": "SoftwareApplication", name: d.tool, applicationCategory: "HealthApplication" };
        article.reviewRating = { "@type": "Rating", ratingValue: String(d.score), bestRating: "10", worstRating: "0" };
      }
      return {
        "@context": "https://schema.org",
        "@graph": [
          article,
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
              { "@type": "ListItem", position: 2, name: d.category, item: SITE + (HUBS[d.category] || "/") },
              { "@type": "ListItem", position: 3, name: d.title, item: url },
            ],
          },
        ],
      };
    },
  },
};
