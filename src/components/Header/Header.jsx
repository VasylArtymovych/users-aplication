import { Section, Wraper, Input, Logo } from "./Header.styled";
import { Container } from "components/Container";

function Header({ onChange, value }) {
  return (
    <Section as="header">
      <Container>
        <Wraper>
          <Logo>Lorem ipsum</Logo>
          <Input
            type="text"
            name="search"
            value={value}
            onChange={onChange}
            placeholder="Search"
          />
        </Wraper>
      </Container>
    </Section>
  );
}

export default Header;
