import React, { useState } from 'react'
import Reset from './resetIcon.png';
import Copy from './copyIcon.png';
import Alert from './Alert';
import { deftheme, darktheme, purpletheme, violettheme, greentheme } from './Themes';

export default function TextForm(props) {

    //***********************
    //useStates           //
    //********************

    //settting usesate for text in textarea
    const [text, setText] = useState('');

    //useState for darkmode button text
    const [modeText, setmodeText] = useState("Enable Dark Mode")

    //usestate for styling main container
    const [myStyle, setmyStyle] = useState({
        backgroundColor: "white",
        color: "black",
        padding: "40px"
    })

    //usestate to style textarea
    const [textareaStyle, settextareaStyle] = useState({
        backgroundColor: "white"
    })

    //use state for img/icons
    const [ImgStyle, setImgStyle] = useState({
        filter: "none"
    })

    //useState for outer container style
    const [bodyStyle, setbodyStyle] = useState({
        height: "100%",
        width: "100%",
        margin: "0px",
        padding: "30px 0px"
    })

    //useState for alert text
    const [alertText, setalerttext] = useState(null);

    //***********************
    //onchange handling   //
    //********************

    //handling on change
    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    //***********************
    //Functions           //
    //********************

    //func to convert text into uppercase
    const convertUp = () => {
        setText(text.toUpperCase());
        setalerttext("Text converted to uppercase.")
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    //func to convert text into lowercase
    const convertLow = () => {
        setText(text.toLowerCase());
        setalerttext("Text converted to lowercase.")
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    //function to reset text in textarea 
    const reset = () => {
        setText("");
        setalerttext("Text cleared.")
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    //function for deleting extra spaces
    const extraSpaces = () => {
        let a = text.split(/[ ]+/);
        setText(a.join(" "));
        setalerttext("Extra spaces removed.")
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    //function to copy text to cipboard
    const copyText = () => {
        navigator.clipboard.writeText(text);
        setalerttext("Text copied.")
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    const commonlightTheme = () => {
        setmyStyle({
            backgroundColor: "white",
            color: "black",
            padding: "40px"
        });
        setmodeText("Enable Dark Mode");
        settextareaStyle({
            backgroundColor: "white",
            color: "black"
        });
        setImgStyle({ filter: "none" });
    }
    const commondarkTheme = () => {
        setmyStyle({
            backgroundColor: "black",
            color: "white",
            padding: "40px"
        });
        settextareaStyle({
            backgroundColor: "#909090",
            color: "white"
        });
        setImgStyle({ filter: "invert(1)" });
    }

    //function to enable/disable darkmode
    const darkMode = () => {
        if (myStyle.color === "black") {
            setbodyStyle(darktheme);
            commondarkTheme();
            setmodeText("Disable dark mode");
            setalerttext("Mode enabled.")
        }
        else {
            setbodyStyle(deftheme);
            setmodeText("Enable dark mode");
            commonlightTheme();
            setalerttext("Mode disabled.")
        }
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    const greenMode = () => {
        if (bodyStyle.backgroundColor === "#134e32") {
            setbodyStyle(deftheme);
            commonlightTheme();
            setgreenText("Enable green Mode");
            setalerttext("Mode disabled.")
        }
        else {
            setgreenText("Disable green Mode");
            setbodyStyle(greentheme);
            commondarkTheme();
            setalerttext("Mode enabled.")
        }
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    const violetMode = () => {
        if (bodyStyle.backgroundColor !== "#40344e") {
            setbodyStyle(violettheme);
            setvioletText("Enable violet Mode");
            commondarkTheme();
            setalerttext("Mode enabled.")
        }
        else {
            setbodyStyle(deftheme);
            commonlightTheme();
            setvioletText("Disable violet Mode");
            setalerttext("Mode disabled.")
        }
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }

    const purpleMode=()=> {
        if (bodyStyle.backgroundColor !== "#5e2b4d") {
            setpurpleText("Enable purple Mode");
            setbodyStyle(purpletheme);
            commondarkTheme();
            setalerttext("Mode enabled.")
        }
        else {
            setbodyStyle(deftheme);
            setpurpleText("Disable purple Mode");
            commonlightTheme();
            setalerttext("Mode disabled.")
        }
        setTimeout(() => {
            setalerttext(null)
        }, 1500);
    }
    //***********************
    //Styles              //
    //********************

    //style for darkmode button 
    const darkModeStyle = {
        float: "right",
        margin: "40px 20px",
        padding: "5px",
        borderRadius: "10px",
    }

    //style for heading
    const Hstyle = { display: "inline" }

    //***********************
    //Variables           //
    //********************

    //finidng no of words in text
    const len = text.split(" ").length;

    const [purpleText,setpurpleText]=useState("Enable purple mode")
    const [violetText,setvioletText]=useState("Enable violet mode")
    const [greenText,setgreenText]=useState("Enable green mode")

    return (
        <>
            <Alert msg={alertText} />
            <div id='body' style={bodyStyle}>
                <button style={darkModeStyle} onClick={purpleMode}>{purpleText}</button>
                <button style={darkModeStyle} onClick={violetMode}>{violetText}</button>
                <button style={darkModeStyle} onClick={greenMode}>{greenText}</button>
                <button style={darkModeStyle} onClick={darkMode}>{modeText}</button>
                <div id='container' style={myStyle}>
                    <h1 style={Hstyle}>{props.heading}</h1>
                    <button id='copyBtn' onClick={copyText}><img id='copyImg' style={ImgStyle} src={Copy} alt='Copy' />  </button>
                    <textarea style={textareaStyle} className='textarea' id='myBox' value={text} onChange={handleOnchange} rows="10" columns="30"></textarea>
                    <button className='btn' onClick={convertUp}>Convert to Uppercase</button>
                    <button className='btn' onClick={convertLow}>Convert to Lowercase.</button>
                    <button className='btn' onClick={extraSpaces}>Remove extra spaces.</button>
                    <button id='resetButton' onClick={reset}><img id='reset' src={Reset} alt="img" style={ImgStyle} /></button>
                    <div>
                        <h1>Your text summary</h1>
                        <p>Number of characters: {text.length}</p>
                        <p>Number of words: {(text.charAt(text.length-1)===" " || text==="" )? len-1:len}</p>
                        <p>Number of sentences: {text.split(".").length}</p>
                        <p>Number of paragraphs: {text.split("\n").length}</p>
                        <h4>Time to read:</h4>
                        <p>Slow reader: {(len * 0.0032).toPrecision(2)} minutes</p>
                        <h4>Preview of text: </h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}