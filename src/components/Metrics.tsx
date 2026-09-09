import { SimpleGrid, Paper, Text } from "@mantine/core";

export const Metrics = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }} spacing="sm" mt="sm">
      <Metric value="6+" label="years experience" />
      <Metric value="5+" label="projects shipped" />
      <Metric value="∞" label="ideas pending" />
    </SimpleGrid>
  );
};

const Metric = ({ value, label }: { label: string; value: string }) => {
  return (
    <Paper
      p="lg"
      radius="md"
      bg="#101311"
      withBorder
      style={{
        borderColor: "#252a27",
      }}
    >
      <Text fw={800} size="1.8rem" style={{ letterSpacing: "-0.05em" }}>
        {value}
      </Text>

      <Text ff="monospace" size="xs" c="gray.7" mt={5}>
        {label}
      </Text>
    </Paper>
  );
};
