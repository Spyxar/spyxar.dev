import { Group, Text } from "@mantine/core";

export const Footer = () => {
  return (
    <Group
      justify="space-between"
      py="xl"
      style={{
        borderTop: "1px solid #252a27",
      }}
    >
      <Text ff="monospace" size="xs" c="gray.7">
        exit 0 · {new Date().getFullYear()}
      </Text>

      <Text ff="monospace" size="xs" c="gray.7">
        built with React + Mantine
      </Text>
    </Group>
  );
};
