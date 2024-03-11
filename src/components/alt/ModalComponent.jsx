import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const ModalComponent = ({ isOpen, handleClose, handleSave, initialData }) => {
    const [formData, setFormData] = useState({ ...initialData });

    useEffect(() => {
        setFormData({ ...initialData });
    }, [initialData]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveChanges = () => {
        handleSave(formData);
        handleClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Modifier l'activité</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Titre"
                    type="text"
                    fullWidth
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
                <Button onClick={handleSaveChanges}>Enregistrer</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalComponent;

