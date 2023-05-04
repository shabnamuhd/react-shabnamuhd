import{useState} from "react";
const LearnInput=()=>{
    const[text,setText]=useState("your text");
    const handleChange=e=>{
        setText(e.target.value);
    };
    return(
        <div>
            <h1> {text}</h1>
            <input onChange={e=> handleChange(e)}/>
        </div>
    );
};