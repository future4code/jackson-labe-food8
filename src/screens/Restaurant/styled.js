import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import useForm from '../../hooks/useForm';
import { TextField} from '@material-ui/core';



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
      width: 328,
      height: 216,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 3),
      outline: 0,
    },
    title: {
      fontSize: 16,
      textAlign:"center",
    },
    text: {
      fontSize: 16,
      textAlign: "right",
      color: "#5cb646",
      fontWeight: 500,
      height: 19,
    }
  }));

  
  export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const { form, handleInputChange, resetState } = useForm({quantity: ""})
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h5 className={classes.title}>Selecione a quantidade desejada</h5>
        <form id={"modal"}>
            <div>
                <TextField 
                  value={form.quantity} 
                  onChange={handleInputChange} 
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="quantity" 
                  type="number" 
                  id="quantity"
                  min="1"
                />
            </div>
            <p onClick={()=>props.click(form.quantity)} className={classes.text}>Adicionar ao carrinho</p>
        </form>
        <SimpleModal />
      </div>
    );
  
    return (
      <div>
        <Modal
          open={props.stateCard}
          onClose={()=>props.click(form.quantity)}
          aria-labelledby="simple-modal-title"
          aria-describedby="quantity"
        >
          {body}
        </Modal>
      </div>
    );
  }