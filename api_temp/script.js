const api_url = 'http://api.vandudsigten.dk/beaches';

async function getWaterTemp() {

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);





    console.log(data[32]); //data sæt for Havnebadet Aarhus
    console.log(data[32].data[0].water_temperature); //Vandtemeratur for Havnebadet Aarhus i dag

    const voresData = data[32].data[0].water_temperature;
    document.getElementById('vandTemp').innerHTML = voresData;
}


getWaterTemp();
