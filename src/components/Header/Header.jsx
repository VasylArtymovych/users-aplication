import { Section, Wraper, Input, Logo } from "./Header.styled";
import { Container } from "components/Container";

function Header() {
  return (
    <Section as="header">
      <Container>
        <Wraper>
          <Logo>Lorem ipsum</Logo>
          <Input type="text" name="name" placeholder="Search" />
        </Wraper>
      </Container>
    </Section>
  );
}

export default Header;
