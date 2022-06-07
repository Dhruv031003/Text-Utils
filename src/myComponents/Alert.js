import React from 'react';

export default function Alert(props) {
    return (
        props.msg && <div id='alert' style={{
            backgroundColor:"#89ffb0",
            position:"absolute",
            display:"block",
            zIndex:"2",
            padding:"20px",
            width:"100vw"
        }}>
        <h4 id='alert' style={{display:"inline",padding:"10px"}}>{props.msg}</h4>
     </div>
   )
 }
 
