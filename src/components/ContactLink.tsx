import { Anchor, Group, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ReactElement } from "react";
import classes from "./ContactLink.module.css";

export const ContactLink = ({
  icon,
  label,
  href,
}: {
  icon: ReactElement;
  label: string;
  href: string;
}) => {
  return (
    <Anchor
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={classes.contactLink}
      c="gray.4"
      underline="never"
      px="md"
      py="sm"
      style={{
        border: "1px solid #252a27",
        borderRadius: 6,
      }}
    >
      <Group justify="space-between">
        <Group gap="sm">
          {icon}
          <Text size="sm">{label}</Text>
        </Group>
        <IconArrowUpRight size={15} />
      </Group>
    </Anchor>
  );
};
