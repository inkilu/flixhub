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
        <video src={item.trailer} autoPlay={true} loop onClick={onClose}/>
        <div className="movietitle2"onClick={onClose}>{item.title}</div>
        <div className="desc2" onClick={onClose}>{item.desc}</div>
        <div className="desc2" onClick={onClose}>Age Rating: {item.limit}+</div>
        <div className="genre2" onClick={onClose}>{item.genre}</div>
        </div>
      </div>
    );
  };
  export default Modal;