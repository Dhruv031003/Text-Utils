import React, { useState } from 'react'

function About() {
    const [myStyle, setmyStyle] = useState({
        color: "black",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px"
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const darkMode = () => {
        if (myStyle.color === "black") {
            setmyStyle({
                height: "100vh",
                color: "white",
                backgroundColor: "black",
                padding: "20px"
            });
            setBtnText("Disable dark mode");
            setcontStyle({
                height: "100vh",
                width: "100vw",
                backgroundColor: "grey"
            })
        }
        else {
            setmyStyle({
                height: "100vh",
                color: "black",
                backgroundColor: "white",
                padding: "20px"
            })
            setBtnText("Enable dark mode");
            setcontStyle({
                height: "100vh",
                width: "100vw",
                backgroundColor: "white"
            })

        }
    }

    const [contStyle, setcontStyle] = useState({
        height: "100vh",
        width: "100vw",
        backgroundColor: "white"
    })
    return(
            <div style={contStyle}>
                <div id='container' style={myStyle}>
                    <h1>About Us</h1>
                    <p>
                        lsajdhwnfbdsfsoaiuoqeqpjsandnfacuacpasoadpaosfiaposfas
                    </p>
                    <button className='btn' onClick={darkMode}>{btnText}</button>
                </div>
            </div>
    )
}

export default About;