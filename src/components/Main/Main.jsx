import { useState, useEffect } from "react";
import { Container } from "components/Container";
import Card from "./Card";
import PostsList from "components/PostsList";
import { LoadingLine } from "components/Loader";
import {
  CardsPostsWraper,
  CardsContainer,
  BtnsContainer,
  StyledButton,
  BackIcon,
  ForwardIcon,
} from "./Main.styled";

function Main({ filteredUsers, isLoading }) {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const size = 4;
    const usersChunks = [];

    for (let i = 0; i < filteredUsers.length; i += size) {
      const chunk = filteredUsers.slice(i, i + size);
      usersChunks.push(chunk);
    }
    setIndex(0);
    setUsers(usersChunks);
  }, [filteredUsers]);

  const nextBtnHandler = (e) => {
    if (index < users.length - 1) {
      setPosts([]);
      return setIndex((state) => (state += 1));
    }
    return;
  };

  const previousBtnHandler = (e) => {
    if (index > 0) {
      setPosts([]);
      return setIndex((state) => (state -= 1));
    }
    return;
  };

  const fetchUserPosts = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const posts = await response.json();

      setPosts(posts);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingLine />
      ) : (
        <Container as="main">
          <CardsPostsWraper layout={posts.length > 0}>
            <CardsContainer layout={posts.length > 0}>
              {users?.length > 0 &&
                users[index].map((user) => (
                  <Card
                    key={user.id}
                    user={user}
                    onBtnClick={fetchUserPosts}
                    layout={posts.length > 0}
                  />
                ))}
            </CardsContainer>
            {posts.length > 0 && <PostsList posts={posts} />}
          </CardsPostsWraper>
          <BtnsContainer>
            <StyledButton type="button" onClick={previousBtnHandler}>
              <BackIcon />
              Previous
            </StyledButton>
            <StyledButton type="button" onClick={nextBtnHandler}>
              Next <ForwardIcon />
            </StyledButton>
          </BtnsContainer>
        </Container>
      )}
    </>
  );
}

export default Main;
