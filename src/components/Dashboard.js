import React from 'react'
import { User } from './User'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddUser } from './AddUser';

const Dashboard = ({ users, onEdit, onDelete, onAdd }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h2>
                Dashboard
                <Button variant="outlined" startIcon={<AddIcon />} style={{ marginLeft: 15 }} onClick={handleOpen}>
                    Add new catchPhrase
                </Button>
            </h2>
            {users.map((user) => (
                <User
                    id={user.id}
                    key={user.id}
                    name={user.name}
                    catchPhrase={user.company.catchPhrase}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <AddUser onAdd={onAdd} handleClose={handleClose} />

            </Modal>
        </div>
    )
}

export default Dashboard