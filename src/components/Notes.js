import React from 'react';
import './Notes.css';
import { useSelector } from 'react-redux';

function Notes({ searchTerm }) {
  const notes = useSelector((state) => state.notes.notes);


  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='notes'>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note, index) => (
          <div 
            key={index} 
            className={`card ${note.color}`} 
          >
            <p className='inner-text'>{note.text}</p> 
          </div>
        ))
      ) : (
        <p className='no-notes'>No notes found...</p>
      )}
    </div>
  );
}

export default Notes;
