
import React, { useContext, useEffect,useState, useRef } from 'react'
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate()
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
      console.log("token presents")
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"default"})

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})

  }

    // eslint-disable-next-line no-unused-vars
    const handleClick  = (e)=>{
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click();
      props.showAlert("Updated Successfully","success");
        

      }
      const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})

      }
  return (
    <>
      <AddNote showAlert = {props.showAlert}/>
      <button ref={ref} type="button" className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control w-50" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" placeholder='Enter title' minLength={5} required onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label ">Description</label>
                  <input type="text" className="form-control w-50" id="edescription" value={note.edescription} name='edescription' placeholder='Enter Description' minLength={5} required onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label ">Tag</label>
                  <input type="text" className="form-control w-50" id="etag" name='etag' value={note.etag} placeholder='Enter tag ' onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick}  className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length===0&& 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert = {props.showAlert} />
        })}
      </div>
    </>
  )
}

export default Notes