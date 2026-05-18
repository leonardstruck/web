export const SITE = {
  NAME: "Leonard Struck",
  EMAIL: "hello@leonardstruck.com",
};

type MetadataEntry = {
  TITLE: string;
  DESCRIPTION: string;
};

export const METADATA = {
  HOME: {
    TITLE: "Home",
    DESCRIPTION: "Welcome to my personal website.",
  },
  BLOG: {
    TITLE: "Blog",
    DESCRIPTION:
      "A collection of my thoughts and topics I am passionate about.",
  },
} as const satisfies Record<string, MetadataEntry>;
