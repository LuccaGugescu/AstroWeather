import "./SunTexture.css";

interface ISunTexture {
    image: string;
    name: string;
    link: string;
    selectedLink: string;
    setTexture: (link: string) => void;
}

function SunTexture({ image, name, link, setTexture, selectedLink }: ISunTexture) {
    return (
        <div className={"sunContainer"} onClick={() => {
            setTexture(link)
        }}>
            <img className={"texture " + (selectedLink === link ? "selected" : "")} src={"/assets/texture/" + image} alt="image of the sun with different frequency" />
            <p className="sunText">{name}</p>
        </div>)
}
export default SunTexture;