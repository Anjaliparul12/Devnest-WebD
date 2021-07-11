var words=['./images/doctor.jpg', "./images/download.jpg", "./images/pro.jpg", "./images/ill.jpg", "./images/haha.jpg", "./images/thinker.jpg", "./images/lovely.jpg", "./images/sad.jpg"];
words=words.concat(words);
let moves=30;
let matches=0;
let gameActive=true;

for(let i=1; i<=16; i++){
    let inner=document.createElement("div");
    inner.classList.add("flip-inner");

    let front=document.createElement("div");
    front.classList.add("front");

    let back=document.createElement("div");

    let rand=Math.floor(Math.random()*(16-i));
    back.innerHTML=`<img src='${words[rand]}' class='img-back'>`
    words.splice(rand, 1);

    back.classList.add("back");

    inner.appendChild(front);
    inner.appendChild(back);

    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let clicked;
let cards=document.getElementsByClassName("flip-card");

for(let card of cards){
    card.addEventListener("click", (e)=>{
        if(!gameActive)return;
        moves--;
        document.querySelector("span").innerHTML=moves;
        
        if(clicked){
            card.firstChild.classList.add("flipped");
            gameActive=false;
            setTimeout(() => {
                if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove("flipped");
                    clicked.firstChild.classList.remove("flipped");
                }else{
                    matches++;
                    card.style.visibility="hidden";
                    clicked.style.visibility="hidden";
                }
                clicked=undefined;
                gameActive=true;
            },500);
        }else{
            clicked=card;
            card.firstChild.classList.add("flipped");
        }
    })
}

setInterval(() => {
    if(moves === 0){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        let h2=document.createElement("h2");
        document.querySelector(".popup > div > h2").innerHTML="Better Luck Next Time!!";
    }
    if(matches === 8){    
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector(".popup > div > h2").innerHTML="Congratulations!!   You Did It"
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e)=>{
    window.location.reload();
})