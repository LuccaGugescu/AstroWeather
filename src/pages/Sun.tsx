import { IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonPage, IonRow, IonSkeletonText, IonSplitPane, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import './Sun.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useIonLoading } from '@ionic/react';
import SunTexture from '../components/SunTexture';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SUN_DATA, textureList } from "../constants/index";
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import DataCard from '../components/DataCard';
import InfoButton from '../components/InfoButton';
import FreqDescription from '../components/FreqDescription';
const Sun: React.FC = () => {
    const [texture, setTexture] = useState("https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0193.mp4");
    const [present, dismiss] = useIonLoading();
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.load();
        setIsLoading(true);
        const interval = setInterval(() => {
            setIsLoading(false);
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [texture]);
    //useEffect(() => {
    //    fetch("https://api.example.com/items")
    //        .then(res => res.json())
    //        .then(
    //            (result) => {
    //                setIsLoaded(true);
    //                setItems(result);
    //            },
    //            // Note: it's important to handle errors here
    //            // instead of a catch() block so that we don't swallow
    //            // exceptions from actual bugs in components.
    //            (error) => {
    //                setIsLoaded(true);
    //                setError(error);
    //            }
    //        )
    //    const interval = setInterval(() => {
    //        setIsLoading(false);
    //    }, 3000);
    //    return () => {
    //        clearInterval(interval);
    //    };
    //}, [])

    return (
        <>
            <IonContent>
                <IonSplitPane contentId="main">
                    {/*--  the side menu  --*/}
                    <IonMenu contentId="main" className="sidebar">
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Menu</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding sidebar">This is the menu content.</IonContent>
                    </IonMenu>
                    <IonPage id="main">
                        <IonHeader className="hidden-lg">
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
                            <IonCardSubtitle style={{ marginLeft: 30, marginTop: 30 }}>
                                Frequency Length
                            </IonCardSubtitle>
                            <Swiper
                                style={{ padding: "0px 50px 0px 20px", margin: "10px 0px 0px 0px" }}
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={10}
                                slidesPerView={2}
                                navigation
                                breakpoints={{
                                    // when window width is >= 480px
                                    0: {
                                        navigation: {
                                            enabled: false
                                        }
                                    },
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        navigation: {
                                            enabled: false
                                        }
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                        navigation: {
                                            enabled: false
                                        }
                                    },
                                    820: {
                                        slidesPerView: 5,
                                        spaceBetween: 40,
                                        navigation: {
                                            enabled: true
                                        }

                                    },
                                    1022: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                        navigation: {
                                            enabled: true,

                                        }
                                    },
                                    1400: {
                                        slidesPerView: 6,
                                        spaceBetween: 40,
                                        navigation: {
                                            enabled: true
                                        }
                                    },
                                }
                                }

                            >

                                {
                                    textureList.map(({ image, name, link }) => {
                                        return (
                                            <SwiperSlide key={name}>
                                                <SunTexture image={image} name={name} link={link} setTexture={setTexture} selectedLink={texture} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <IonRow className="ion-justify-content-center">
                                {
                                    isLoading === false ? (
                                        <div style={{ position: "relative" }}>
                                            <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "800px" }} key={texture} loop>
                                                <source src={texture} type="video/mp4" />
                                            </video>
                                            <InfoButton />
                                            {/*<FreqDescription />*/}
                                        </div>
                                    ) :
                                        (
                                            <IonSkeletonText style={{ marginTop: 20, marginBottom: 20, width: "100%", maxWidth: 800, height: 500 }} animated={true}></IonSkeletonText>
                                        )
                                }

                            </IonRow>

                            <IonTitle size="large" style={{ fontSize: 32, marginLeft: 15, marginTop: 20 }}>
                                Sun Data
                            </IonTitle>
                            <IonGrid>
                                <IonRow> {
                                    SUN_DATA.map(({ iconName, name, value }) => {
                                        return (
                                            <IonCol col-6 col-sm><DataCard iconName={iconName} name={name} value={value} /></IonCol>
                                        )
                                    })
                                }
                                </IonRow>
                            </IonGrid>
                        </IonContent>
                    </IonPage>

                </IonSplitPane>
            </IonContent>
        </>
    );
};

export default Sun;
