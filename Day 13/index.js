
let btn=document.querySelector("button")
let text = document.querySelector('.text')
 
btn.addEventListener("click",() =>{
    const r= parseInt(text.value);
    for(let i=0;i<r;i++)
    {
    fetch('https://api.quotable.io/random')
    .then((res) =>{ 
        return res.json();
    }).then((data) => {
        console.log(data);
        const card = document.querySelector(".card2");
          let inner=document.createElement("div");
          inner.classList.add("card-body");
          card.appendChild(inner);
          inner.innerHTML="<p>"+ data.content+"</p>";
        })
.catch(error => console.log(error));
    }
    text.value="";
})