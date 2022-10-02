import { IonCard, IonCardContent, IonCardTitle, IonRow } from "@ionic/react";
import "./DataCard.css";

interface IDataCard {
    iconName: string;
    name: string;
    value: {
        density: number;
        temperature: number;
        speed: number;
        phi: number;
    }
    ;
}

interface IDataCard2 {
    iconName: string;
    name: string;
    value: string;
    
}

interface Values {
    density: number;
    temperature: number;
    speed: number;
    phi: number;

}

function chooseData(name: string, values: Values) {
    switch (name) {
        case "Density":
            return values.density;
        case "Speed":
            return values.speed;

        case "Temperature":
            return values.temperature;
        case "Phi":
            return values.phi;

    }
}

function DataCard({ iconName, name, value }: any) {
    return (
        <div className="datacard-container">
            <IonRow className="ion-justify-content-center">
                <img src={"/assets/icon/" + iconName} className="data-logo" />
            </IonRow>
            <IonCardTitle>
                {name}
            </IonCardTitle>
            <IonCardContent>
                {typeof value === 'string' ? value : chooseData(name, value)}
                {
                    name === "Gravity" &&
                    <span style={{ position: "absolute", top: 3 }}>3</span>
                }
            </IonCardContent>
        </div>
    )
}

export default DataCard;