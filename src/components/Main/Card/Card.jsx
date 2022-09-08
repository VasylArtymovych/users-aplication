import { CardContainer, TextWraper, CardBtn } from "./Card.styled";

function Card({ user, onBtnClick, layout }) {
  return (
    <CardContainer layout={layout}>
      <TextWraper layout={layout}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>
      </TextWraper>
      <CardBtn
        onClick={() => {
          onBtnClick(user.id);
        }}
        layout={layout}
      >
        Show posts
      </CardBtn>
    </CardContainer>
  );
}

export default Card;
