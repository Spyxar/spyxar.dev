import { Box, Group, Text } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { getLocalTime } from "../util/time";

export const HeaderBar = () => {
  const [time, setTime] = useState(getLocalTime());

  const tick = useCallback(() => {
    setTime(getLocalTime());
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <Box
      component="header"
      h={44}
      px="md"
      style={{
        borderBottom: "1px solid #252a27",
        background: "#101311",
      }}
    >
      <Group justify="space-between" h="100%">
        <Group gap="md">
          <Text size="xs" fw={700} ff="monospace" c="gray.5">
            SPYXAR.OS
          </Text>

          <Text size="xs" ff="monospace" c="gray.7">
            v2.6.1
          </Text>
        </Group>

        <Group gap="lg">
          <Group gap={6}>
            <Box
              w={7}
              h={7}
              bg="terminal.5"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 8px terminal.5",
              }}
              aria-hidden
            />

            <Text size="xs" ff="monospace" c="gray.5">
              ONLINE
            </Text>
          </Group>
          <Text size="xs" ff="monospace" c="gray.6" visibleFrom="sm">
            {time}
          </Text>
        </Group>
      </Group>
    </Box>
  );
};
