import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";
import useGetTime from "./hooks/useGetTime";

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FlexedItem = styled.div`
  line-height: ${(props) => (props.def !== "" ? "10px" : "20px")};
  font-size: ${(props) => (props.def !== "" ? "24px" : "18px")};
  @media (max-width: 768px) {
    line-height: 20px;
    font-size: 18px;
  }
`;
const Title = styled.span`
  color: #cedebd;
`;

function ClockComponent({ country, data, def, index, setData }) {
  const time = useGetTime(country);

  const handleClick = (e) => {
    let array = JSON.parse(localStorage.getItem("ClockArray"));
    let newArr = array.filter((item, index) => index !== e);
    localStorage.setItem("ClockArray", JSON.stringify(newArr));
    setData(newArr);
  };
  // console.log(data);
  const Clock = (e) => {
    const component = (
      <InnerContainer>
        <FlexedItem def={def}>
          <h2>{data.title}</h2>
          <p>
            <Title>Country</Title>: {data.country}
          </p>
          <p>
            <Title>Description</Title>: {data.description}
          </p>
        </FlexedItem>
        <FlexedItem def={def}>
          <p>
            <Title>Date</Title>: {time[0].slice(0, time[0].length - 1)}
          </p>
          <p>
            <Title>Time</Title>: {time[1] + " " + time[2]}
          </p>
          <ButtonComponent
            text="Delete Clock"
            width="full"
            handleClick={() => handleClick(index)}
          />
        </FlexedItem>
      </InnerContainer>
    );
    return component;
  };
  return Clock();
}

export default ClockComponent;
