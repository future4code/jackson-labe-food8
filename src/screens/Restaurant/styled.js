import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import useForm from '../../hooks/useForm';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 120,
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const { form, handleInputChange, resetState } = useForm({quantity: ""})
    // const [open, setOpen] = useState(false);
  
    // const handleOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h4 id="simple-modal-title">Selecione a quantidade desejada</h4>
        <form>
        <input type="number" id="simple-modal-description"/>
        </form>
        <SimpleModal />
      </div>
    );
  
    return (
      <div>
        {/* <button type="button" onClick={handleOpen}>
          Open Modal
        </button> */}
        <Modal
          open={props.state}
          onClose={props.click}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }