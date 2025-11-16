/** @type {import('next-sitemap').IConfig} */
const SITE = process.env.SITE_URL || "https://market.coinfutura.com";

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "daily",
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    host: null,
    // additionalSitemaps should be full absolute URLs if used
    // but you usually don't need to re-add the main /sitemap.xml
    additionalSitemaps: [
      // If you have other sitemaps hosted elsewhere, put full URLs here.
      // `${SITE}/sitemap.xml`  <-- usually not necessary
    ],
  },
};
