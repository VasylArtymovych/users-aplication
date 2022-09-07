import { Section, Wraper, Input, Logo, Label } from "./Header.styled";
import { Container } from "components/Container";

function Header({ onSearchChange, onSelectChange, value }) {
  return (
    <Section as="header">
      <Container>
        <Wraper>
          <Logo>Lorem ipsum</Logo>
          <Label>
            <span>Sort by Name</span>
            <select name="sort" onChange={onSelectChange}>
              <option value="default">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </Label>
          <Input
            type="text"
            name="search"
            value={value}
            onChange={onSearchChange}
            placeholder="Search"
          />
        </Wraper>
      </Container>
    </Section>
  );
}

export default Header;
