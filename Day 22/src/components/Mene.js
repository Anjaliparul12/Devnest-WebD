import React from "react";
import { useState } from "react";

const Mene=({mene,setMene})=>{
  const[form,setForm]=useState({
    template_id:mene.id,
    username:"hello_nishant",
    password:"demo@123",
    boxes:[],
  });
  const generateMeme=() =>{
    let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
  
    form.boxes.map((box, index)=> {
      
      url +=`&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      setMene({...mene,url:data.data.url});

    });
    console.log(url);
  };
  
  return(
  <div className="mene">
    <img src={mene.url} alt=""/>
    <div>
      {
        [...Array(mene.box_count)].map((_, index)=>(
          <input
          key={index} 
          type="text" placeholder={`Meme caption ${index+1}`}
          onChange={(e)=>{
            const newBoxes=form.boxes;
            newBoxes[index]={text: e.target.value};
            setForm({...form,boxes: newBoxes});
          }
        }
      />
        )) 
      }
    </div>
    <div>
      <button onClick={generateMeme}>Generate meme</button>
      <button onClick={ () => {
        setMene(null);

      }}>Choose template</button>
    </div>
  </div>
  );
};
export default Mene;