function readLocalStorage() {
    const storageData = JSON.parse(window.localStorage.getItem('car')!)
    return (storageData)
}

//impress data on console when page is reloaded
window.onload = function () {
    if (readLocalStorage() != undefined) {
        console.log(readLocalStorage())
    }
}

function getFormData() {
    //Capture inputs values
    const brand = document.getElementById('brand') as HTMLInputElement
    const model = document.getElementById('model') as HTMLInputElement
    const year = document.getElementById('year') as HTMLInputElement
    const color = document.getElementById('color') as HTMLInputElement

    let automatic: boolean = true

    if ((document.getElementById('yes') as HTMLInputElement).checked) {
        automatic = true
    } else if ((document.getElementById('not') as HTMLInputElement).checked) {
        automatic = false
    }

    //create object car
    let car = {
        brand: brand.value,
        model: model.value,
        year: year.value,
        color: color.value,
        automatic: automatic
    }
    addCar(car)
}

function addCar(car: object) {
    let cars = readLocalStorage()
    if (!cars) {
        cars = []
    }
    cars.push(car)
    window.localStorage.setItem('car', JSON.stringify(cars))
}

