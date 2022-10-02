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
        name: "Age",
        value: "~4.5 billion years",
        id: 0
    },
    {
        iconName: "Radius.png",
        name: "Radius",
        value: "~696,340 km",
        id: 1
    },
    {
        iconName: "gravity.png",
        name: "Gravity",
        value: "274 m/s",
        id: 2
    },
    {
        iconName: "star-type.png",
        name: "Star Type",
        value: "Yellow Dwarf",
        id: 3
    }

]

export function findModalBasedOnTexture(name: string) {
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
        case "AIA_131_A":
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
        case "AIA_193_A":
            result = {
                title: "AIA 193 A",
                waveLight: 193,
                object: "Sharpener",
                temperature: 1000000,
                color: "Light brown",
                height: 1.93,
                image: "sharper.png"
            }
            break;

        case "AIA_211_A":
            result = {
                title: "AIA 211 A",
                waveLight: 211,
                object: "Peanut",
                temperature: 2000000,
                color: "Purple",
                height: 2.11,
                image: "peanut.png"
            }
            break;

        case "AIA_304_A":
            result = {
                title: "AIA 304 A",
                waveLight: 304,
                object: "Clip",
                temperature: 50000,
                color: "Red",
                height: 3.04,
                image: "clip.png"
            }
            break;

        case "AIA_335_A":
            result = {
                title: "AIA 335 A",
                waveLight: 335,
                object: "Clip",
                temperature: 600000,
                color: "Blue",
                height: 3.35,
                image: "clip.png"
            }
            break;

        case "AIA_1600_A":
            result = {
                title: "AIA 1600 A",
                waveLight: 1600,
                object: "Xiaomi Redmi 10",
                temperature: 10000,
                color: "Dark yellow",
                height: 16,
                image: "iphone.png"
            }
            break;

        case "AIA_1700_A":
            result = {
                title: "AIA 1700 A",
                waveLight: 1700,
                object: "Bowling Pin",
                temperature: 4500,
                color: "Grainy pink",
                height: 17,
                image: "bowlingPin.png"
            }
            break;
    }
    return result;
}


export const SOLAR_WIND_DATA = [
    {
        iconName: "density.png",
        name: "Density",
        id: 4
    },
    {
        iconName: "wind.png",
        name: "Speed",
        id: 5
    },
    {
        iconName: "temperature.png",
        name: "Temperature",
        id: 6
    },
    {
        iconName: "phi.png",
        name: "Phi",
        id: 7
    }
]


export const SOLAR_DATA_DESCRIPTION_MODAL = [
    {
        id: 0,
        name: "Age",
        description: "age since the star exists"
    },
    {
        id: 1,
        name: "Radius",
        description: "Radius of a circle is the distance from the center of the circle to any point on it's circumference."
    },
    {
        id: 2,
        name: "Gravity",
        description: "Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun."
    },
    {
        id: 3,
        name: "Star Type",
        description: "Star type is a description used to classify a star based on size and wavelength"
    },
    {
        id: 4,
        name: "Density",
        description: "Density, is the substance's mass per unit of volume. "
    },
    {
        id: 5,
        name: "Speed",
        description: "The solar wind is a stream of charged particles released from the upper atmosphere of the Sun, called the corona.the solar wind reaches speeds between 250 and 750 km / s and is supersonic, meaning it moves faster than the speed of the fast magnetosonic wave."
    },
    {
        id: 6,
        name: "Temperature",
        description: "Temperature is a physical quantity that expresses the hotness of matter or radiation."
    },
    {
        id: 7,
        name: "Magnetic field polar angle(Phi) ",
        description: "It shows the increase of the transport of solar winds & mass into the Earth's magnetosphere [Phi in the negative = higher connection Phi into the positive = less connection]"
    },
    {
        id: 8,
        name: "Strenght of the magnetic field(BZ)",
        description: "Bz refers to the intensity of the magnetic field in the north-south direction  (Z axis)"
    }

]