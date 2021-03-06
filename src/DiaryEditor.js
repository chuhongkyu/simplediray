import React,{useContext, useRef, useState } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "./App";

const Title = styled.h1`
color: black;
font-size: 35px;
`;


const DiaryEditor = () =>{
    const {onCreate} = useContext(DiaryDispatchContext);
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    const handleChangeState = (e) =>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

    }

    const handleSubmit = ()=>{
        if(state.author.length < 1){
           authorInput.current.focus();
            return;
        }

        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        
        onCreate(state.author, state.content, state.emotion);
        alert('μ μ₯ μ±κ³΅');
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    };

    const efeel = ["π","π","π€£","π","π","π"]
    const pickFell = efeel[Math.floor(Math.random() * efeel.length)];


    return (
        <div className="DiaryEditor">
        <Title as={"h2"}>μ€λμ μΌκΈ°<span>{pickFell}</span></Title>
        {/* <h2>μ€λμ μΌκΈ° <span>{pickFell}</span></h2> */}
        <div className="text_box">
        <div>
            <input
            ref={authorInput} 
            name="author"
            value={state.author}
            onChange={ handleChangeState}
            placeholder="μμ±μ"
            />
        </div>
        <div>
            <textarea
            ref={contentInput}
            name="content"
            value={state.content} 
            onChange={handleChangeState}
            placeholder="5κΈμμ΄μ μλ €νμΈμ."
            />
        </div>
        <div className="submit_box">
        <div>
            <select 
            name="emotion" 
            value={state.author}
            onChange={ handleChangeState}>
            μ€λμ κ°μ  : <option value={1}>π</option>
            <option value={2}>π</option>
            <option value={3}>π</option>
            <option value={4}>π</option>
            <option value={5}>π€¬</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>μΌκΈ° μ μ₯νκΈ°</button>
        </div>
        </div>

        </div>
        
    </div>
    
    );
    
};

export default React.memo(DiaryEditor);