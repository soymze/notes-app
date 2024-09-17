import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions/action";
import "./Input.css";

function Input() {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const [color, setColor] = useState('pink');

  const handleAddNote = () => {
    if (note.trim()) {
      dispatch(addNote({text: note, color}));
      setNote("");
    }
  };

  return (
    <div className="input-field">
      <input
        type="text"
        className="input"
        placeholder="       Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <div className="buttons">
        <button className="colorbutton color-btn blue" onClick={() => setColor('blue')}>a</button>
        <button className="colorbutton color-btn green" onClick={() => setColor('green')}>a</button>
        <button className="colorbutton color-btn pink" onClick={() => setColor('pink')}>a</button>
        <button className="colorbutton color-btn yellow" onClick={() => setColor('yellow')}>a</button>
        <button className="colorbutton color-btn purple" onClick={() => setColor('purple')}>a</button>
        <button className="add-button add-btn" onClick={handleAddNote}>ADD</button>
      </div>
    </div>
  );
}

export default Input;
