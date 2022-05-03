import React from "react";

const PostsList = (props) => {
  return (
    <ol>
      {props.data.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname}|{note.phone}|{note.role}{" "}
          {note.message}
          {/* <button onClick={() => props.delete(note.id)}>delete</button> */}
          {/* <button> edit </button> */}
        </li>
      ))}
    </ol>
  );
};
export default PostsList;
