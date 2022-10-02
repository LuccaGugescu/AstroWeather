
import "./DataModal.css";
import ReactModal from 'react-modal';
import { useEffect, useRef } from "react";
import { IonButton, IonIcon, IonRow } from "@ionic/react";

import { closeCircleOutline } from "ionicons/icons"
interface IDataModal {
    title: string;
    icon: string;
    description: string;
    isOpen: boolean;
    setIsOpen: (type: boolean) => void;
}

function DataModal({ title, icon, description, isOpen, setIsOpen }: IDataModal) {
    
    return (
        <ReactModal isOpen={isOpen} id="data-description" className="modal-container">
            <IonIcon onClick={() => setIsOpen(false)} icon={closeCircleOutline} style={{ color: "white", width: 50, height: 50, position: "absolute", right: 10, top: 10, cursor: "pointer" }} />
            <div className="mini-conatiner">
                <img src={"/assets/icon/" + icon} />
                <h1 className="modal-title">{title}</h1>
                <p>{description}</p>
            </div>
        </ReactModal>
    )
}

export default DataModal;