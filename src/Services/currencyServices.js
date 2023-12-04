export function getGBP(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=GBP")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/gb.png";
    return info})
}

export function getUSD(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=USD")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/us.png"
    return info})
}

/* export function getARS(){
    return fetch("https://data.fixer.io/api/convert?access_key=77e4e00ea59581e75ce75385df27c5a7&from=EUR&to=ARS&amount=1")
    .then((res)=>res.json())
} */

export function getCZK(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=CZK")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/cz.png"
    return info})
}

export function getDKK(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=DKK")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/dk.png"
    return info})
}

export function getISK(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=ISK")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/is.png"
    return info})
}

export function getNOK(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=NOK")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/no.png"
    return info})
}

export function getSEK(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=SEK")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/se.png"
    return info})
}

export function getPLN(){
    return fetch("https://api.frankfurter.app/latest?amount=1&from=EUR&to=PLN")
    .then((res)=>res.json())
    .then(info => {info.flag = "https://flagcdn.com/256x192/pl.png"
    return info})
}