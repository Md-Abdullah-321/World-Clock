import { countries } from "moment-timezone/data/meta/latest.json";
import { useState } from "react";
import { styled } from "styled-components";
import ButtonComponent from "./ButtonComponent";

const Container = styled.div`
  margin: 0 auto 0 auto;
  width: 50%;
  margin-top: 50px;
  background-color: #faf1e4;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #435334;
  border-radius: 5px;
  padding: 5px;
  color: #435334;
`;
const TextArea = styled.textarea`
  outline: none;
  border: 1px solid #435334;
  border-radius: 5px;
  padding: 5px;
  color: #435334;
`;

const Select = styled.select`
  outline: none;
  border: 1px solid #435334;
  border-radius: 5px;
  padding: 5px;
  color: #435334;
`;
// Get All Zones:
const keylenght = Object.entries(countries);
let countryArray = [];
for (let i = 0; i < keylenght.length; i++) {
  countryArray = [...countryArray, ...keylenght[i][1].zones];
}

const init = {
  country: "",
  title: "",
  description: "",
};

function Form({ setData }) {
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      state.country !== "" ||
      state.title !== "" ||
      state.description !== ""
    ) {
      if (
        localStorage.getItem("ClockArray") === undefined ||
        localStorage.getItem("ClockArray") === null
      ) {
        localStorage.setItem("ClockArray", JSON.stringify([state]));
        setData([state]);
      } else {
        let array = JSON.parse(localStorage.getItem("ClockArray"));
        // let newJsonArray = JSON.stringify(array.push(state));
        localStorage.setItem("ClockArray", JSON.stringify([...array, state]));
        setData(JSON.parse(localStorage.getItem("ClockArray")));
      }

      setState({ ...init });
    } else {
      alert("Please, fill all Data.");
    }
  };

  return (
    <Container>
      <InnerDiv>
        <label htmlFor="Select Country">Select Country</label>
        <Select name="country" value={state.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {countryArray.map((country, index) => {
            return (
              <option key={index} value={country}>
                {country}
              </option>
            );
          })}
        </Select>
      </InnerDiv>

      <InnerDiv>
        <label htmlFor="title">Enter Title:</label>
        <Input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          placeholder="Enter Title"
        />
      </InnerDiv>

      <InnerDiv>
        <label htmlFor="title">Enter Description:</label>
        <TextArea
          name="description"
          value={state.description}
          onChange={handleChange}
          placeholder="Enter Description"
        />
      </InnerDiv>

      <ButtonComponent handleClick={handleSubmit} text="Create New Clock" />
    </Container>
  );
}

export default Form;
