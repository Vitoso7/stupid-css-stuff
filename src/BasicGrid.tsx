import { useState } from "react";
import styled from "styled-components";

const BasicGrid = () => {
  const twoItems = ["coca", "pepsi"];
  const threeItems = ["coca", "pepsi", "dr. pepper"];
  const fourItems = ["coca", "pepsi", "dr. pepper", "fanta"];
  const [arrItems, setArrItems] = useState<string[]>(fourItems);

  return (
    <>
      <Wrapper>
        {arrItems.map((item, index) => (
          <Item key={index}>
            <Image />
            <Label>{item}</Label>
          </Item>
        ))}
      </Wrapper>
      <Card>
        <Wrapper>
          {arrItems.map((item, index) => (
            <Item key={index}>
              <Image />
              <Label>{item}</Label>
            </Item>
          ))}
        </Wrapper>
      </Card>
      <button
        onClick={() => {
          setArrItems(twoItems);
        }}
      >
        2 items
      </button>
      <button
        onClick={() => {
          setArrItems(threeItems);
        }}
      >
        3 items
      </button>
      <button
        onClick={() => {
          setArrItems(fourItems);
        }}
      >
        4 items
      </button>
    </>
  );
};

const Card = styled.div`
  border: solid 2px orange;
  width: 300px;
  height: 400px;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15%);
  justify-content: space-between;
  max-width: 400px
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
`;

const Image = styled.div`
  width: 30px;
  height: 30px;
  background-color: #535bf2;
`;

export default BasicGrid;
