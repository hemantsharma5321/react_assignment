import "../css/PasswordGenerator.css";
import { useState } from "react";
const PasswordGenerator=()=>{
    const lchar="abcdefghijklmnopqrstuvwxyz";
    const uchar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nchar="0123456789";
    const schrs="~`!@#$%^&*(){}_+=:><?/|";

    const [islowercase, setIslowercase]=useState(0);
    const [isUppercase, setIsupercase]=useState(1);
    const [isnumbers, setIsnumbers]=useState(0);
    const [issymbols, setIssymbols]=useState(0);
    const [passwordcount, setpasswordcunt]=useState(0);
    const [display,setDisplay]=useState("");

    const generate=()=>{
        let matchChars=""
       let result="";
       let length=passwordcount ? passwordcount : 8;
       
       if(islowercase){
        matchChars+=lchar;
       }
       if(isUppercase){
        matchChars+=uchar;
       }
       if(isnumbers){
        matchChars+=nchar;
       }
       if(issymbols){
        matchChars+=schrs;
       }

      for(let i=0;i<length;i++){
        let randomchar=matchChars.charAt( Math.floor(Math.random() * (matchChars.length - 0) + 0));
        result+=randomchar;
      }
      setDisplay(result);
      return;
      }
    return(
        <div className="app-container">
            <div className="header-top">
             <h1>Password Generator</h1>

            </div>
                <div className="display">{display}</div>
            
            <div>
                <label htmlFor="no_of_chars">Select Password length</label>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                <input type="number" onChange={e=>setpasswordcunt(e.target.value)}/> 
            </div>
            <br/>
            <div>
                <input type="checkbox" id="ins_uppercase" onChange={e=>setIsupercase(e.target.checked)}/>
                <label htmlFor="ins_uppercase"> Include Uppercase letters</label>
                <br/>
                <input type="checkbox" id="ins_lowercase" onChange={e=>setIslowercase(e.target.checked)}/>
                <label htmlFor="ins_lowercase"> Include Lowercase letters</label>
                <br/>
                <input type="checkbox" id="ins_numbers" onChange={e=>setIsnumbers(e.target.checked)}/>
                <label htmlFor="ins_number"> Includes numbers</label>
                <br/>
                <input type="checkbox" id="ins_symbols" onChange={e=>setIssymbols(e.target.checked)}/>
                <label htmlFor="ins_symbols"> Include Symbols</label>
            </div>
            <div>

            
                <button id="generatebtn" onClick={generate}>Generate Password</button>
            </div>
        </div>
    )
}
export default PasswordGenerator;