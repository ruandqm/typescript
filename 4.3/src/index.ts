//functions
interface Brands {
    brand: string
}
interface Car {
    brand: string
    color: string
    year: number
    [key: string]: any
}

export function searchByBrand(cars: Array<Car>, brand: string) {
    let matchingCars = []
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].brand === brand) {
            matchingCars.push(cars[i])
        }
    }
    return (matchingCars)
}

export function searchAvaliableBrands(cars: Array<Car>) {
    let avaliableBrands: Array<String> = []
    for (let i = 0; i < cars.length; i++) {
        if (avaliableBrands.every(x => x != cars[i].brand)) {
            avaliableBrands.push(cars[i].brand)
        }
    }
    return (avaliableBrands)
}

export function searchByProperty(cars: Array<Car>, properties: Array<string>) {
    let filteredCars: Array<Object> = []
    for (let i = 0; i < cars.length; i++) {
        let car: { [key: string]: any } = {}
        for (let j = 0; j < properties.length; j++) {
            car[properties[j]] = cars[i][properties[j]]
            //car.properties[j] = cars[i].properties[j]
        }
        filteredCars.push(car)
    }
    return (filteredCars)
}

//calls

searchByBrand([{
    brand: 'honda',
    color: 'black',
    year: 2022
}, {
    brand: 'chevrolet',
    color: 'red',
    year: 2018
}, {
    brand: 'toyota',
    color: 'white',
    year: 2020
}, {
    brand: 'tesla',
    color: 'blue',
    year: 2022
}, {
    brand: 'toyota',
    color: 'black',
    year: 2019
}
], 'toyota')

searchAvaliableBrands([{
    brand: 'honda',
    color: 'black',
    year: 2022
}, {
    brand: 'chevrolet',
    color: 'red',
    year: 2018
}, {
    brand: 'toyota',
    color: 'white',
    year: 2020
}, {
    brand: 'tesla',
    color: 'blue',
    year: 2022
}, {
    brand: 'toyota',
    color: 'black',
    year: 2019
}
])
searchByProperty([{
    brand: 'honda',
    color: 'black',
    year: 2022
}, {
    brand: 'chevrolet',
    color: 'red',
    year: 2018
}, {
    brand: 'toyota',
    color: 'white',
    year: 2020
}, {
    brand: 'tesla',
    color: 'blue',
    year: 2022
}, {
    brand: 'toyota',
    color: 'black',
    year: 2019
}
], ['brand', 'year'])