import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: '#282a42',
  border: '2px solid #000',
  boxShadow: 24,
  color: "#d1d1e7",
  p: 4,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
};
export const AddUser = ({ onAdd, handleClose }) => {
  const [name, setName] = useState('')
  const [catchPhrase, setcatchPhrase] = useState('')
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    console.log(name, catchPhrase)
    await onAdd(name, catchPhrase);
    handleClose()
  };

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2" >
        Add User
      </Typography>
      <TextField id="standard-basic" label="User Name" variant="standard" color='primary' sx={{
        input: {
          color: '#d1d1e7',
        },
        label: {
          color: '#d1d1e7',
        }
      }} name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField id="standard-basic" label="catchPhrase" variant="standard" color='primary' sx={{
        input: {
          color: '#d1d1e7',
        },
        label: {
          color: '#d1d1e7',
        }
      }} name="catchPhrase" value={catchPhrase} onChange={(e) => setcatchPhrase(e.target.value)} />
      <Button variant="contained" onClick={(e) => handleOnSubmit(e)}>ADD</Button>
    </Box>
  );
};
