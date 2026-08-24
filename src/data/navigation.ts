export interface NavItem {
  id: string;
  number: string;
  label: string;
}

export const siteNavItems: NavItem[] = [
  { id: "about", number: "01", label: "About" },
  { id: "toolbox", number: "02", label: "Toolbox" },
  { id: "work", number: "03", label: "Work" },
  { id: "journey", number: "04", label: "Open Source" },
  { id: "services", number: "05", label: "What I Build" },
  { id: "achievements", number: "06", label: "Milestones" },
  { id: "contact", number: "08", label: "Contact" },
];
