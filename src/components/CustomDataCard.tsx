import { IonCardContent, IonCardTitle, IonContent, IonRow } from "@ionic/react";
import "./CustomDataCard.css";
import { SOLAR_DATA_DESCRIPTION_MODAL } from "../constants/index";



interface ICustomDataCard {
    x: number;
    y: number;
    setDataDescription: (data: any) => any;
    setIsOpen: (data: any) => void;
}

function CustomDataCard({
    x, y,
    setDataDescription,
    setIsOpen
}: ICustomDataCard) {
    return (
        <div className="datacard-container" id="open-dataModal" onClick={() => {
            setDataDescription({
                title: SOLAR_DATA_DESCRIPTION_MODAL[8].name,
                description: SOLAR_DATA_DESCRIPTION_MODAL[8].description,
                icon: "bz.png"
            })
            setIsOpen(true);
        }
        }>
            <IonRow className="ion-justify-content-center">
                <img src={"/assets/icon/bz.png"} className="custom-data-logo" />
            </IonRow>
            <div className="custom-container">
                <div>
                    <IonCardTitle>
                        BZ(x)
                    </IonCardTitle>
                    <p>{x} nt</p>
                </div>
                <div>
                    <IonCardTitle>
                        BZ(y)
                    </IonCardTitle>
                    <p>{y} nt</p>
                </div>
            </div>
        </div>
    )
}


export default CustomDataCard;