import { useState, useEffect } from "react";
import { Container } from "components/Container";
import Card from "./Card";
import { CardsContainer, BtnsContainer, StyledButton } from "./Main.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Main() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        const size = 4;
        const usersChunks = [];

        for (let i = 0; i < users.length; i += size) {
          const chunk = users.slice(i, i + size);
          usersChunks.push(chunk);
        }
        setUsers(usersChunks);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUsers();
  }, []);

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
