import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Aurora.css';

const Aurora: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aurora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aurora</IonTitle>
          </IonToolbar>
              </IonHeader>
              <IonTitle style={{marginTop: 20} }>
                  Northern Hemisphere
              </IonTitle>
              <IonRow className="ion-justify-content-center">
                  <img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" style={{ width: "100%", maxWidth: 800, marginTop: 10 }} />
              </IonRow>
              <IonTitle style={{ marginTop: 20 }}>
                  Southern Hemisphere
              </IonTitle>
              <IonRow className="ion-justify-content-center">
                  <img src="https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg" style={{ width: "100%", maxWidth: 800, marginTop: 60 }} />
              </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Aurora;
