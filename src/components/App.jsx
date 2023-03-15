import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNote] = useState([])

  function addNote(note){
    setNote(prev => {
      return [...prev, note]
    })
  }

  function deleteNode(id){
    setNote((prevNotes) => {
      return prevNotes.filter((noteitem , index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd= {addNote} />
      {notes.map((noteitem, index)=>{
        return <Note 
          key={index}
          id={index}
          title = {noteitem.title}
          content = {noteitem.content}
          onDelete = {deleteNode}
        />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
