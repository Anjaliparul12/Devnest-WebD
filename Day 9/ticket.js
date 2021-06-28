var booked=0;
var avail=54;
document.getElementById("booked").innerHTML = booked;
document.getElementById("avail").innerHTML = avail;


let container =document.querySelector("#container");
for(let i=0;i<54;i++)
{
    let box=document.createElement("div");
    box.className="box";
    container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        //When the person click on the seat twice
        if (box.classList.contains("selected")) {
            box.classList.remove("selected");
            booked--;
            avail++;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("avail").innerHTML = avail;
        }

        //When the person click on the seat
        else {
            box.classList.add("selected");
            booked++;
            avail--;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("avail").innerHTML = avail;
        }
    })
});