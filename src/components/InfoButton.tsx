import "./InfoButton.css"
import { IonButton, IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
function InfoButton() {
    return (
        <div id="open-custom-dialog"  className="infoButtonContainer">
            <IonIcon icon={informationCircleOutline} style={{ width: "100%", height: "100%" }}  />
        </div>
    )
}

export default InfoButton;