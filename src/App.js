import styled from "styled-components";
import Key from "./components/Key";
import { useState } from 'react';


function App() {
  const [map, setMap ] = useState(false);

  const keyboardKeys = ['a','w','s','e','d', 'f', 'u','j','i','k','o','l'];
  const notes = ['C4','C4s','D4','D4s', 'E4', 'F4','F4s','G4','G4s', 'A4', 'A4s', 'B4'];


  return (
    <AppComponent>
      <h1>My Piano</h1>
      <div>
        {keyboardKeys.map((el,ind) => <Key map={map} key={el} kb={el} no={notes[ind]} />)}
      </div>
      <Styledbutton map={map} onClick={() => setMap(old => !old)}>
        <div className="ball">

        </div>
      </Styledbutton>
    </AppComponent>
  );
}



export default App;


const AppComponent = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1{
    font-family: 'Dancing Script', cursive;
    color: white;
    font-size: 90px;
    margin-bottom: 80px; 
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
  }
  
`

const Styledbutton = styled.div`
  margin-top: 20px;
  width: 33px;
  height: 20px;
  border-radius: 20px;
  background-color: #44a944;
  border: none !important;
  transition-duration: 1s;
  justify-content: ${props => props.map? 'flex-end' : 'flex-start'} !important;
  .ball{
    width: 19px;
    height: 19px;
    border-radius: 20px;
    background-color: white;
    border: none !important;

  }
`