import React from "react";
import { List, Title, Text } from "./PostsLIst.styled";

function PostsList({ posts }) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </li>
      ))}
    </List>
  );
}

export default PostsList;
