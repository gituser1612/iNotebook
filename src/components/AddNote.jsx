import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
     const context = useContext(noteContext);
      const{addNote} = context;

      const [note, setNote] = useState({title:"",description:"",tag:"default"})
      const handleClick  = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);

      }
      const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})

      }
    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control w-50" id="title"  name='title'  aria-describedby="emailHelp" placeholder='Enter title' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label ">Description</label>
                        <input type="text" className="form-control w-50" id="description" name='description' placeholder='Enter your Description'  onChange={onChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                    </div>
                    <button type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote