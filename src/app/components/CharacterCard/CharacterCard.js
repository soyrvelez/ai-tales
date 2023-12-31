"use client";
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import EditCharacter from '../EditCharacter.js';


export default function CharacterCard({ character }) {

  const [scenes, setScenes] = useState([]);
  const [open, setOpen] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleOpen = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/${character._id}`);
      setCharacterInfo(response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };
  const handleClose = () => setOpen(false);


  useEffect(() => {
    const fetchScenes = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/character/${character._id}`);
        console.log('DEBUGGING', response);
        setScenes(response.data);
      } catch (error) {
        console.log("An error ocurred:", error);
      }
    };

    fetchScenes();
  }, [character._id]);

  return (
    <div>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: '100%',
          }}
          image={character.avatar}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography>
            Total Stories: {scenes.length}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button onClick={handleOpen}>View</Button>
            <Button href={`/scenes/new/${character._id}`} >Create</Button>
          </ButtonGroup>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4
          }}
        >
          <EditCharacter characterInfo={characterInfo}/>
        </Paper>
      </Modal>
    </div>
  );
}
