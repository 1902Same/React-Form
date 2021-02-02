import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Form() {
  const [name1, setName1] = useState('');
  const [fullName1, setFUllName1] = useState('');
  const [name2, setName2] = useState('');
  const [fullName2, setFUllName2] = useState('');

  function submitData(event) {
    event.preventDefault();
    setFUllName1(name1);
    setFUllName2(name2);
  }
  function InputEvent1(event) {
    setName1(event.target.value);
  }
  function InputEvent2(event) {
    setName2(event.target.value);
  }

  return (
    <>
      <form onSubmit={submitData} style={{width: "30%", height:"100px", border: "2px solid black", textAlign:"center", margin:"0 auto", marginTop: "5px"}}>
        <input type="text" onChange={InputEvent1} value={name1} required placeholder="Enter First Name" /><br />
        <input type="text" onChange={InputEvent2} value={name2} required placeholder="Enter Last Name" /><br />
        <button>Submit</button>
      </form>
      <h1>{fullName1} {fullName2}</h1>
    </>
  )
}

ReactDom.render(<Form />, document.querySelector('#root'));