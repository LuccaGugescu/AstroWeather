import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Sun.css';

const Sun: React.FC = () => {
    const [texture, setTexture] = useState("https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0193.mp4");
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sun</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Sun</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonRow className="ion-justify-content-center">
                    <video autoPlay width={850 }>
                        <source src={texture} type="video/mp4" />
                    </video>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Sun;
