import "./SunTexture.css";

interface ISunTexture {
    image: string;
    name: string;
    link: string;
    selectedLink: string;
    setTexture: (link: string) => void;
    present: (value: {
        message: string,
        duration: number,
        cssClass: string,
    },
    ) => void;
}

function SunTexture({ image, name, link, setTexture, present, selectedLink }: ISunTexture) {
    return (
        <div className={"sunContainer"} onClick={() => {
            setTexture(link); present({
                message: 'Loading...',
                duration: 3000,
                cssClass: 'custom-loading'
            })
        }}>
            <img className={"texture " + (selectedLink === link ? "selected" : "")} src={"/assets/texture/" + image} alt="image of the sun with different frequency" />
            <p className="sunText">{name}</p>
        </div>)
}
export default SunTexture;