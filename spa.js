let container = document.getElementById("container")

function clearContainer(){
    container.innerHTML= "";
}


function characterPage(){
    clearContainer();
    container.innerHTML += `
    <h1>${stats.hero_name}</h1>
    <h2>Level: ${stats.level}</h2>
    <img onclick="characterSelect()" id="kep" src="Survivors/Bill.jpg">
   
    <div class="outerHP">
        <div class="innerHP" id="HP"></div>
        <span id="HPnum">${stats.hp}/${stats.max_hp}</span>
    </div>
    <table>
            <tr>
                <th>Erő: ${stats.strength}</th>
            </tr>
            <tr>
                <th>Ügyesség ${stats.agility}</th>
            </tr>
            <tr>
                <th>Sebzés ${stats.damage}</th>
            </tr>
            <tr>
                <th>Védelem ${stats.defense}</th>
            </tr>
    </table>
    `
    let hp = document.getElementById("HP")
    hp.style.width = (stats.hp / stats.max_hp) *100 +"%"
}
characterPage();


function advanturePage(){
    clearContainer();
    container.innerHTML +=`
    <button>Világos rét (könnyű)</button>
    <button>Sötét erdő (nehéz)</button>
    <button>Pokoli torony (pokolian nehéz)</button>
    `
}

function characterSelect(){
    clearContainer();
    container.innerHTML +=`
    <div id="CSelect">
        <img onclick="characterStats()" id="Fengmin" class="csk" src="Survivors/fengmin.jpg">
        <img onclick="characterStats()" id="Lauri" class="csk" src="Survivors/lauri.png">
        <img onclick="characterStats()" id="Bill" class="csk" src="Survivors/Bill.jpg">
        <img onclick="characterStats()" id="David" class="csk" src="Survivors/david.jpg">
        <img onclick="characterStats()" id="Jane" class="csk" src="Survivors/jane.jpg">
        <img onclick="characterStats()" id="Steve" class="csk" src="Survivors/Steve.png">
       
        
    </div>
    
    
    `
}

function characterStats(){
    clearContainer();
    container.innerHTML +=`
    <div id="CStats">


    <button id="back" onclick="characterSelect()" >Back</button>
    </div>
    `
}