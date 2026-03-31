import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://example.com/", // your site url
  title: "MicRev's blog",
  slogan: "不要哭，不要笑，不要愤怒，要理解。",
  description: "眼极冷，故是非不管；心肠极热，故感慨万端。",
  social: {
    github: "", // leave empty if you don't want to show the github
    linkedin: "", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
