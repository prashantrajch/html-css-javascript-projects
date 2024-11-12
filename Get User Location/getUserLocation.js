const btn = document.querySelector('button');

btn.addEventListener('click', () => {


    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        btn.innerText = `Allow to detect location`;
    }
    else{
        btn.innerText = `Your Browser not support`;
    }
})


function onSuccess(position){
    // console.log(position);

    btn.innerText = `Detecting your location...`
    let apiKey = `ffb3a49e1e97444784b019845e32138d`;

    let {latitude,longitude} = position.coords;

    console.log(latitude,longitude);

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
    .then(resolve => resolve.json()).then((result) =>{
        console.log(result.results[0].components);
        let allDetails = result.results[0].components;

        let {county,postcode,country} = allDetails;
        btn.innerText = `${county} ${postcode}, ${country}`;
        console.table(allDetails);
    }).catch(() => {
        btn.innerText = `Something went wrong`;
    })

}

function onError(error){
    console.log(error);
    if(error.code == 1){
        btn.innerText = `You denied the request`;
    }
    else if(error.code == 2){
        btn.innerText = `Location not available`;
    }
    else{
        btn.innerText = `Something went wrong`;
    }
    btn.setAttribute('disabled',"true");
}








