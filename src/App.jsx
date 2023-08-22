// import { useEffect, useState } from "react";

import { useState } from "react";
import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";
import ClockComponent from "./ClockComponent";
import Form from "./Form";

const Body = styled.div`
  background-color: #faf1e4;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 75vw;
  margin: 0px auto 0 auto;
  padding: 50px 25px 50px 25px;
  background-color: #cedebd;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  color: #fff;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const InnerContainer = styled.div`
  background-color: #435334;
  border-radius: 10px;
  padding: 10px;
  grid-column: ${(props) => (props.def ? "1/-1" : "")};
`;

let array = localStorage.getItem("ClockArray");
if (array === null || array === undefined) {
  array = [];
} else {
  array = JSON.parse(array);
}

function App() {
  const [data, setData] = useState(array);
  const [Open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!Open);
  };
  return (
    <Body>
      <MainContainer>
        <Container>
          {data.map((clock, index) => {
            return (
              <InnerContainer key={index} def={index === 0 ? "max" : ""}>
                <ClockComponent
                  country={clock.country}
                  data={clock}
                  def={index === 0 ? "max" : ""}
                  index={index}
                  setData={setData}
                />
              </InnerContainer>
            );
          })}
        </Container>
        {Open ? (
          <div>
            <Form setData={setData} /> <br />
            <ButtonComponent handleClick={handleOpenClose} text="Close Form" />
          </div>
        ) : (
          <ButtonComponent handleClick={handleOpenClose} text="Open Form" />
        )}
      </MainContainer>
    </Body>
  );
}

export default App;
