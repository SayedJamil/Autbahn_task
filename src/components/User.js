import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const User = ({ name, catchPhrase, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = (value) => {
    onDelete(id);
  };
  const [nameToEdit, setNameToEdit] = useState(name)
  const [catchPhraseToEdit, setcatchPhraseToEdit] = useState(catchPhrase)
  const handleOnEditSubmit = async (evt) => {
    evt.preventDefault();
    await onEdit(id, nameToEdit, catchPhraseToEdit);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit} className="userForm">
          <TextField id="standard-basic" label="User Name" variant="standard" color='primary' sx={{
            input: {
              color: '#d1d1e7',
            },
            label: {
              color: '#d1d1e7',
            }
          }} name="name" value={nameToEdit} onChange={(e) => setNameToEdit(e.target.value)} className="user-name" />
          <TextField id="standard-basic" label="catchPhrase" variant="standard" color='primary' sx={{
            input: {
              color: '#d1d1e7',
            },
            label: {
              color: '#d1d1e7',
            }
          }} name="catchPhrase" value={catchPhraseToEdit} onChange={(e) => setcatchPhraseToEdit(e.target.value)} className="user-catchPhrase" />
          <Button variant="contained"
            onClick={(e) => handleOnEditSubmit(e)}
          >ADD</Button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{name}</span>
          <span className="user-catchPhrase">{catchPhrase ? catchPhrase : 'N/A. Please edit to see the catchPhrase'}</span>
          <div>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete} color="error">Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};
