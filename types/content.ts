import type { IconName } from "@/components/ui/Icon";

export type Link = { label: string; href: string };

export type ImageAsset = { src: string; alt: string; width: number; height: number };

export type ServiceCategory = "painting" | "prep" | "specialty";

export type Service = {
  slug: string;
  name: string;
  /** One-line summary used in menus and compact tiles. */
  tagline: string;
  /** Longer description on the services page. */
  description: string;
  category: ServiceCategory;
  icon: IconName;
};

export type Project = {
  title: string;
  location: string;
  body: string;
  href: string;
  image: ImageAsset;
};

export type Review = {
  name: string;
  source: "Google" | "Yelp";
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
  link?: Link;
};

export type ProcessStep = { title: string; body: string };

export type ServiceArea = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  region: "Eastside" | "San Gabriel Valley" | "Westside";
  intro: string;
  heroImage: ImageAsset;
  expertiseTitle: string;
  highlights: string[];
  prose: string[];
  popular: Link[];
  projectsLead: string;
  projects: Project[];
  neighborhoodsLead: string;
  neighborhoods: string[];
  nearby: { name: string; slug?: string }[];
  faqs: Faq[];
  zipCodes: string[];
  geo: { latitude: number; longitude: number };
};
