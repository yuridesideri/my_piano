import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useRef } from "react";
import styled from 'styled-components';

export default function Key(props) {
    const audio = useRef(null);
    const {kb, no} = props;

    useEffect(() => {
        function handleEvent(e) {
            if (e.key === kb) {
                audio.current.load();
                audio.current.play();
            }
        }
        return window.addEventListener('keydown', handleEvent)}, [])

    return(
        <KeyComponent>
           <audio ref={audio} >
                <source src={require(`../assets/pianoKeys/key${no}.ogg`)}/>
           </audio>
           <button onClick={() => {audio.current.load(); audio.current.play()}}></button>
        </KeyComponent>
    )
};

const KeyComponent = styled.div`
    button{
        width: 40px;
        height: 200px;
    }
`