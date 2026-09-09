import { Box, Container, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { theme } from "./theme";
import { HeaderBar } from "./components/HeaderBar";
import { Terminal } from "./components/Terminal";
import { Contact } from "./components/Contact";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Metrics } from "./components/Metrics";
import { Footer } from "./components/Footer";
import { WelcomeCard } from "./components/WelcomeCard";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Box mih="100vh" bg="#0b0d0c" c="#e8ebe9">
        <HeaderBar />

        <Container size="xl" py={{ base: 30, md: 50 }}>
          <WelcomeCard />

          <Metrics />

          <Projects />

          <TechStack />

          <Terminal />

          <Contact />

          <Footer />
        </Container>
      </Box>
    </MantineProvider>
  );
}

export default App;
