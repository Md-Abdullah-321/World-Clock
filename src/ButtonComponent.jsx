import { styled } from "styled-components";

const Container = styled.div`
  margin: 25px auto 0 auto;
  width: ${(props) => (props.width === "full" ? "100%" : "50%")};
  text-align: center;
`;
const Button = styled.button`
  background-color: #435334;
  color: #f2f2f2;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
`;
function ButtonComponent({ handleClick, text, width }) {
  return (
    <Container width={width}>
      <Button type="button" onClick={handleClick}>
        {text}
      </Button>
    </Container>
  );
}

export default ButtonComponent;
