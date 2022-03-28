import { useState } from "react";


const DiaryEditor = () =>{

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
        console.log(state);
        alert('저장 성공');
    }

    const [efeel, setFeel] = useState("😀");

    const handleFeel = ()=>{

        setFeel()

    }


    return (
        <div className="DiaryEditor">
        <h2>오늘의 일기 <span onChange={handleFeel}>{efeel}</span></h2>
        <div>
            <input 
            name="author"
            value={state.author}
            onChange={ handleChangeState}
            />
        </div>
        <div>
            <textarea
            name="content"
            value={state.content} 
            onChange={handleChangeState}
            />
        </div>
        <div>
            <select 
            name="emotion" 
            value={state.author}
            onChange={ handleChangeState}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
        
    </div>
    
    );
    
};

export default DiaryEditor;