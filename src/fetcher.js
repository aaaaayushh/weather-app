import { display } from "./render-data"

const key = '235cf8a39adcf20aa7e6dc1664231395';

/*function searcher() {
    return new Promise((resolve)=>{
        submit.onclick = ()=>{
            console.log('clicked ' + query.value);
            resolve(query.value);
        }
    })
}*/
async function search(city){
    try{
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+key+'&units=metric',{mode:'cors'});

        const data = await response.json();
        display(data);
    }
    catch{
        alert(`${city} is not a valid city, please try again.`);
    }
}

function changeUnit(target,unit){
    console.log('changeUnit called');
    if(target.innerHTML != ""){
        let newvalue;
        switch(unit){
            case "metric": 
                console.log("converting to celsius");
                newvalue = (parseFloat(target.innerHTML)-32)*(5/9);
                target.innerHTML = `${newvalue.toFixed(2).toString()} °C`;
                break;
            case "imperial":
                console.log("converting to farenheit");
                newvalue = (parseFloat(target.innerHTML)*(9/5)+32);
                target.innerHTML = `${newvalue.toFixed(2).toString()} °F`;
                break;
        }
    }
}

export  {search,changeUnit};