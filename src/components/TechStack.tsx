import { Box, Paper, Grid, Stack, Text } from "@mantine/core";
import { SectionHeader } from "./SectionHeader";

export const TechStack = () => {
  return (
    <Box component="section" id="stack" pt={{ base: 100, md: 140 }}>
      <SectionHeader command="$ cat ~/stack.txt" title="Technical stack" />

      <Paper
        radius="md"
        p={{ base: 25, md: 40 }}
        bg="#101311"
        withBorder
        style={{
          borderColor: "#252a27",
        }}
      >
        <Grid gap={40}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs">
              <Text ff="monospace" size="xs" c="terminal.5">
                frontend/
              </Text>

              <Text c="gray.4">React</Text>
              <Text c="gray.4">TypeScript</Text>
              <Text c="gray.4">Mantine</Text>
              <Text c="gray.4">CSS</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs">
              <Text ff="monospace" size="xs" c="terminal.5">
                backend/
              </Text>

              <Text c="gray.4">C#</Text>
              <Text c="gray.4">ASP.NET</Text>
              <Text c="gray.4">Entity Framework</Text>
              <Text c="gray.4">PostgreSQL</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs">
              <Text ff="monospace" size="xs" c="terminal.5">
                modding/
              </Text>

              <Text c="gray.4">Minecraft</Text>
              <Text c="gray.4">Stardew Valley</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
};
