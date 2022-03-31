import {useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"이정환",
//     content:"하우 알 유~",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:1,
//     author:"무수환",
//     content:"하우 알 유~",
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"추홍규",
//     content:"하우 알 유~",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"김정수",
//     content:"하우 알 유~",
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
// ]


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


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
