import {
  Paper,
  Box,
  Grid,
  Stack,
  Group,
  Title,
  Button,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { SystemCard } from "./SystemCard";
import { WindowBar } from "./WindowBar";

export const WelcomeCard = () => {
  return (
    <Paper
      radius="md"
      bg="#101311"
      withBorder
      style={{
        borderColor: "#252a27",
        overflow: "hidden",
      }}
    >
      <WindowBar title="~/about/README.md" />

      <Box p={{ base: 25, md: 55 }}>
        <Grid gap={50} align="center">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <Group gap="xs">
                <Text ff="monospace" c="terminal.5" size="sm">
                  $ whoami
                </Text>
              </Group>

              <Title
                order={1}
                size="clamp(3rem, 7vw, 6.5rem)"
                lh={0.9}
                fw={800}
                style={{
                  letterSpacing: "-0.07em",
                }}
              >
                Developer
                <br />
                Modder
                <br />
                Maker
              </Title>

              <Text c="gray.5" size="lg" lh={1.7} maw={650}>
                Hi, I'm Spyxar. I spend my time building mods and tools for
                Minecraft, from Fabric mods to server plugins. I also branch out
                beyond Java, with multiple projects across technologies and
                frameworks. I like creating things that make everyone's
                experience, in games or otherwise, just a little better.
              </Text>

              <Group>
                <Button
                  component="a"
                  href="#projects"
                  color="green"
                  rightSection={<IconChevronDown size={16} />}
                >
                  Open projects
                </Button>

                <Button
                  component="a"
                  href="#contact"
                  variant="subtle"
                  color="gray"
                >
                  Contact
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <SystemCard />
          </Grid.Col>
        </Grid>
      </Box>
    </Paper>
  );
};
