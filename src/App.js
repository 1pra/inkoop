import React, { useState, useEffect } from 'react'

const App = () => {
  const[data, setData]= useState("");
  const[count,setCount]=useState(0);
  const[repeated, setRepeated]=useState([]);
  const[unique, setUnique]=useState([]);

  useEffect(() => {
    const words = data.split(" ");
    setCount(words.length-1);
    const wordMap = {};
    words.forEach((word) => {
      if (wordMap[word]) {
        wordMap[word] += 1;
      } else {
        wordMap[word] = 1;
      }
    });
    setUnique(Object.keys(wordMap));
    setRepeated(
      Object.keys(wordMap)
        .sort((a, b) => wordMap[b] - wordMap[a])
        .filter((word) => wordMap[word] > 1)
    );
  },[data]);
  return (
    <div>
      
        <textarea onChange={(e)=>setData(e.target.value)}/>
        
        <p>number of words:{count}</p>
        <p>Unique Words: {unique.join(", ")}</p>
        <p>Repeated Words : {repeated.join(", ")}</p>

    </div>
    
  )
}

export default App

