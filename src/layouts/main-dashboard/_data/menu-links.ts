export interface IDesktopMenuItem {
  label: string;
  link: string;
  megaMenu?: {
    title: string;
    description?: string;
    link: string;
  }[];
}

export const noAuthMenuLinks: IDesktopMenuItem[] = [
  { label: "Home", link: "/" },
  {
    label: "Mandates",
    link: "#",
    megaMenu: [
      {
        title: "Mandates",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RFPs",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Manager Mandate Activity",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Mandate Documents",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
    ],
  },
  {
    label: "Firms",
    link: "#",
    megaMenu: [
      {
        title: "Plans",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Consultants",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RIAs",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Family Offices",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Fund of Funds",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Managers",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
    ],
  },
  {
    label: "Contacts",
    link: "#",
    megaMenu: [
      {
        title: "Plan Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Consultant Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RIA Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Fund of Funds Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Family Office Contacts",
        link: "#",
      },
      {
        title: "Manager Contacts",
        link: "#",
      },
      {
        title: "People Moves",
        link: "#",
      },
    ],
  },
  { label: "Conferences", link: "#" },
  { label: "News", link: "#" },
  { label: "Maps", link: "#" },
  { label: "Documents", link: "#" },
  { label: "Tasks", link: "#" },
  { label: "Resources", link: "#" },
];
export const authMenuLinks: IDesktopMenuItem[] = [
  { label: "Home", link: "#" },
  {
    label: "Mandates",
    link: "#",
    megaMenu: [
      {
        title: "Mandates",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RFPs",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Manager Mandate Activity",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Mandate Documents",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
    ],
  },
  {
    label: "Firms",
    link: "#",
    megaMenu: [
      {
        title: "Plans",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Consultants",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RIAs",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Family Offices",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Fund of Funds",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Managers",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
    ],
  },
  {
    label: "Contacts",
    link: "#",
    megaMenu: [
      {
        title: "Plan Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Consultant Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "RIA Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Fund of Funds Contacts",
        description:
          "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
        link: "#",
      },
      {
        title: "Family Office Contacts",
        link: "#",
      },
      {
        title: "Manager Contacts",
        link: "#",
      },
      {
        title: "People Moves",
        link: "#",
      },
    ],
  },
  { label: "News", link: "#" },
  { label: "Documents", link: "#" },
];
