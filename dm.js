// creation de formulaire

function FormIfClick(){
    var formulaire = document.createElement('form');
    formulaire.style.backgroundColor = "white";
    formulaire.style.display = "flex";
    formulaire.style.width = "10%";
    formulaire.setAttribute('id',"formulaire");


    var select = document.createElement('select');
    select.setAttribute('id','orientation');
    select.style.width = "100%";

    var submit = document.createElement("input");
    submit.value = "ok";
    submit.setAttribute("type","submit");
    submit.style.width="20%";
    submit.style.cursor = "pointer";

    var valueOption = ["","developpement","design","marketing"];
    var textValue = ["Sélectionnez","developpement","design","marketing"]
    for(let i = 0; i < 4; i++){
        var option = document.createElement("option");
        select.append(option);
        option.textContent = textValue[i];
        option.value = valueOption[i].toLocaleLowerCase();
    }


    formulaire.append(select);
    select.append(option);
    select.insertAdjacentElement("afterend",submit);
    
    return(formulaire);
}

// couleur random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}




var peopleContainer = document.getElementById('people'); // recuperation du bloc contenant toutes les cartes
var monFormulaire = FormIfClick();


for (let i = 0 ; i <= 29; i++ ){                            // boucle pour créé les 30 element 
    
    var person = document.createElement("div");             // creation de l'element div
    person.setAttribute('id',i);                            // id unique correspondant a l'index de la boucle(de 1 a 30)
    person.classList.add("personnage");              // ajout de la class 'personnage', commune a tout les elements
    person.style.cursor = "pointer";
    person.style.backgroundColor = getRandomColor();        // on set la couleur random en utilisant la fction qui retoune une couleur
    peopleContainer.append(person);                         // on ajoute  la div cree juste en tant qu'enfant de la div peopleContainer

    var icon = document.createElement("span");
    icon.innerHTML = "emoji_people";
    icon.className = "material-icons";
    person.append(icon);

    person.addEventListener('mousedown',function(event){ // gérer le click droit
        if(event.button == 2){                
            this.append(monFormulaire);                 // on ajoute le formulaire 
            monFormulaire.style.display = "flex";
            monFormulaire.style.position = "absolute";
            monFormulaire.style.top = event.clientY + "px";        
            monFormulaire.style.left = event.clientX + "px";  
            
        }

    })

   person.addEventListener("contextmenu",function(event){        // evenement detectant le click droit et affichant le menu 
        event.preventDefault();                             // eviter que le menu s'affiche
    })


}





var marketing = document.getElementById('mkt');
var developpement = document.getElementById('dev');
var design = document.getElementById('design');


monFormulaire.addEventListener('submit',function(e){    
    e.preventDefault();
    var div_du_personnage = this.parentNode;   // div parent du formulaire
    var valeur_du_select = monFormulaire.firstChild.value    // valeur du select enfant du formulaire
    console.log(valeur_du_select)
    console.log(div_du_personnage)

    if(valeur_du_select === "marketing"){
        marketing.append(div_du_personnage);
    }else if(valeur_du_select === 'developpement'){
        developpement.append(div_du_personnage);
    }else if (valeur_du_select === "design"){
        design.append(div_du_personnage);
    }
    this.style.display ="none";
    this.reset();
})

