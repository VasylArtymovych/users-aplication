import { useState, useEffect } from "react";
import { Container } from "components/Container";
import Card from "./Card";
import { CardsContainer, BtnsContainer, StyledButton } from "./Main.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Main({ filteredUsers }) {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const size = 4;
    const usersChunks = [];

    for (let i = 0; i < filteredUsers.length; i += size) {
      const chunk = filteredUsers.slice(i, i + size);
      usersChunks.push(chunk);
    }

    setUsers(usersChunks);
  }, [filteredUsers]);

  const nextBtnHandler = (e) => {
    if (index < users.length - 1) {
      return setIndex((state) => (state += 1));
    }
    return;
  };
  const previousBtnHandler = (e) => {
    if (index > 0) {
      return setIndex((state) => (state -= 1));
    }
    return;
  };

  return (
    <Container>
      <CardsContainer>
        {users.length > 0 &&
          users[index].map((user) => <Card key={user.id} user={user} />)}
      </CardsContainer>
      <BtnsContainer>
        <StyledButton type="button" onClick={previousBtnHandler}>
          <IoIosArrowBack size={48} style={{ marginRight: "30px" }} />
          Previous
        </StyledButton>
        <StyledButton type="button" onClick={nextBtnHandler}>
          Next <IoIosArrowForward size={48} style={{ marginLeft: "30px" }} />
        </StyledButton>
      </BtnsContainer>
    </Container>
  );
}

export default Main;
