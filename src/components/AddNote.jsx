import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
     const context = useContext(noteContext);
      const{addNote} = context;

      const [note, setNote] = useState({title:"",description:"",tag:""})
      const handleClick  = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Added Successfully","success");

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
                        <input type="text" className="form-control w-50" id="title"  name='title' value={note.title} minLength={5} required  aria-describedby="emailHelp" placeholder='Enter title' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label ">Description</label>
                        <input type="text" className="form-control w-50" id="description" name='description' value={note.description} minLength={5} required placeholder='Enter Description'  onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label ">Tag</label>
                        <input type="text" className="form-control w-50" id="tag" name='tag' value={note.tag} placeholder='Enter tag '  onChange={onChange}/>
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote