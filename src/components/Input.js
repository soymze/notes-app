import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className='input-field'>
        <input type="text" className='input' placeholder='       Enter your note here...'></input>
        <div className='buttons'>
            <button className='colorbutton color-btn blue'>a</button>
            <button className='colorbutton color-btn green'>a</button>
            <button className='colorbutton color-btn pink'>a</button>
            <button className='colorbutton color-btn yellow'>a</button>
            <button className='colorbutton color-btn purple'>a</button>
            <button className='add-button add-btn'>ADD</button>
        </div>
    </div>
  )
}

export default Input