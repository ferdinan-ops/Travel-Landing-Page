import { Facebook, Instagram, Linkedin, Twitter } from "../../public";

export const links = [
  { href: "home", name: "Home", style: "xl:pr-11" },
  { href: "see", name: "Top Destinations", style: "xl:pr-11" },
  { href: "more", name: "More Destinations", style: "" },
  { href: "/sign-in", name: "Sign In", style: "xl:hidden xl:px-0" },
  { href: "/sign-up", name: "Sign Up", style: "xl:hidden xl:px-0" },
];

export const footerLinks1 = [
  { href: "/msa-self-managed", name: "MSA Self Managed" },
  { href: "/privacy", name: "Privacy" },
  { href: "/gdpr", name: "GDPR" },
  { href: "/guidelines-for-law-enforcement", name: "Guidelines for Law Enforcement" },
  { href: "/terms-of-service", name: "Terms of Service" },
  { href: "/manage-cookies", name: "Manage Cookies" },
]

export const footerLinks2 = [
  { href: "/msa-self-managed", name: "Why Move" },
  { href: "/gdpr", name: "Features" },
  { href: "/guidelines-for-law-enforcement", name: "Omnichannel" },
  { href: "/terms-of-service", name: "Community" },
  { href: "/terms-of-service", name: "Webinars" },
  { href: "/manage-cookies", name: "Marketplace" },
]

export const footerLinks3 = [
  { href: "/msa-self-managed", name: "Team" },
  { href: "/gdpr", name: "About" },
  { href: "/guidelines-for-law-enforcement", name: "Jobs" },
  { href: "/terms-of-service", name: "Partners" },
  { href: "/terms-of-service", name: "Pers" },
  { href: "/manage-cookies", name: "Blog" },
]

export const footerLinks4 = [
  { href: "https://facebook.com", name: <Facebook /> },
  { href: "https://twitter.com", name: <Twitter /> },
  { href: "https://instagram.com", name: <Instagram /> },
  { href: "https://linkedin.com", name: <Linkedin /> },
]