import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete, onEdit }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="note-container">
           <p className="note-title">{note.title}</p>
           <p className="note-content">
             {note.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                 {line}
                 <br />
              </React.Fragment>
             ))}
           </p>

           <div className="note-footer">
                <p className="note-date">{formattedDate}</p>
                <div className="note-actions">
                 <button className="edit-button" onClick={() => onEdit(note)}>Edit</button>
                 <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
                </div>
            </div>
        </div>

    );
}

export default Note;
