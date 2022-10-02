import { findModalBasedOnTexture } from "../constants";
import "./SunTexture.css";

interface ISunTexture {
    image: string;
    name: string;
    link: string;
    selectedLink: string;
    setTexture: (link: string) => void;
    setDescription: (data: any) => void;
}

function SunTexture({ image, name, link, setTexture, selectedLink, setDescription }: ISunTexture) {
    return (
        <div className={"sunContainer"} onClick={() => {
            setTexture(link);
            setDescription(findModalBasedOnTexture(name));

        }}>
            <img className={"texture " + (selectedLink === link ? "selected" : "")} src={"/assets/texture/" + image} alt="image of the sun with different frequency" />
            <p className="sunText">{name}</p>
        </div>)
}
export default SunTexture;