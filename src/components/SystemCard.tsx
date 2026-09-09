import { Paper, Stack, Group, Divider, Text } from "@mantine/core";
import { IconServer } from "@tabler/icons-react";

export const SystemCard = () => {
  return (
    <Paper
      p="lg"
      radius="md"
      bg="#080a09"
      withBorder
      style={{
        borderColor: "#252a27",
      }}
    >
      <Stack gap="lg">
        <Group justify="space-between">
          <Text ff="monospace" size="xs" c="gray.6">
            SYSTEM
          </Text>

          <IconServer size={16} color="terminal.5" />
        </Group>

        <Stack gap="sm">
          <SystemRow label="frontend" value="online" />
          <SystemRow label="backend" value="online" />
          <SystemRow label="infrastructure" value="online" />
        </Stack>

        <Divider color="#252a27" />

        <Text ff="monospace" size="xs" c="gray.6" lh={1.7}>
          <Text span c="terminal.5" aria-hidden>
            ●
          </Text>{" "}
          all systems operational
        </Text>
      </Stack>
    </Paper>
  );
};

const SystemRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <Group justify="space-between">
      <Text ff="monospace" size="xs" c="gray.6">
        {label}
      </Text>

      <Text ff="monospace" size="xs" c="terminal.5">
        {value}
      </Text>
    </Group>
  );
};
