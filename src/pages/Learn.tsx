import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

import { planet, sparkles, sunny } from 'ionicons/icons';
import { useEffect, useState } from 'react';

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

const Learn: React.FC = () => {
    const [activePage, setActivePage] = useState(pages[0].title);
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
                        <iframe width="100%" style={{ maxWidth: 1000, minHeight: 500, marginTop: "auto", marginBottom: "auto" }} src="https://www.youtube.com/embed/HJfy8acFaOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </IonContent>
            </IonPage>
    ) : (
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
                            <iframe width="100%" style={{ maxWidth: 1000, minHeight: 500, marginTop: "auto", marginBottom: "auto" }} src="https://www.youtube.com/embed/HJfy8acFaOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </IonContent>
                </IonPage>
            </IonSplitPane>
        )
};

export default Learn;
