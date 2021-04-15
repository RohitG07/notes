import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea({ addNote }) {
  const [isExpanded, setExpanded] = useState(false);

  const [noteData, setNoteData] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setNoteData(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (noteData.title && noteData.content) {
      addNote(noteData);
      setNoteData({
        title: "",
        content: ""
      });
    }
  }

  return (
    <>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            autoComplete="off"
            onChange={handleChange}
            value={noteData.title}
          />
        )}
        <textarea
          onClick={() => setExpanded(true)}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={noteData.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit} type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
}

export default CreateArea;
