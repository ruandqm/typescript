"use strict";
function searchByBrand(cars, brand) {
    let matchingCars = [];
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].brand === brand) {
            matchingCars.push(cars[i]);
        }
    }
    console.log(matchingCars);
}
function searchAvaliableBrands(cars) {
    let avaliableBrands = [];
    for (let i = 0; i < cars.length; i++) {
        if (avaliableBrands.every(x => x != cars[i].brand)) {
            avaliableBrands.push(cars[i].brand);
        }
    }
    console.log(avaliableBrands);
}
function searchByProperty(cars, properties) {
    let filteredCars = [];
    for (let i = 0; i < cars.length; i++) {
        let car = {};
        for (let j = 0; j < properties.length; j++) {
            car[properties[j]] = cars[i][properties[j]];
            //car.properties[j] = cars[i].properties[j]
        }
        filteredCars.push(car);
    }
    console.log(filteredCars);
}
//calls
searchByBrand([{
        brand: 'honda'
    }, {
        brand: 'chevrolet'
    }, {
        brand: 'toyota'
    }, {
        brand: 'tesla'
    }, {
        brand: 'toyota'
    }
], 'toyota');
searchAvaliableBrands([{
        brand: 'honda'
    }, {
        brand: 'chevrolet'
    }, {
        brand: 'toyota'
    }, {
        brand: 'tesla'
    }, {
        brand: 'toyota'
    }
]);
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
], ['brand', 'year']);
//# sourceMappingURL=index.js.map