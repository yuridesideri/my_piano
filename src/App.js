import styled from "styled-components";
import Key from "./components/Key";


function App() {

  const keyboardKeys = ['a','s','d','f','j','k','l'];
  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];


  return (
    <AppComponent>
      {keyboardKeys.map((el,ind) => <Key key={el} kb={el} no={notes[ind]} />)}
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
  align-items: center;
`