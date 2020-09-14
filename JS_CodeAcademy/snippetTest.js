let responseJsonData = [
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "Dostojevského ul.",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Slovensko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "Družstevnícka ul.",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Slovensko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "F. Engelsa",
        "shortName": null
    },
    "country": {
        "code": "CZ",
        "name": "Slovensko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "F. Hečku",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Nemecko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "Gaštanová ul.",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Slovensko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "Géňa",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Slovensko"
    }
},
{
    "city": "Levice",
    "cityDistrict": "Levice",
    "zipCode": "93401",
    "postOffice": "Levice 1",
    "street": {
        "name": "Hlboká ul.",
        "shortName": null
    },
    "country": {
        "code": "SK",
        "name": "Slovensko"
    }
}]

let codeArr = new Set()
let nameArr = new Set()

for ( var i in responseJsonData ) {    
    var object = responseJsonData[i];   
    codeArr.add(object.country.code)
    nameArr.add(object.country.name)
};

console.log(codeArr.size);
console.log(nameArr.has('Slovensko'));


// countryObjArr.forEach(function(object) {
//     console.log(object.code);
//     console.log(object.name);
// });

// responseJsonData.forEach(function(array) {
//     if ( array.country.code === "SK" ) {
//         console.log("Code OK");

//     } else console.error("Code WRONG");

//     if ( array.country.name === "Slovensko" ) {
//         console.log("Name OK");
//     } else console.error("Name WRONG");
// })