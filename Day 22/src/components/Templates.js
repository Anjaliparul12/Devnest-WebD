import React from 'react';


const Templates=({ templates,setMene }) => {
  return (
    <div className="templates">
      {templates.map((template) => (
      <div key={template.id} className="template" onClick={()=>{
        setMene(template);
      }}>
      <div style={{backgroundImage:`url(${template.url})`}} 
      className="image"
      ></div>

      </div>
      ))};
    </div>
  );
};
export default Templates;