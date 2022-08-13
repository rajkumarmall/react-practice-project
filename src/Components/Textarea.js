import React, {useState} from 'react';

import './Textarea.css';

const Textarea = (props) => {

    const onchangeMethod = (event) =>{
        setText(event.target.value);
    };

    const convertUppercase = () => {
        let convertUpperCase = text.toUpperCase();
        setText(convertUpperCase);
    };

    const convertLowercase = () => {
        let convertLowercase = text.toLowerCase();
        setText(convertLowercase);
    };

     const clearText = () => {
        let clear = text.slice(0,-1);
        setText(clear);
     };

     const clearAllText = () => {
        let clearAll = "";
        setText(clearAll);
     };
   
    const[text, setText] = useState('');

    let newText = text.trim();
    let newWord = newText.split(" ");
    let newArray = newWord.filter(function(element){
        return element !== "";
    });

    const copyText = () => {
        let Copytexts = document.getElementById('comment');
        Copytexts.select();
        Copytexts.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(Copytexts.value);
    };

    return(
        <>
        <div className='container'>
            <div className="form-group">
                <h2  style={{color: props.mode === 'dark'?'white':'black'}} htmlFor="comment" className='my-4'>{props.label}</h2>
                <textarea className="form-control" rows="8" id="comment" onChange={onchangeMethod} value={text} style={{background: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button className='btn btn-primary' onClick={convertUppercase}>Convert To UpperCase</button>
            <button className='btn btn-primary ml-2' onClick={convertLowercase}>Convert To LowerCase</button>
            <button className='btn btn-primary ml-2' onMouseDown={clearText}>Clear Text</button>
            <button className='btn btn-primary ml-2' onMouseDown={clearAllText}>Clear All</button>
            <button className='btn btn-primary ml-2' onClick={copyText}>Copy</button>
        </div>
        
        <div style={{color: props.mode === 'light'?'black':'white'}} className='container my-2'>
             <h3>Your Text Summary</h3>
             <p><b>{text.length}</b> Words And <b>{newArray.length}</b> Characters.</p>
             <p><b>{0.008 * newArray.length}</b> Minutes Red.</p>
             <h3 className='my-2'>Preview Text</h3>
             <p>{text}</p>
        </div>
        </>
    );
};

export default Textarea;