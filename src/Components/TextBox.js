import React, { useState } from "react";
import PropTypes from "prop-types";

const TextBox = (props) => {
  const [text, setText] = useState("This is default Text");
  // console.log(text);
  const updateOnChange = (event) => {
    console.log("text is changed now");
    // setText("data updated") we can't update text directly like other variable ,it is done with help of setText function
    setText(event.target.value);
  };
  const toUpperCase = () => {
    console.log("you have clicked to convert text to upper case");
    let newText = text.toUpperCase();
    props.Alertfun("Text has been converted to UpperCase","success")
    setText(newText);
  };
  const toLowerCase = () => {
    console.log("you have clicked to convert text to upper case");
    let newText = text.toLowerCase();
    props.Alertfun("Text has been converted to LowerCase","success")
    setText(newText);
  };
  const clear=()=>{
    let newText="";
    props.Alertfun("Text has been Cleared","success")
    setText(newText);
  }
  return (
    <> 
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor={`exampleFormControlTextarea1 `} className="form-label">
          textarea
        </label>
        <textarea
          className={`form-control  text-${props.mode==='light'?'dark':'light'}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'#505254':'white'}}
          onChange={updateOnChange}
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={toUpperCase}>
          To UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={toLowerCase}>
          To LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={clear}>
          Clear Text
        </button>
      </div>
      <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text summary</h2>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>
        No. of words {text.split(" ").filter((item)=>{
          return item.length>0;
        }).length} and No. of character {text.length}
      </p>
      <button className="btn btn-info">Preview</button>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    </>
  );
};
TextBox.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextBox.defaultProps = {
  heading: "Please Enter Text",
};

export default TextBox;
