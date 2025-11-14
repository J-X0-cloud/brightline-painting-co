/**
 * The first version of the site was hand-written static HTML with flat file names. These
 * permanent redirects keep yard-sign QR codes, Google Business Profile links and search
 * listings pointing at the right pages.
 */
export const legacyRedirects = [
  { source: "/index.html", destination: "/" },
  { source: "/services.html", destination: "/services" },
  { source: "/service-areas-:area.html", destination: "/service-areas/:area" },
  { source: "/service-areas", destination: "/#areas" },
  { source: "/areas/:area", destination: "/service-areas/:area" },
  { source: "/quote", destination: "/#free-estimate" },
  { source: "/free-estimate", destination: "/#free-estimate" },
  { source: "/contact", destination: "/#free-estimate" },
];
