

// import React, {useState} from "react";

import { useState } from "react";

function Darkmode(){

    const[forDarkText, setforDarkText] =  useState({
    color: 'black',
    backgroundColor: 'white'
    })

    const[btnText, setBtnText] = useState('Enable Dark Mode');
    // const[btnclr, setBtncolor] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    const toggleBtn = () =>{
        if(forDarkText.color === 'black'){
            setforDarkText({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnText('Enable Light Mode');
        }else{
            setforDarkText({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText('Enable Dark Mode');
        }
    }

    return (
        <>
       <div className="container p-3 my-3 border" style={forDarkText}>
           <h2 style={forDarkText}>Dark Mode Container</h2>
           <p style={forDarkText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sit molestiae repellendus, eius omnis id aperiam nulla illo doloribus. Itaque, expedita voluptatum iusto deleniti magni repellat nulla quod! Consequuntur, iure.</p>
           <button className="btn btn-dark" onClick={toggleBtn}>{btnText}</button>
       </div>
       <div> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quis sunt, obcaecati, ut debitis deserunt atque assumenda cumque ad vel dolores natus repellendus sequi distinctio fugiat consequatur ex inventore. Placeat.
       </div>
       </>
    );
};

export default Darkmode;