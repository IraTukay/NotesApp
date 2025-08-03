import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingNoteId, setEditingNoteId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            api
                .put(`/api/notes/${editingNoteId}/`, { title, content })
                .then((res) => {
                    if (res.status === 200) alert("Note updated!");
                    else alert("Failed to update note.");
                    getNotes();
                    toggleForm();
                })
                .catch((err) => alert(err));
        } else {
            api
                .post("/api/notes/", { content, title })
                .then((res) => {
                    if (res.status === 201) alert("Note created!");
                    else alert("Failed to make note.");
                    getNotes();
                    toggleForm();
                })
                .catch((err) => alert(err));
        }
    };

    const handleEdit = (note) => {
        setShowForm(true);
        setIsEditing(true);
        setEditingNoteId(note.id);
        setTitle(note.title);
        setContent(note.content);
    };

    const handleLogout = () => {
        navigate("/logout");
    };

    const toggleForm = () => {
        setShowForm(!showForm);
        setIsEditing(false);
        setEditingNoteId(null);
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <div className="header">
                <button className="create-button" onClick={toggleForm}>
                    + New Note
                </button>
                <button className="logout-button" onClick={handleLogout}>Log out</button>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{isEditing ? "Edit Note" : "Create a Note"}</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title">Title:</label>
                            <br />
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <br />
                            <label htmlFor="content">Content:</label>
                            <br />
                            <textarea
                                id="content"
                                name="content"
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            <br />
                            <input type="submit" value={isEditing ? "Update" : "Submit"} />
                        </form>
                        <button className="close-button" onClick={toggleForm} >Close</button>
                    </div>
                </div>
            )}

            <div className="notes-container">
                <h2>My Notes:</h2>
                <div className="notes">
                {notes.map((note) => (
                    <Note
                        note={note}
                        onDelete={deleteNote}
                        onEdit={handleEdit}
                        key={note.id}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
