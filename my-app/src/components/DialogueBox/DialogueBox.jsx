import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box
} from '@mui/material';

export default function DialogueBox({ open, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', form);
    // You can send it to an API here
    onClose();
    setForm({ fullName: '', email: '', subject: '', description: '' });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Feedback Form</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
        >
          <TextField
            name="fullName"
            placeholder="Full name"
            variant="outlined"
            value={form.fullName}
            onChange={handleChange}
            InputProps={{ style: { borderRadius: 10 } }}
          />
          <TextField
            name="email"
            placeholder="Email ID"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            InputProps={{ style: { borderRadius: 10 } }}
          />
          <TextField
            name="subject"
            placeholder="Subject"
            variant="outlined"
            value={form.subject}
            onChange={handleChange}
            InputProps={{ style: { borderRadius: 10 } }}
          />
          <TextField
            name="description"
            placeholder="Description"
            variant="outlined"
            multiline
            minRows={4}
            value={form.description}
            onChange={handleChange}
            InputProps={{ style: { borderRadius: 10 } }}
          />
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
