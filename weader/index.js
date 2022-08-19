window.addEventListener('load',()=>{
    let lon
    let lat

    let temp

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position)
            lat=position.coords.latitude
            console.log("laaaaaaa",position.coords.latitude)
            lon=position.coords.longitude

            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=31380278779a88a44985b3d746fffd45`

            fetch(api)

        .then(response=>{
           return response.json()
        })
        .then(data=>{
        console.log(data)
        console.log(data.main.temp)
        document.querySelector(".degree").innerHTML=Math.round(data.main.temp/10)
        document.querySelector(".timezone").innerHTML=data.name
    }
        )
        })
        
    }
    else{
        history.textContent="geolaction not allowed by user"
    }
   
})



//31380278779a88a44985b3d746fffd45



