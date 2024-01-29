const header = document.querySelector('#header')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const container = document.querySelector('#container')
const sky = document.querySelector('#sky')
const img = document.querySelector('#img')
const span = document.querySelector('span')
const body = document.querySelector('body')
const relogio = setInterval(function time(){
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var sec = time.getSeconds();

    if(hours < 10) hours = '0' + hours
    if(mins < 10) mins = '0' + mins
    if(sec < 10) sec = '0' + sec
    
    horas.textContent = `${hours}`
    minutos.textContent = `${mins}`
    segundos.textContent = `${sec}`


    if(hours < 6){
        dayTime = 'Dawn'
    }else if (hours < 12){
        dayTime = 'Morning'
    }else if (hours < 15){
        dayTime = 'Noon'
    }else if (hours < 18){
        dayTime = 'Afternoon'
    }else{
        dayTime = 'Night'
    }
    
    
    
    if(hours < 6){
        body.style.background = 'var(--dawn)'
    }else if (hours < 12){
        body.style.background = 'var(--morning)'
    }else if (hours < 15){
        body.style.background = 'var(--noon)'
    }else if (hours < 18){
        body.style.background = 'var(--afternoon)'
    }else{
        body.style.background = 'var(--night)'
    }
    
    if(hours < 6){
        container.style.background = '#5d4b8bac'
    }else if (hours < 12){
        container.style.background = '#FF7B00'
    }else if (hours < 15){
        container.style.background = '#ddb502'
    }else if (hours < 18){
        container.style.background = '#FF9500';
    }else{
        container.style.background = '#240046';
    }

    
    if(hours < 6){
        img.src = 'img/night.png'
    }else if (hours < 12){
        img.src = 'img/sunrise.png'
    }else if (hours < 15){
        img.src = 'img/daytime.png'
    }else if (hours < 18){
        img.src = 'img/afternoon.png'
    }else{
        img.src = 'img/sunset.png'
    }
    
    if(hours < 6){
        sky.src = 'img/dawnbg.jpg'
    }else if (hours < 12){
        sky.src = 'img/morningbg.jpg'
    }else if (hours < 15){
        sky.src = 'img/noonbg.jpg'
    }else if (hours < 18){
        sky.src = 'img/afternoonbg.jpg'
    }else{
        sky.src = 'img/nightbg.jpg'
    }
    
    
    
    header.innerHTML = `It's ${dayTime} time. Relax.`
    horario.innerHTML = `${hours}:${mins}:${sec}`
    
    
    
    
})



