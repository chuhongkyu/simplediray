const DiaryItem = ({author, content, created_date, emotion, id})=>{
    return <div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정 :{emotion}</span>
            <br/>
            <span className="date">
                {new Date(created_date).toLocaleDateString()}
            </span>
        </div>
        <div className="content">{content}</div>
    </div>
}

export default DiaryItem;