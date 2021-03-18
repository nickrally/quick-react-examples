import React from 'react';
const { useState, useRef, useEffect } = React; 

const App = () => {
    const [isEditing, setEditing] = useState(false);
    const [ btnTxt, setBtnTxt ]  = useState('Edit');
    const toggleEditing = () => {
      setEditing(!isEditing);
      setBtnTxt(isEditing ? 'Edit' : 'Submit')
    };
  
    const inputRef = useRef(null);
  
    useEffect(() => {
      if (isEditing) {
        inputRef.current.focus();
        inputRef.current.style.background = '#ddf'
      }
    }, [isEditing]);
    
    return (
      <div>
        {isEditing && <input ref={inputRef} />}
        <button onClick={toggleEditing}>{btnTxt}</button>
      </div>
    );
}

export default App;
