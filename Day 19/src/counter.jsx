import React,{useState} from 'react';
import './App.css';

function Counter(props){
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button onClick={() => {
        setCount(count+1);
      }}
      >
      {count}
      </button>
    </div>
  );
}

export default Counter;
