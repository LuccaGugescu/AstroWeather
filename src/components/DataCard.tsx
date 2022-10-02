import { IonCard, IonCardContent, IonCardTitle, IonRow } from "@ionic/react";
import "./DataCard.css";

interface IDataCard {
    iconName: string;
    name: string;
    value: string;
}
function DataCard({ iconName, name, value }: IDataCard) {
    return (
        <div className="datacard-container">
            <IonRow className="ion-justify-content-center">
                <img src={"/assets/icon/" + iconName} className="data-logo" />
            </IonRow>
            <IonCardTitle>
                {name}
            </IonCardTitle>
            <IonCardContent>
                {value}
                {
                    name === "Gravity" &&
                    <span style={{ position: "absolute", top: 3 }}>3</span>
                }
            </IonCardContent>
        </div>
    )
}

export default DataCard;