import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <ExploreContainer name="Aurora page" />
      </IonContent>
    </IonPage>
  );
};

export default Aurora;
