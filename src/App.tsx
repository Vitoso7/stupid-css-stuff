import { useState } from 'react'
import './App.css'
import styled from "styled-components";

function App() {
  const colorsList = ["1", "2", "3", "4", "5", "6", "7"]

  return (
    <div className="App">
      <Wrapper>

          <ListContainer length={colorsList.length}>
              {colorsList.map((item, index) =>
                <>
                    {/*{index === 0 && (<SpecialItem>SPECIAL</SpecialItem>)}*/}
                    <Item key={index}>{item}</Item>
                </>
              )}
              <SpecialItem length={colorsList.length}>SPECIAL</SpecialItem>
          </ListContainer>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid tomato;
  width: 70%;
  padding: 20px;
  flex-direction: row;
  height: fit-content;
`

const ListContainer = styled.div<SpecialItemProp>`
  display: grid;
  grid-auto-flow: ${(props) => props.length > 4 ? 'row' : 'column'};
  height: 350px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
`

interface SpecialItemProp {
    length: number
}
const SpecialItem = styled.div<SpecialItemProp>`
  padding: 20px;
  background-color: black;
  margin: 20px;
  width: 300px;
  height: fit-content;
  grid-column: ${props => props.length === 4 ? 'unset': '2'};
`

const Item = styled.div`
  padding: 20px;
  background-color: #535bf2;
  margin: 20px;
  width: 300px;
  height: fit-content;
`

export default App
