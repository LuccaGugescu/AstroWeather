interface ISunTexture {
    image: string;
    name: string;
}

function SunTexture({ image, name }: ISunTexture) {
    return (
        <div>
            <img src={image} />
            <p>{name}</p>
        </div>)
}
export default SunTexture;