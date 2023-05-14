import './modal.css'
import { useEffect, useState } from "react";
import axios from "axios";

const Modal = ({ open, onClose, item}) => {

    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
        <video src={item} autoPlay={true} loop onClick={onClose}/>
        </div>
      </div>
    );
  };
  export default Modal;