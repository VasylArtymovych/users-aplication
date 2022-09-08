import { CardContainer, TextWraper, CardBtn } from "./Card.styled";

function Card({ user, onBtnClick }) {
  return (
    <CardContainer>
      <TextWraper>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>
      </TextWraper>
      <CardBtn
        onClick={() => {
          onBtnClick(user.id);
        }}
      >
        Show posts
      </CardBtn>
    </CardContainer>
  );
}

export default Card;
