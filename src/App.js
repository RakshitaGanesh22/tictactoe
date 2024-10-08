
import './App.css';
import {useState} from "react";

let arr=Array(9).fill(null);
let arr1=[...arr];
function App() {
  const [change,setChange]=useState([...arr1])
  const [started,setStarted]=useState(true);
  const [playing ,setPlaying]=useState(false);
  const[winner,setWinner]=useState("");
  const[completed,setCompleted]=useState(false);
  const Patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
  const[status,setStatus]=useState(null);
  function calcWinner(currentEle){
    console.log(currentEle)
    for(let i=0;i<Patterns.length;i++){
      const [a,b,c]=Patterns[i];
      if(arr[a]==arr[b] && arr[c]==arr[b] && arr[c]==currentEle){
        setWinner(currentEle);
        setStatus(`hurray... ${currentEle} have won the game`)
        setCompleted(true);
      }
    }
    return false;
  }
  function handleClick(index){
    if(completed){ return }
    if(playing){
      arr[index]="X";
    }
    else{
      arr[index]="O"
    }
    
    calcWinner(arr[index]);
    setPlaying(!playing);
  }
  function handleClick1(){
    setStarted(false);
  }
  function handleClick2(){
    setStatus(null);
    arr=[...arr1]
    setChange(arr);
    setCompleted(false);
  }
   return (
    <div className="App">
      <div className="style1">
              
              {started?<div><button onClick={()=>handleClick1()}>Play Button</button></div>:<div>{status?<div>{status}</div>:<div>lets Play</div>}
              <div className='arrStyle'>
                {change.map((item,index)=>{return <button className="button" key={index} id={index} disabled={item!=null} onClick={()=>{handleClick(index)}}>{arr[index]}</button>})}
            </div>
            <button onClick={handleClick2}>reset button</button>
            </div>}
                
            </div>
            
            
    </div>
  );
}

export default App;
