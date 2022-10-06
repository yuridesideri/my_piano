import { useEffect, useRef } from "react";
import styled from 'styled-components';

export default function Key(props) {
    const audio = useRef(null);
    const button = useRef(null);
    const {kb, no, map} = props;
    const sharp = no.includes('s');
    const width = sharp? 40 : 50;
    const height = sharp? 240 : 400;
    const color = sharp? 'black' : 'white';
    const position = sharp? 'absolute' : 'static'


    KeyComponent.defaultProps = {
        width: width,
        height: height,
        color: color,
        position: position,
        sharp: sharp, 
    }

    function handleEvent(e) {
        if (e.key === kb || e.type === 'click') {
            audio.current.load();
            audio.current.play();
            button.current.animate({backgroundColor: ['','lightgreen','']}, {duration: 500});
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return window.addEventListener('keydown', handleEvent)}, [])

    return(
        <KeyComponent>
           <audio ref={audio} >
                <source src={require(`../assets/pianoKeys/key${no}.ogg`)}/>
           </audio>
           <button ref={button} onClick={handleEvent}>
           {map && <>
            <div>{no.replace('s', '#')}</div>
            <div>{kb}</div>
            </>
            }
           </button>
        </KeyComponent>
    )
};

const KeyComponent = styled.div`
    position: relative;
    width: auto;
    height: auto;
    border: none !important;

    button{
        position: ${props => props.position};
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        background-color: ${props => props.color};
        box-sizing: ${props => props.sharp? 'border-box' : 'content-box'};
        right: -20px;
        z-index: ${props => props.sharp? 2 : 1} !important;
        bottom: -30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        border-radius: 0 0 5px 5px;
        transition-delay: 1s;
        :active{
            transition-delay: 0s;
            animation-name: active-animation;
            animation-duration: 1s;
        }
        
        div{
            height: ${props => props.sharp ? null :  '8%'};
            color: ${props => props.sharp? 'white' : 'black'};
            font-size: 140% !important;
            aspect-ratio : 1/1;
            font-size: ${props => props.sharp ? '8px' : '10px'};
            border-radius: 30px;
            background-color: ${props => props.sharp? 'gray' : 'lightgray'};
            margin-bottom: 8px;
            border: none;
        }
    }

    @keyframes active-animation {
        0% {}
        50% {background-color: lightgreen;}
        100% {}
    }
`