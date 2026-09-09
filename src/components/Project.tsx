import { Paper, Grid, Group, Badge, Text } from "@mantine/core";
import { IconArrowUpRight, IconFolder } from "@tabler/icons-react";
import { ProjectStatus } from "../project-status";
import classes from "./Project.module.css";

export const Project = ({
  index,
  name,
  description,
  tech,
  status,
  href,
}: {
  index: number;
  name: string;
  description: string;
  tech: string;
  status: ProjectStatus;
  href?: string;
}) => {
  return (
    <Paper
      component={href ? "a" : "div"}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      p={{ base: "lg", md: "xl" }}
      radius="md"
      bg="#101311"
      className={classes.projectItem}
      style={{
        color: "inherit",
        textDecoration: "none",
        border: "1px solid #252a27",
      }}
    >
      <Grid align="center">
        <Grid.Col span={{ base: 12, sm: 1 }}>
          <Text ff="monospace" size="sm" c="terminal.5">
            0{index + 1}
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Group gap="sm">
            <IconFolder size={20} color="terminal.5" />
            <Text fw={700} size="lg">
              {name}
            </Text>
            {href && <IconArrowUpRight />}
          </Group>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Text size="sm" c="gray.5" lh={1.65}>
            {description}
          </Text>
          <Text ff="monospace" size="xs" c="gray.7" mt="sm">
            {tech}
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 2 }} style={{ textAlign: "right" }}>
          <Badge color={status.color} variant="light" radius="sm">
            {status.label}
          </Badge>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
