interface ITexture {
    name: string;
    image: string;
    link: string;
}

export const textureList = [
    {
        image: "AIA_094_A.jpg",
        name: "AIA_094_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0094.mp4"
    },
    {
        image: "AIA_131_A.jpg",
        name: "AIA_131_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0131.mp4"
    },
    {
        image: "AIA_171_A.jpg",
        name: "AIA_171_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0171.mp4"
    },
    {
        image: "AIA_193_A.jpg",
        name: "AIA_193_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0193.mp4"
    },
    {
        image: "AIA_211_A.jpg",
        name: "AIA_211_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0211.mp4"
    },
    {
        image: "AIA_304_A.jpg",
        name: "AIA_304_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0304.mp4"
    },
    {
        image: "AIA_335_A.jpg",
        name: "AIA_335_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0335.mp4"
    },
    {
        image: "AIA_1600_A.jpg",
        name: "AIA_1600_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_1600.mp4"
    }
    ,
    {
        image: "AIA_1700_A.jpg",
        name: "AIA_1700_A",
        link: "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_1700.mp4"
    }
]


export const SUN_DATA = [
    {
        iconName: "clock.png",
        name: "age",
        value: "~4.5 billion years"
    },
    {
        iconName: "Radius.png",
        name: "radius",
        value: "~696,340 km"
    },
    {
        iconName: "gravity.png",
        name: "Gravity",
        value: "274 m/s"
    },
    {
        iconName: "star-type.png",
        name: "Star Type",
        value: "Yellow Dwarf"
    }

]

function findModalBasedOnTexture(name: string) {
    let result = {};

    switch (name) {
        case "AIA_094_A":
            result = {
                title: "AIA 094 A",
                waveLight: 94,
                object: "Dice",
                temperature: 6000000,
                color: "Green",
                height: 0.94,
                image: "dice.png"
            }
            break;
        case "AIA_131_A ":
            result = {
                title: "AIA 131 A",
                waveLight: 131,
                object: "Pea",
                temperature: 10000000,
                color: "Teal",
                height: 1.31,
                image: "eclipse.png"
            }
            break;
        case "AIA_171_A":
            result = {
                title: "AIA 171 A",
                waveLight: 171,
                object: "Dime",
                temperature: 600000,
                color: "Gold",
                height: 1.71,
                image: "coin.png"
            }
            break;

    }
    return result;
}