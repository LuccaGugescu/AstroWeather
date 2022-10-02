import { IonCard, IonCardContent, IonCardTitle, IonRow } from "@ionic/react";
import { SOLAR_DATA_DESCRIPTION_MODAL } from "../constants";
import "./DataCard.css";


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



function getUnit(name: string) {
    switch (name) {
        case "Density":
            return "g/cm**3";
        case "Speed":
            return "km/h";
        case "Temperature":
            return "K";
        case "Phi":
            return "deg"
    }
    return "";
}


function DataCard({ iconName, name, value, setDataDescription, id, setIsOpen, unity="" }: any) {
    console.log(unity);
    function settDataForModal(id: number) {
        for (let i = 0; i < SOLAR_DATA_DESCRIPTION_MODAL.length; i++) {
            if (SOLAR_DATA_DESCRIPTION_MODAL[i].id === id) {
                setDataDescription({
                    title: SOLAR_DATA_DESCRIPTION_MODAL[i].name,
                    description: SOLAR_DATA_DESCRIPTION_MODAL[i].description,
                    icon: iconName
                })
            }
        }
    }

    return (
        <div className="datacard-container" id="open-dataModal" onClick={() => { settDataForModal(id); setIsOpen(true) }}>
                <IonRow className="ion-justify-content-center">
                    <img src={"/assets/icon/" + iconName} className="data-logo" />
                </IonRow>
                <IonCardTitle>
                    {name}
            </IonCardTitle>
            <IonCardContent >
                <p>
                    {typeof value === 'string' ? value : chooseData(name, value)}
                    {
                        name === "Gravity" &&
                        <span style={{ position: "absolute", top: 3 }}>2</span>
                }
                    {getUnit(name) ? " " + getUnit(name): ""}
                    </p>
                </IonCardContent>
            </div>
        )
    }


export default DataCard;