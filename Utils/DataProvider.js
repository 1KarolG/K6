//Data provider class reads from disk so can only be used in INIT code
class DataProvider {
    constructor() {
        this.crocodileBodyData = JSON.parse(open("../TestData/crocodile.json"));
    }
}
//is used in init code so it is fine to return an object
export const dataProvider = new DataProvider();