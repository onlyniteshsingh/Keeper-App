import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandthearea(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onClick = {expandthearea}
          onChange={handleChange}
          value={note.title}
          placeholder="Title" 
        />
        { expand ? <div>
        <Zoom in={true}> 
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
        </Zoom> 
        <Zoom in={true}>
          <Fab onClick={submitNote}>+</Fab>
        </Zoom> </div>
        : null
      }
      </form>
    </div>
  );
}

export default CreateArea;
