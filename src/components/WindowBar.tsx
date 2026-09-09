import { Box, Group, Text } from "@mantine/core";

export const WindowBar = ({ title }: { title: string }) => {
  return (
    <Box
      px="md"
      py="xs"
      style={{
        borderBottom: "1px solid #252a27",
      }}
    >
      <Group justify="space-between">
        <Group gap={6} aria-hidden>
          <Box w={9} h={9} bg="#ff5f57" style={{ borderRadius: "50%" }} />
          <Box w={9} h={9} bg="#febc2e" style={{ borderRadius: "50%" }} />
          <Box w={9} h={9} bg="#28c840" style={{ borderRadius: "50%" }} />
        </Group>

        <Text ff="monospace" size="xs" c="gray.7">
          {title}
        </Text>

        <Box w={50} />
      </Group>
    </Box>
  );
};
