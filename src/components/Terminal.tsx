import { Box, Paper, Stack, Text } from "@mantine/core";

import classes from "./Terminal.module.css";
import { WindowBar } from "./WindowBar";

export const Terminal = () => {
  return (
    <Box pt={{ base: 70, md: 100 }}>
      <Paper
        radius="md"
        bg="#080a09"
        withBorder
        style={{
          borderColor: "#252a27",
        }}
      >
        <WindowBar title="terminal — zsh" />

        <Stack p={{ base: 20, md: 35 }} gap={8} ff="monospace" fz="sm">
          <Text c="gray.7">$ git status</Text>
          <Text c="terminal.5">On branch main</Text>
          <Text c="gray.5">Your branch is up to date with 'origin/main'</Text>
          <Text c="gray.5">nothing to commit, working tree clean</Text>

          <Text c="gray.7" mt="md">
            $ git log --oneline -3
          </Text>

          {/* Decodes to OwO as hexadecimal string */}
          <Text c="gray.5">4f774f Initial commit</Text>
          {/* TipTapShow initial commit short hash */}
          <Text c="gray.5">135e0b4 Smoothing out bugs</Text>
          {/* Short hash of first public commit*/}
          <Text c="gray.5">34c2b3e Cleaning up for release</Text>

          <Text c="gray.7" mt="md">
            $ <span className={classes.cursor} />
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
};
