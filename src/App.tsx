import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Notes } from "./components/Notes";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Notes />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
