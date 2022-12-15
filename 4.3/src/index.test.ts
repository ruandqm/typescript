import { searchByBrand, searchAvaliableBrands, searchByProperty } from './index'

const cars = [{
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
]

test('search cars by brand name', () => {
    expect(searchByBrand(cars, 'toyota')).toEqual([{
        brand: 'toyota',
        color: 'white',
        year: 2020
    }, {
        brand: 'toyota',
        color: 'black',
        year: 2019
    }]);
});

test('search avaliable brands', () => {
    expect(searchAvaliableBrands(cars)).toEqual(['honda', 'chevrolet', 'toyota', 'tesla']);
});
test('search cars by property', () => {
    expect(searchByProperty(cars, ['brand', 'year'])).toEqual([{ brand: 'honda', year: 2022 },
    { brand: 'chevrolet', year: 2018 },
    { brand: 'toyota', year: 2020 },
    { brand: 'tesla', year: 2022 },
    { brand: 'toyota', year: 2019 }]);
});
