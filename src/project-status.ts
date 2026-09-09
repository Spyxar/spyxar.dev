export const ProjectStatus = {
  LIVE: {
    label: "Live",
    color: "blue",
  },
  AVAILABLE: {
    label: "Available",
    color: "violet",
  },
  IN_PROGRESS: {
    label: "In progress",
    color: "green",
  },
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
