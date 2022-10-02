import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { planet, sparkles, sunny } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Vr from './pages/Vr';
import Sun from './pages/Sun';
import Aurora from './pages/Aurora';
import { useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
    useEffect(() => {
        document.body.classList.toggle('dark', true);
    }, []);

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/sun">

                            <Sun />
                        </Route>
                        <Route exact path="/vr">
                            <Vr />
                        </Route>
                        <Route path="/aurora">
                            <Aurora />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/sun" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" className="ion-hide-md-up">
                        <IonTabButton tab="vr" href="/vr">
                            <IonIcon icon={planet} />
                            <IonLabel>VR</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="sun" href="/sun">
                            <IonIcon icon={sunny} />
                            <IonLabel>Sun</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="aurora" href="/aurora">
                            <IonIcon icon={sparkles} />
                            <IonLabel>Aurora</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    )
};

export default App;
