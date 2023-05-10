// start menu btn
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close')
let nav = document.querySelector('nav');
function MenuBtn(){
    menu.addEventListener("click",function(){
        nav.style.top = 0;
    });
    closeBtn.addEventListener('click',()=>{
        nav.style.top = '-250px';
    })
}
MenuBtn();
// End menu btn
// active section in destination
let li = document.querySelectorAll('.right-side li');
let planetImage = document.querySelector('.planet-image');
let planetName = document.querySelector('.planetName');
let planetDes = document.querySelector('.planetDes');
let planetDistace = document.querySelector('.planetDistace');
let planetTravel = document.querySelector('.planetTravel');
let sectionBody = document.querySelector('.section-body');
let lSDestination = document.querySelector('.l-s-destination')
function destinationFunction(){
    li.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            li.forEach((el)=>{
                el.classList.remove('active-section');
            })
            e.target.classList.add("active-section");
            console.log(e.target.dataset.id);
            fetch('js/data.json')
            .then((response) => response.json())
            .then((json) => {
            let jsonImage=json.destinations[e.target.dataset.id].images.webp;
            let jsonName =json.destinations[e.target.dataset.id].name;
            let jsonDes =json.destinations[e.target.dataset.id].description;
            let jsonDis=json.destinations[e.target.dataset.id].distance;
            let jsonTravel=json.destinations[e.target.dataset.id].travel;
            lSDestination.innerHTML =`
            <p><span>01</span> Pick your destination</p>
        <div class="box-img">
        <img class="planet-image" src="${jsonImage}" alt="">
        </div>
            `;
            sectionBody.innerHTML = `
            <h2 class="planetName">${jsonName}</h2>
        <div class="box-des">
        <p class="planetDes">${jsonDes}</p>
        </div>
            <div class="info">
                <div class="distance">
                    <p>Avg. distance</p>
                    <p class="planetDistace">${jsonDis}</p>
                </div>
                <div class="time">
                    <p>Est. travel time</p>
                    <p class="planetTravel">${jsonTravel}</p>
                </div>
                </div>
            `;
            });
            
        })
    });
}
destinationFunction();
// End active section in destination
// active section in crew
let liLeftSection = document.querySelectorAll('.crew .left-side li');
let crewInfo = document.querySelector(".crew-info");
let crewRightSide = document.querySelector(".right-side");
function crewFunction(){
    liLeftSection.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            liLeftSection.forEach((el)=>{
                el.classList.remove('active-point');
            })
            e.target.classList.add("active-point");
            fetch('js/data.json').then((response)=>response.json())
            .then((json)=>{
                let role =json.crew[e.target.dataset.id].role;
                let name =json.crew[e.target.dataset.id].name;
                let bio =json.crew[e.target.dataset.id].bio;
                let image =json.crew[e.target.dataset.id].images.webp;
                crewInfo.innerHTML=`
                <h3>${role}</h3>
        <h2>${name}</h2>
        <div class="bio">
          <p>${bio}</p>
      </div>
                `;
                crewRightSide.innerHTML =`
                <img src="${image}" alt="">
                `
            })
        })
    })
}
crewFunction();
// End active section in crew
// Start technology Function
let textTech = document.querySelector('.text-tech');
let rightSideTech = document.querySelector('.technology .right-side');
let liTech = document.querySelectorAll('.technology .left-side li');
function TechFunction(){
    liTech.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            liTech.forEach((el)=>{
                el.classList.remove("active")
            })
            e.target.classList.add("active");
            console.log(e.target.dataset.id);
            fetch("js/data.json").then((respone)=>respone.json())
            .then((json)=>{
                console.log(json);
                let techName = json.technology[e.target.dataset.id].name;
                let techdes = json.technology[e.target.dataset.id].description;
                let techimage = json.technology[e.target.dataset.id].images.portrait;
                textTech.innerHTML =`
                <h2>${techName}</h2>
            <p>${techdes}</p>
                `;
                rightSideTech.innerHTML =`
                <img src="${techimage}" alt="">
                `
            })
        });
    });
};
TechFunction();
// End technology Function