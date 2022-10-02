import { IonIcon, IonItem, IonLabel, IonList, IonModal } from "@ionic/react";
import "./FreqDescription.css";

interface IFreqDescription {
    title: string;
    waveLight: number;
    object: string;
    temperature: number;
    color: string;
    height: number;
    image: string;
}
function FreqDescription({ title, waveLight, object, temperature, color, image, height }: IFreqDescription) {
    return (
        <IonModal id="example-modal" trigger="open-custom-dialog">
            <div className="wrapper">
                <h1 className="modal-title">{title}</h1>
                <p className="modal-text">This star has a Wavelight of {waveLight} A (angstroms). If you multiply it times 1 million you will get a <span style={{ fontFamily: 'Verdana', fontWeight: 900, fontSize: 15 }}>{object}</span>:</p>
                <div className="modal-banner">
                    <p className="modal-text" style={{ marginRight: 10 }}>{height} cm</p>
                    <img src="/assets/icon/height.png" width={15} />
                    <img src={"/assets/icon/" + image} width={50} />
                </div>
                <p className="modal-text">The temp. in the corona is:
                    {temperature} K
                </p>
                <p className="modal-text">Star's color is <span style={{ fontFamily: 'Verdana', fontWeight: 900, fontSize: 15 }}>{color}</span></p>
            </div>
        </IonModal>
    )
}

export default FreqDescription;