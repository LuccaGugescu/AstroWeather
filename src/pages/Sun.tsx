import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
import { textureList } from "../constants/index";
const Sun: React.FC = () => {
    const [texture, setTexture] = useState("https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0193.mp4");
    const [present, dismiss] = useIonLoading();
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.load();
    }, [texture]);

    function loadData(value: boolean) {
        const interval = setInterval(() => {
            setIsLoading(value);
        }, 3000);
        return () => clearInterval(interval);
    }
    useEffect(() => {
        present({
            message: 'Loading...',
            duration: 3000,
            cssClass: 'custom-loading'
        })
        loadData(false);
    }, [])


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
                <Swiper
                    style={{ padding: "0px 50px 0px 50px", margin: "30px 0px 60px 0px" }}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        820: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                            navigation: {
                                enabled: true
                            }
                            
                        },
                        1100: {
                            slidesPerView: 7,
                            spaceBetween: 40
                        },
                        1400: {
                            slidesPerView: 9,
                            spaceBetween: 40
                        },
                    }
                    }

                >
                    {
                        textureList.map(({ image, name, link }) => {
                            return (
                                <SwiperSlide key={name}>
                                    <SunTexture image={image} name={name} link={link} setTexture={setTexture} present={present} selectedLink={texture} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <IonRow className="ion-justify-content-center">
                    {
                        isLoading === false && (
                            <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "800px" }} key={texture}>
                                <source src={texture} type="video/mp4" />
                            </video>
                        )
                    }
                </IonRow>

            </IonContent>
        </IonPage >
    );
};

export default Sun;
