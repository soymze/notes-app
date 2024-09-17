import React from 'react'
import './Notes.css';

function Notes() {
  return (
    <div className='notes'>
        <div className='card pink'><p className='inner-text'>Note 3</p></div>
        <div className='card yellow'><p className='inner-text'>Note 2</p></div>
        <div className='card purple'><p className='inner-text'>Note 1</p></div>
    </div>
  )
}

export default Notes