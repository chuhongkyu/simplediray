import {useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author,content,emotion)=>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,

    }
    dataId.current += 1;
    setData([newItem, ...data]);

  }

  const onRemove = (tragetId) =>{
    console.log(`${tragetId}가 삭제 되었습니다`);
    const newDiaryList = data.filter((it)=> it.id !== tragetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) =>{
    setData(
      data.map((it)=> it.id === targetId ? {...it, content:newContent}: it)
    );
    
  };


  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
