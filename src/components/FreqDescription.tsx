import { IonIcon, IonItem, IonLabel, IonList, IonModal } from "@ionic/react";
import "./FreqDescription.css";

function FreqDescription() {
    return (
        <IonModal id="example-modal" trigger="open-custom-dialog">
            <div className="wrapper">
                <h1>Dialog header</h1>

                <IonList lines="none">
                </IonList>
            </div>
        </IonModal>
    )
}

export default FreqDescription;