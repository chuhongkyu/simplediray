import React,{useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
color: black;
font-size: 35px;
`;


const DiaryEditor = ({onCreate}) =>{
    // useEffect(()=>{
    //     console.log("DiaryEditor 렌더");
    // });

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
        alert('저장 성공');
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    };

    const efeel = ["😀","😂","🤣","😃","😅","😊"]
    const pickFell = efeel[Math.floor(Math.random() * efeel.length)];


    return (
        <div className="DiaryEditor">
        <Title as={"h2"}>오늘의 일기<span>{pickFell}</span></Title>
        {/* <h2>오늘의 일기 <span>{pickFell}</span></h2> */}
        <div className="text_box">
        <div>
            <input
            ref={authorInput} 
            name="author"
            value={state.author}
            onChange={ handleChangeState}
            placeholder="작성자"
            />
        </div>
        <div>
            <textarea
            ref={contentInput}
            name="content"
            value={state.content} 
            onChange={handleChangeState}
            placeholder="5글자이상 입려하세요."
            />
        </div>
        <div className="submit_box">
        <div>
            <select 
            name="emotion" 
            value={state.author}
            onChange={ handleChangeState}>
            오늘의 감정 : <option value={1}>😍</option>
            <option value={2}>😋</option>
            <option value={3}>😃</option>
            <option value={4}>😑</option>
            <option value={5}>🤬</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
        </div>

        </div>
        
        
    </div>
    
    );
    
};

export default React.memo(DiaryEditor);