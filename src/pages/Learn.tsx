import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

import { planet, sparkles, sunny } from 'ionicons/icons';
import { useState } from 'react';

interface Page {
    title: string;
    path: string;
    icon: string;
}

const pages: Page[] = [
    { title: 'Learn', path: '/learn', icon: planet },
    { title: 'Sun', path: '/sun', icon: sunny },
    { title: 'Aurora', path: '/aurora', icon: sparkles }
];


const Learn: React.FC = () => {
    const [activePage, setActivePage] = useState(pages[0].title);

    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page) => (
            <IonMenuToggle key={page.title} auto-hide="false">
                <IonItem href={page.path}
                    color={page.title === activePage ? 'primary' : ''}
                >
                    <IonIcon slot="start" icon={page.icon}></IonIcon>
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }
    return (
        <>
            <IonContent>
                <IonSplitPane contentId="main">
                    {/*--  the side menu  --*/}

                    <IonMenu contentId="maina">
                        <IonHeader>
                            <IonToolbar style={{ padding: "10px 10px 10px 10px" }}>
                                <img src="/assets/icon/astroweather.png" width="200px" />
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-justify-content-center">
                            <IonList>
                                {renderMenuItems()}
                            </IonList>
                        </IonContent>
                    </IonMenu>

                    <IonPage id="main">
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Learn</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent fullscreen>
                            <IonHeader collapse="condense">
                                <IonToolbar>
                                    <IonTitle size="large">Learn</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }} >
                                <video width="100%" style={{ maxWidth: 1000, marginTop: "auto", marginBottom:"auto" }} controls>
                                <source src="/assets/video/Space Weather and Earths Aurora.mp4" type="video/mp4" />
                                
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </IonContent>
                    </IonPage>
                </IonSplitPane>
            </IonContent>
        </>
    );
};

export default Learn;
