import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Aurora.css';
import { planet, sparkles, sunny } from 'ionicons/icons';

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


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Aurora: React.FC = () => {
    const [activePage, setActivePage] = useState(pages[2].title);
    const { height, width } = useWindowDimensions();

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
    return width < 800 ? (
            <IonPage id="main">
                <IonHeader className="hidden-lg">
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
                    <IonTitle style={{ marginTop: 20 }}>
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
    )
        :
            (
                <IonSplitPane contentId="main">
                    {/*--  the side menu  --*/}

                    <IonMenu contentId="main">
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
                        <IonHeader className="hidden-lg">
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
                            <IonTitle style={{ marginTop: 20 }}>
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
                </IonSplitPane>
                )
};

export default Aurora;
