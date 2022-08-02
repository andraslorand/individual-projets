import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Listelement from "./Components/List";
import Todo from "./Components/Todo";


//minden pont az mint a Todo.js- ben, csak masok az ertekek
function App() {
  
  const[listname,setlistname]=useState("")
  const[listnames,setlistnames]=useState([]);

  
  useEffect(()=>{
    if(localStorage.getItem("localTaskNames")){
        const storedList = JSON.parse(localStorage.getItem("localTaskNames"));
        setlistnames(storedList);
    }
},[])

const addList=(e)=>{
  const newList={id: new Date().getTime().toString(), title: listname}
  setlistnames([...listnames,newList])
  localStorage.setItem("localTaskNames",JSON.stringify([...listnames,newList]))
  setlistname("")
}

const handleDeleteList=(listname)=>{
  const de=listnames.filter((a)=>a.id !== listname.id)
  setlistnames(de)
  localStorage.setItem("localTaskNames",JSON.stringify(de))
}
//not ready jey, i guess i need to set the items again in the localstorage
const renameList=(listname)=>{
  const swit=document.getElementById("r").value
  listname.name=swit
  
}

const handleClearList=()=>{
  setlistnames([])
  localStorage.removeItem("localTaskNames")
}
  return (
    <div className="App">
      <div className="left">
        <div className="head next">
          <h1>Checklist</h1>
          <div className="next">
            
            <input
            name="listname"
              type="text"
              id="name"
              value={listname}
             placeholder="add new task list"
              onChange={(e)=>setlistname(e.target.value)}
            ></input>
            <button
              className="add"
              onClick={addList}
            >
              add
            </button>
          </div>
        </div>
        
       
       
      </div>
      <div className="right" >
       {listnames.map((listname)=>(
        <React.Fragment key={listname.id}>
            <h2>{listname.title}</h2>
            
            <div >
              <button onClick={renameList}>Rename</button>
              <input placeholder="rename" id="r"></input>
            </div>
            <button onClick={()=>handleDeleteList(listname)}>delete</button>
           
            <Todo name={listname.title}></Todo>

        </React.Fragment>
       
       ))}
       {!listnames.length? null:(
        <button onClick={handleClearList}>clear</button>
       )}
        
       
      </div>
    </div>
  );
}

export default App;
