import React from "react";
import Button from "./Button";
import "./Modal.scss";

const Modal = ({setOpen, color}) => {
  return (
    <div className="Modal">
      <div className="content">Señor usuario el color del texto en pantalla ha cambiado a <strong><span>{color}</span></strong>.</div>
      <div className="actions">
        <Button className="Button grey" onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default Modal;