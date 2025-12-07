import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState=(props)=>{
    const notesInitial = [
  {
    "_id": "69305a0aea874e7e3e974e00",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes",
    "description": "This is my note for testing",
    "tag": "personal",
    "__v": 0,
    "date": "2025-12-06T05:17:08.294Z"
  },
  {
    "_id": "6933bc4e2104cfa436101d63",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes2",
    "description": "This is my note 2 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d64",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes3",
    "description": "This is my note 3 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d65",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes4",
    "description": "This is my note 4 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d66",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes5",
    "description": "This is my note 5 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d67",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes6",
    "description": "This is my note 6 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d68",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes7",
    "description": "This is my note 7 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d69",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes8",
    "description": "This is my note 8 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d70",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes9",
    "description": "This is my note 9 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  },
  {
    "_id": "6933bc4e2104cfa436101d71",
    "user": "692fc610b660757d143aeeb8",
    "title": "My notes10",
    "description": "This is my note 10 for testing",
    "tag": "personal",
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  }
  
]
const [notes,setNotes] = useState(notesInitial)


//Add a Note
const addNote = (title,description,tag)=>{
  const note=  {
    "_id": "6933bc4e2104cfa436101d71",
    "user": "692fc610b660757d143aeeb8",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2025-12-06T05:17:02.459Z",
    "__v": 0
  };
  setNotes(notes.concat(note))
}


//Delete a Note
const deleteNote = (id)=>{
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)


}


//Edit a Note
const editNote = (id,title,description,tag)=>{

}


    return (
        // This help to change notes whereever we use context
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}> 
            {props.children}
        </NoteContext.Provider>
    )

}



export default NoteState;