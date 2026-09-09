import { Stack, Title, Text } from "@mantine/core";

export const SectionHeader = ({
  command,
  title,
}: {
  command: string;
  title: string;
}) => {
  return (
    <Stack gap="xs" mb="xl">
      <Text ff="monospace" size="xs" c="terminal.5">
        {command}
      </Text>

      <Title
        order={2}
        size="clamp(2rem, 5vw, 3.5rem)"
        style={{
          letterSpacing: "-0.06em",
        }}
      >
        {title}
      </Title>
    </Stack>
  );
};
