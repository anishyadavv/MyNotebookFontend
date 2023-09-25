import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote,deleteId,setDeleteId} = context;
  const { note, editNote } = props;
  const showpopup=(id)=>{
    document.querySelector('.popup').style.display = 'block';
    setDeleteId(id)
  }
  const closepopup=()=>{
    document.querySelector('.popup').style.display = 'none';
  }
  const handleYes =()=>{
    document.querySelector('.popup').style.display = 'none';
    deleteNote(deleteId);
  }
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card mb-4" style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="fa-solid fa-trash mx-2"
                onClick={() => showpopup(note._id)}
              ></i>
              <i
                className="fa-sharp fa-solid fa-file-pen mx-2"
                onClick={() => editNote(note._id)}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
            <p>
              <b>{note.tag}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="popup shadow">
        
        <p>Are you sure?</p>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={closepopup}
        >
          NO
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleYes}
        >
          Yes
        </button>
      </div>
    </>
  );
};

export default NoteItem;
