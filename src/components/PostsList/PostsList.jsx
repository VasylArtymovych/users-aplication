import { useState } from "react";
import { List, Title, Text } from "./PostsLIst.styled";

function PostsList({ posts }) {
  const [shownText, setShownText] = useState(null);

  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Title
            onClick={() => {
              setShownText(post.id);
            }}
          >
            {post.title}
          </Title>
          {shownText === post.id && <Text>{post.body}</Text>}
        </li>
      ))}
    </List>
  );
}

export default PostsList;
