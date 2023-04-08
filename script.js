"use strict;"


let score = 0
let titleflag = true
let failflag = false


const Buttquiz = document.querySelector('#quiz')
Buttquiz.addEventListener('click', launch)


function launch (event) {
    
    document.body.removeChild( document.querySelector('.Intro'))

     let ml = random()

    const Charge = document.createElement('div')
    const buttcancel = document.createElement('button')
    const table = document.createElement('div')
    const tablesc = document.createElement('h4')
    
    const Choice = document.createElement('div')
    const cont11 = document.createElement('div')
    const cont12 = document.createElement('div')
    const cont121 = document.createElement('div')
    const cont122 = document.createElement('div')
    const cont1211 = document.createElement('button')
    const cont1212 = document.createElement('button')
    const cont1221 = document.createElement('button')
    const cont1222 = document.createElement('button')

    const p1211 = document.createElement('p')
    const p1212 = document.createElement('p')
    const p1221= document.createElement('p')
    const p1222 = document.createElement('p')
    const p11a = document.createElement('b')
    const p11b = document.createElement('p')
    const p11c = document.createElement('p')
    
    Choice.className = 'Choice'
    Charge.className = 'Charge'
    buttcancel.id = 'quit'
    buttcancel.textContent ='quit'
    table.id = 'table'
    tablesc.id = 'tablesc'

    cont11.id ='quote'
    cont1211.id = 'answer1'
    cont1212.id = 'answer2'
    cont1221.id = 'answer3'
    cont1222.id = 'answer4'

    p1211.id = 'cont1'
    p1212.id = 'cont2'
    p1221.id = 'cont3'
    p1222.id = 'cont4'

    cont12.id ='cont12'
    cont121.id ='cont121'
    cont122.id ='cont122'
    
    p11a.textContent = `la citation est :`
    p11b.id = 'textquote'
    p11c.textContent = `Qui a dit ça ?`

    cont1211.appendChild(p1211)
    cont1212.appendChild(p1212)
    cont1221.appendChild(p1221)
    cont1222.appendChild(p1222)
    cont11.appendChild(p11a)
    cont11.appendChild(p11b)
    cont11.appendChild(p11c)

    cont122.appendChild(cont1221)
    cont122.appendChild(cont1222)
    cont121.appendChild(cont1211)
    cont121.appendChild(cont1212)
    cont12.appendChild(cont121)
    cont12.appendChild(cont122)
    Choice.append(cont11)
    Choice.append(cont12)

    Charge.appendChild(buttcancel)
    document.body.appendChild(Choice)
    document.body.appendChild(Charge)
    table.appendChild(tablesc)
    document.querySelector('.Title').appendChild(table)

    buttcancel.addEventListener('click', cancel)

    display(ml)
}
function cancel (event) {

 const Intro = document.createElement('div')
 const title = document.createElement('h1')
 const intern = document.createElement('u')
 const para = document.createElement('p')
 const butt = document.createElement('button')

 Intro.className = 'Intro'
 intern.textContent = 'Grand Quiz des citations'
 para.textContent = "Parfois inspirantes, d'autres fois déséspérantes,\n les paroles de tous ces gens toxiques résonnent en moi.\n Il ne reste plus qu'à savoir si elles resonnent aussi \nen vous, grâce à ce quiz extrêmement fiable"
 butt.id = 'quiz'
 butt.textContent = 'démarrer le quiz'
 
 title.appendChild(intern)
 Intro.appendChild(title)
 Intro.appendChild(para)
 Intro.appendChild(butt)

 if (titleflag) {document.body.querySelector('.Title').removeChild(document.querySelector('#table'))}
 if (titleflag) {document.body.removeChild(document.querySelector('.Choice'))}
 if (titleflag) {document.body.removeChild(document.querySelector('.Charge'))}
 if (failflag) {
    document.body.removeChild(document.querySelector('.Fail'))
}

score = 0
 document.body.appendChild(Intro)

 document.querySelector('#quiz').addEventListener('click', launch)
titleflag = true
failflag = false

}
function good (event) {

    score ++
    const Elem = event.currentTarget
    sleep(100)
    next()

}
function next () {
   let ml = random()
   display(ml)

}
function bad (event) {

    failflag = true
    titleflag = false
    failscreen()

}
function failscreen () {

    document.body.querySelector('.Title').removeChild(document.querySelector("#table"))
    document.body.removeChild(document.querySelector(".Choice"))
    document.body.removeChild(document.querySelector(".Charge"))

    const fail = document.createElement('div')
    const message = document.createElement('p')
    const meme = document.createElement('video')
    const butt = document.createElement('button')

    fail.className = 'Fail'
    message.id = 'message'
    meme.id = 'meme'
    message.textContent = `Et non... c'est perdu ! \nton score est quand même de ${score} points`
    butt.textContent = 'quit'
    butt.id='failbutt'
    meme.src = 'meme.mp4'
    meme.controls = true
    meme.muted = false
    meme.play()
    
    fail.appendChild(message)
    fail.appendChild(butt)
    fail.appendChild(meme)

    document.body.appendChild(fail)
    document.querySelector('#failbutt').addEventListener('click', cancel)

}
function random () {
    let ml = []
    const n = Math.floor(Math.random()*(Object.keys(quotedict).length))
    if (n==Object.keys(quotedict).length) {
        n = n-1
    }
    ml[0] = quotearray[n]
    let m = Math.floor(Math.random()*(4))
    if (m==4) {
        m=3
    }
    m=m+1
    ml[m] = quotedict[quotearray[n]]
    let index = 1
    while (index<5) {
        if (index!= m) {
            let p = Math.floor(Math.random()*(namearray.length))
            if (p==namearray.length) {
                p = p -1
            }
            if(ml.includes(namearray[p])){}
            else{
                ml[index] = namearray[p]
                index ++
            }
        }
        else {
            index ++
        }
    }
    ml[5] = m
    ml[6] = ml[m]
    return ml
}
function display (ml) {

    document.getElementById('answer1').removeEventListener('click', good)
    document.querySelector('#answer2').removeEventListener('click', good)
    document.querySelector('#answer3').removeEventListener('click', good)
    document.querySelector('#answer4').removeEventListener('click', good)

    document.getElementById('answer1').removeEventListener('click', bad)
    document.querySelector('#answer2').removeEventListener('click', bad)
    document.querySelector('#answer3').removeEventListener('click', bad)
    document.querySelector('#answer4').removeEventListener('click', bad)

    console.log(ml)
    document.querySelector('#tablesc').textContent = `score = ${score}`
    document.querySelector('#textquote').textContent = ml[0]

    document.querySelector('#cont1').textContent = ml[1]
    document.querySelector('#cont2').textContent = ml[2]
    document.querySelector('#cont3').textContent = ml[3]
    document.querySelector('#cont4').textContent = ml[4]
    
    if (ml[1] == ml[6]) {
        console.log('done')
        document.getElementById('answer1').addEventListener('click', good)
        document.querySelector('#answer2').addEventListener('click', bad)
        document.querySelector('#answer3').addEventListener('click', bad)
        document.querySelector('#answer4').addEventListener('click', bad)
    }
    if (ml[2] == ml[6]) {       
        console.log('done')
        document.querySelector('#answer2').addEventListener('click', good)
        document.querySelector('#answer1').addEventListener('click', bad)
        document.querySelector('#answer3').addEventListener('click', bad)
        document.querySelector('#answer4').addEventListener('click', bad)
    }
    if (ml[3] == ml[6]) {
        console.log('done')
        document.querySelector('#answer3').addEventListener('click', good)
        document.querySelector('#answer2').addEventListener('click', bad)
        document.querySelector('#answer1').addEventListener('click', bad)
        document.querySelector('#answer4').addEventListener('click', bad)
    }
    if (ml[4] == ml[6]) {
        console.log('done')
        document.querySelector('#answer4').addEventListener('click', good)
        document.querySelector('#answer2').addEventListener('click', bad)
        document.querySelector('#answer3').addEventListener('click', bad)
        document.querySelector('#answer1').addEventListener('click', bad)
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  
  

const namearray = [
    "Lucas",
    "Avry",
    "Camo",
    "Coco", 
    "Emma",
    "Inès", 
    "Kiki", 
    "Lucie",
    "Ludivine",
    "Minipousse",
    "Sarah",
    "Mathou",
    "Marie"
    ]

const quotedict = {

    /* Lucas */
    "Je suis quelqu'un de très près demes fesses":'Lucas',
    "J'ai froid mon pénis il vibre":'Lucas',
    "On baise pas les chêvres merde !" : "Lucas",
    "Je n'ai jamais été aussi déçu de pas voir une bite":"Lucas",
    "Mais elles ont pas l'anus blanc":'Lucas',
    "Excuse moi mais faut le doigter ton téléphone pour qu'il s'allume":'Lucas',
    "Quand je tourne ça tourne plus":'Lucas',
    "Tous le monde me prends, laissez moi !":'Lucas',
    "Je finis ma lesbienne":'Lucas',
    "Mathilde c'est une cochonne elle baise même les esprits":'Lucas',
    /* Avry */
    "J'ai mis deux doigts au wrap":"Avry",
    "On voit la chatte de Mathou":"Avry",
    "Je lèche tous les culs qui veulent":'Avry',
    "Nan mais même une pizza a plus de formes que toi":'Avry',
    "C'est maître Yoda clodo monsieur Martin":'Avry',
    "J'ai envie de mourir et ma moyenne se suicide à la place":'Avry',
    "Je vais vérifier que la porte est éteinte":'Avry',
    /* Camo */
    "Pourquoi est-ce que j'ai toujours un pied entre les deux jambes ?" : "Camo",
    "La France est un peuple BDSM":'Camo',
    "J'avais oublié, j'aime les queues":'Camo',
    "Mon cul a vibré ça m'a perturbé":'Camo',
    "Le Trauma, plus qu'une passion, une émotion. -Plus qu'une passion, une dépression":'Camo',
    "Pecresse est une Fillion sans problème judiciaire":'Camo',
    /* Coco */
    "Je suis éligible à Squid Game en terme de dette morale":"Coco",
    "Si j'étais un Pokémon mon talent caché se serait chialade":"Coco",
    "J'ai sauté, j'ai fait mon sport pour le mois":'Coco',
    "Est-ce qu'au final un pd c'est vraiment un homme ?":'Coco',
    "On est en roues libres sur l'autoroute du seum":'Coco',
    /* Emma */
    "Je m'entends donc on m'entend" : "Emma",
    "C'est hyper sensible mon cul":'Emma',
    "Pour combien vous chiez sur Avry":'Emma',
    "Non je baiserais pas ma mère je suis pas lesbienne":'Emma',
    "Je me suis mouillé le doigt pour toi !":'Emma',
    "je peux vous toucher par derrière":'Emma',
    /* Inès */
    "L'abus de pouvoir c'est tout l'interêt d'avoir du pouvoir, sinon ça ne sert à rien" : "Inès",
    "Célia c'est comme Staline sans la moustache" : "Inès",
    "Un point virgule c'est un point avec une virgule" : "Inès",
    "Je vais prendre ton manteau plein de foutre":'Inès',
    "Le presse citron c'est un épluchoire à putes":'Inès',
    /* Kiki */
    "Oh j'ai une étoile comme les juifs":'Kiki',
    "Cinquante nuances de France":'Kiki',
    "Le nombre de fois où Célia m'a pris par derrière...":'Kiki',
    "je suis noir très clair, gris si tu veux":'Kiki',
    "Techniquement l'Homme est humain":'Kiki',
    "QUizzette c'est pas dans les misérables ?":'Kiki',
    "Je suis gay par manipulation":'Kiki',
    "On fait vraiment une contre soiréé viol":'Kiki',
    /* Lucie */
    "Ca m'a giclé dessus" : "Lucie",
    "J'ai les larmes aux yeux mais pas dans les yeux":'Lucie',
    "Nan mais mon mec il veut plus baiser la table de ping pong que moi":'Lucie',
    /* Ludivine */
    "Luigi il m'est rentré dedans dix-huit fois":'Ludivine',
    "Ecoute, dans la vie faut être une pute des fois, dans tous les sens du terme":'Ludivine',
    "Je le ferai hier":'Ludivine',
    "Ma vie amoureuse est tellement plate qu'un pétale m'a pécho":'Ludivine',

    /* Minipousse */
    "On fait un uno souterrain":"Minipousse",
    "Tu veux être ma chienne ?":"Minipousse",
    "On était entrain de flirter avec du celeri":'Minipousse',
    "Du coup on part du principe que Coco est polluante":'Minipousse',
    "Laisse moi sucer des patates":'Minipousse',
    "Ca veut dire qu'on peut faire plein de choses sans qu'elle soit consentante":'Minipousse',
    "J'ai un pénis de baleine, c'est plus grand que moi":'Minipousse',
    "T'es aussi fraîche qu'un cadavre de deux ans":'Minipousse',
    "Il faut qu'on nous enferme sérieusement":'Minipousse',
    "J'ai un truc dans l'oreille et c'est pas du sperme":'Minipousse',
    "Clément est pas drôle faut arrêter":'Minipousse',
    "c'est pas beauf de ken !":'Minipousse',
    "La Shoah c'est un petit joueur":'Minipousse',
    /* Sarah */
    "Je pleure mais c'est le manque de magnésium":"Sarah",
    "Le mercredi c'est mon jour du Seigneur":"Sarah",
    "Quand tu baises avec un mort tu dois te sentir un peu seul":"Sarah",
    "C'est fou comme renoncule ça rime si bien avec j'encule":'Sarah',
    "C'est grave sexy une carotte":'Sarah',
    /* Mathou */
    "Tu vas reussir à faire rentrer sept cartes ?":"Mathou",
    "C'est au moment où je retire ma langue":"Mathou",
    "Je suis effectivement aussi comestible":'Mathou',
    "J'ai vu ses abdos dans tous les recoins":'Mathou',
    "Bon, mon porno m'attend":'Mathou',
    "Ca va je sais bien faire ça, la lesbienne":'Mathou',
    "Vous voulez sucer un peu Besmier":'Mathou',
    "Attends je vais te lécher le crâne Killian":'Mathou',
    "On a juste fait des preliminaires au lycée":'Mathou',
    "Sourire c'est conssentir":'Mathou',
    "Je veux la tête d'Avry dans mon salon":'Mathou',
    "Je gémis de base H24-":'Mathou',
    /* Marie */
    "Hitler a une moustache c'est ce qu'il fait qu'il est méchant":'Marie',
    "C'est FREUD. Il parle tout le temps de bites, j'aime pas":'Marie',
    "J'aime beaucoup Sarah, mais c'est pas de la drogue":'Marie',
    "Y'a plein de gens qui rêvent de caresser mes dents":'Marie',
    "Je viens de vous cracher dessus, vous allez devenir bourrés":'Marie',
    "Ca fait pas des miracles, ça fait de la merde":'Marie',
    "Tu me lubrifies, comme ça les plantes peuvent me pousser dessus":'Marie',

}

const quotearray = Object.keys(quotedict)
