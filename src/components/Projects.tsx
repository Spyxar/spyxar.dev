import { Box, Stack } from "@mantine/core";
import { projects } from "../projects";
import { Project } from "./Project";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <Box component="section" id="projects" pt={{ base: 80, md: 120 }}>
      <SectionHeader command="$ ls ~/projects" title="Projects" />

      <Stack gap="sm">
        {projects.map((project, index) => (
          <Project key={project.name} index={index} {...project} />
        ))}
      </Stack>
    </Box>
  );
};
