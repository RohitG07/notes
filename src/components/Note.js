import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, id, content, deleteNote }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
