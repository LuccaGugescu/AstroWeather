import { IonCardContent, IonCardTitle, IonContent, IonRow } from "@ionic/react";
import "./CustomDataCard.css";


function CustomDataCard({
    x, y
}: { x: number, y: number }) {
    return (
        <div className="datacard-container">
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