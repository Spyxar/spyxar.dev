import { ProjectStatus } from "./project-status";

export const projects = [
  {
    name: "Uniqueifier",
    description:
      "Lyrical analytics platform for comparing artist vocabulary metrics",
    tech: "React | TypeScript | ASP.NET | PostgreSQL",
    status: ProjectStatus.LIVE,
    href: "https://uniqueifier.spyxar.dev",
  },
  {
    name: "TipTapShow",
    description: "A Minecraft mod for Fabric to show your keystrokes ingame",
    tech: "Java | Gradle",
    status: ProjectStatus.AVAILABLE,
    href: "https://modrinth.com/mod/TipTapShow",
  },
  {
    name: "Tiled.Net",
    description: "A library for .NET made for loading maps made with Tiled",
    tech: "C# | NUnit",
    status: ProjectStatus.AVAILABLE,
  },
];
