//Début des Variables
let darkness = document.getElementById("footerBtnGriffith");
let light = document.getElementById("light");
let pause = document.getElementsByClassName("break");
let changeRow = document.getElementsByClassName("row50vh");
let lienSecret = document.getElementById("descriptifImg");
let showOthers1 = document.getElementById("descriptifTexteGriffith");
let showOthers2 = document.getElementById("descriptifTexteFemto");


//Fin des Variables

//Début des Fonctions
    darkness.onclick = function(){
        //Font Changes
        document.getElementById("global").style.fontFamily = "Brush Script MT";
        //Navbar-Brand Changes
        document.getElementById("light").innerText = "FEMTO";
        document.getElementById("light").style.color = "red";
        //Header Changes
        document.getElementById("headerGriffith").style.backgroundImage = "url(./public/img/headerFemtoBg.jpg)";
        document.getElementById("headerGriffith").style.backgroundSize = "cover";
        document.getElementById("headerGriffith").style.backgroundRepeat = "no-repeat";
        //Break changes
        for(var i = 0; i < pause.length; i++) {
            pause[i].style.backgroundColor = "black";};
        //Description Changes
        document.getElementById("global").style.backgroundColor = "black";
        document.getElementById("sectionDescriptionGriffith").style.backgroundColor = "#0e0e0e";
        document.getElementById("descriptifImg").innerHTML = "<img src='./public/img/descriptifFemto.jpg' alt='Descriptif Femto' id='descriptifImgFemto' height='300px' width='350px'>";
        document.getElementById("descriptifTexte").innerHTML = "<p id='descriptifTexteFemto' class='mt-3'>Dernier «né» des God Hand. Anciennement, il était l'humain connu sous le nom de Griffith, avant qu'il ne choisisse de suivre son rêve, quel qu'en soit le prix. Ami, puis ennemi de Guts, leurs destins sont liés. Selon les dires de ses pairs, Femto représente la corruption par l'Envie: son histoire et sa personne incarnent la corruption nécessaire à l'assouvissement des ambitions de l'Humanité.</p>";
        //Info Changes
        document.getElementById("sectionInfoGriffith").style.height = "200vh";
        document.getElementById("sectionInfoGriffith").style.backgroundColor = "black";
        for(var i = 0; i < changeRow.length; i++) {
            changeRow[i].style.height = "100vh";
            changeRow[i].style.textAlign = "center";};
        document.getElementById("row501").innerHTML = "<img src='./public/img/histoireFemto.jpg' alt='Info Img1' height='95%' width='75%'>";
        document.getElementById("row502").innerHTML = "<img src='./public/img/personnaFemto.jpg' alt='Info Img2' height='95%' width='75%'>";
        document.getElementById("row503").innerHTML = "<img src='./public/img/reveFemto.jpg' alt='Info Img3' height='95%' width='75%'>";
        document.getElementById("row504").innerHTML = "<img src='./public/img/equipFemto.jpg' alt='Info Img4' height='95%' width='75%'>";
        //Void Changes
        document.getElementById("vide").style.backgroundImage = "url(./public/img/videFemtoBg.jpg)";
        document.getElementById("vide").style.backgroundAttachment = "scroll";
        //Footer Changes
        document.getElementById("footer").style.backgroundColor = "black";
        //Reload
        //location.reload(true);
    }
    
    light.onclick = function(){
        // //Font Changes
        // document.getElementById("global").style.fontFamily = "fantasy";
        // //Navbar-Brand Changes
        // document.getElementById("light").innerText = "GRIFFITH";
        // document.getElementById("light").style.color = "white";
        // //Header Changes
        // document.getElementById("headerGriffith").style.backgroundImage = "url(./public/img/headerGriffithBg.jpg)";
        // document.getElementById("headerGriffith").style.backgroundSize = "cover";
        // document.getElementById("headerGriffith").style.backgroundRepeat = "no-repeat";
        // //Break changes
        // for(var i = 0; i < pause.length; i++) {
        //     pause[i].style.backgroundColor = "white";};
        // //Description Changes
        // document.getElementById("global").style.backgroundColor = "white";
        // document.getElementById("sectionDescriptionGriffith").style.backgroundColor = "#99a6ce";
        // document.getElementById("descriptifImg").innerHTML = "<img src='./public/img/descriptifGriffith.jpg' alt='Descriptif Griffith' id='descriptifImgGriffith' height='300px' width='350px'>";
        // document.getElementById("descriptifTexte").innerHTML = "<p id='descriptifTexteGriffith' class='mt-3'>Griffith (グリフィス, Gurifisu) est le principal antagoniste du manga et de la série animée Berserk. Il est présenté au début de la série comme un personnage principal et il deviendra peu à peu le meilleur ami du protagoniste de la série. Physiquement il est décrit par les personnages comme un bel homme (même Guts finira par lui dire qu'il a une belle gueule d'amour, avant que Griffith ne le batte et ne le fasse rejoindre la Brigade des Faucons, la troupe dont il est le chef) avec des cheveux longs et blanc et des yeux bleus similaire à ceux d'un oiseau (on le surnomme d'ailleurs le faucon). Il est svelte mais est cependant en bonne forme et il semble être de taille moyenne. Au combat il porte une armure blanche et un casque ayant la forme d'une tête de faucon, et son épée ressemble à une rapière.</p>";
        // //Info Changes
        // document.getElementById("sectionInfoGriffith").style.height = "100vh";
        // document.getElementById("sectionInfoGriffith").style.backgroundColor = "white";
        // for(var i = 0; i < changeRow.length; i++) {
        //     changeRow[i].style.height = "50vh";};
        // document.getElementById("row501").innerHTML = "<img src='./public/img/histoireGriffith.jpg' alt='Info Img1' height='100%' width='100%'>";
        // document.getElementById("row502").innerHTML = "<img src='./public/img/personnaGriffith.jpg' alt='Info Img2' height='100%' width='100%'>";
        // document.getElementById("row503").innerHTML = "<img src='./public/img/reveGriffith.jpg' alt='Info Img3' height='100%' width='100%'>";
        // document.getElementById("row504").innerHTML = "<img src='./public/img/equipGriffith.png' alt='Info Img4' height='100%' width='100%'>";
        // //Void Changes
        // document.getElementById("vide").style.backgroundImage = "url(./public/img/headerGriffithBg.jpg)";
        // //Footer Changes
        // document.getElementById("footer").style.backgroundColor = "black";
        //Reload
        location.reload(true);
    }
    //Lien vers le wiki
    lienSecret.onclick = function(){
        window.location.href = "https://berserk.fandom.com/wiki/Griffith";
    }
    //Texte descriptif Changes
    showOthers1.onmouseover = function(){
        showOthers1.innerText = "Le prénom « Griffith », très fantasy, évoque le griffon des légendes (Griffin en anglais) ; dans l'épisode 10 de l'animé, cette référence a du sens puisque l'entretien entre Griffith et la princesse Charlotte, au cours duquel Griffith révèle sa conception du « rêve » et de l'amitié, se déroule au pied d'une fontaine sculptée en forme de griffon. Le Griffon étant une chimère, cela laisse présager que les fameux « rêves » de Griffith ne sont aussi que chimères.";
    }

    showOthers1.onmouseleave = function(){
        showOthers1.innerText = "Griffith (グリフィス, Gurifisu) est le principal antagoniste du manga et de la série animée Berserk. Il est présenté au début de la série comme un personnage principal et il deviendra peu à peu le meilleur ami du protagoniste de la série. Physiquement il est décrit par les personnages comme un bel homme (même Guts finira par lui dire qu'il a une belle gueule d'amour, avant que Griffith ne le batte et ne le fasse rejoindre la Brigade des Faucons, la troupe dont il est le chef) avec des cheveux longs et blanc et des yeux bleus similaire à ceux d'un oiseau (on le surnomme d'ailleurs le faucon). Il est svelte mais est cependant en bonne forme et il semble être de taille moyenne. Au combat il porte une armure blanche et un casque ayant la forme d'une tête de faucon, et son épée ressemble à une rapière.";
    }

    getElementById("descriptifTexte").onmouseover = function(){
        showOthers2.innerText = "Ce serait un mot de en vieux norrois (langue scandinave de l'époque médiévale berserkr signifiant 'peau d'ours', désignant un guerrier mi-homme mi-bête ou d'un homme ayant la puissance d'une bête genre Ours des Montagnes qui quand il entre en état de rage possède une force herculéenne. Il est donc possible que Griffith soit un guerrier mi-homme mi-bête ou d'un homme ayant la puissance d'une bête genre Ours des Montagnes.";
    }

    getElementById("descriptifTexte").onmouseleave = function(){
        document.getElementById("descriptifTexteFemto").innerText = "Dernier «né» des God Hand. Anciennement, il était l'humain connu sous le nom de Griffith, avant qu'il ne choisisse de suivre son rêve, quel qu'en soit le prix. Ami, puis ennemi de Guts, leurs destins sont liés. Selon les dires de ses pairs, Femto représente la corruption par l'Envie: son histoire et sa personne incarnent la corruption nécessaire à l'assouvissement des ambitions de l'Humanité.";
    }
//Fin des Fonctions