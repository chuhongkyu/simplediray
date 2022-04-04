import React, {useEffect, useState} from "react";

const UnmontTest = ()=>{
    return <div>UnmontTest</div>
}


const Lifecycle =() => {

    const [isvisible, setIsvisible] = useState(false);
    const toggle = () => setIsvisible(!isvisible);

  

    return <div style={{padding: 20}}>
        <button onClick={toggle}>on/off</button>
        {isvisible && <UnmontTest/>}
    </div>;
};

export default Lifecycle;