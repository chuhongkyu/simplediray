import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";


const DiaryList = ()=>{


    const diaryList = useContext(DiaryStateContext);

    return(
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div className="Item_box">
                {diaryList.map((it) =>(
                    <DiaryItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;