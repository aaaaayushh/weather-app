import {search,changeUnit} from "./fetcher"

const searchData = (()=>{
    const button = document.getElementById('submit');
    button.addEventListener('click',()=>{
        const city = document.getElementById('city').value;
        search(city);
    });
    const toggle = document.querySelector("#toggle");
    var symbol = document.querySelector("#current-metric");
    const target = document.getElementById('temp');
    toggle.addEventListener("click", () => {
        //toggle.classList.toggle("metric");
        //toggle.classList.toggle("imperial");
        if(symbol.innerHTML == "metric")
            changeUnit(target,"imperial");
        else
            changeUnit(target,"metric");

        switch (symbol.innerHTML) {
            case "metric":
                symbol.innerHTML = "imperial";
                break;
            case "imperial":
                symbol.innerHTML = "metric";
                break;
        }
        
    });
})();

const display = (data)=>{
    console.log(data);
    const title = document.getElementById('title');
    const temp = document.getElementById('temp');
    const max = document.getElementById('max');
    const min = document.getElementById('min');
    const humidity = document.getElementById('humidity');
    
    let symbol = document.querySelector("#current-metric");
    let dispSym;
    if (symbol.innerHTML == "metric") {
        dispSym = "°C";
    }   
    else {
        dispSym = "°F";
    }
    
    

    title.innerHTML = data.name;
    temp.innerHTML = `${data.main.temp} ${dispSym}`;
    //humidity.innerHTML = 

};

export  {searchData,display};