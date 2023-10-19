import React, {useState, useContext} from 'react'
import { UserContext } from './UserContext';
import './dashboard.css';
import ActivityMorning from './ActivityMorning';
import ActivityEvening from './ActivityEvening';
import ActivityAf from './ActivityAf';
import ProgressBar from './ProgressBar';
import Rewards from './Rewards';

 

const PatientHome = () => {
    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('find');
    const [time,setTime]=useState("morning");
    const [message,setMessage]=useState("Starting for the day, complete your daily routine to earn healthy life and rewards!!");
    const [percentage,setPercentage] = useState(0);
    const [points,setPoint] = useState(0);
    

    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }
    const markCompleteMorning= () =>{
        
            setTime("afternoon");
            setPercentage(percentage+33);
            setMessage("Yay!! Two more steps to earn reward");
          console.log(percentage);
        }
    
        const markCompleteAf= () =>{
        
            setTime("evening");
            setPercentage(percentage+33);
            setMessage("Great!! One more step left to earn reward");
          console.log(percentage);
        }

const markCompleteEvening= () =>{
   
        setPercentage(percentage+34);
        setTime("completed");
        setMessage("Reward earned!! Thank you for interacting with me 3 times, please come tomorrow");
      console.log(percentage);
     
    }

   

    return (
        <div style={{
           backgroundColor  :"#452b45",
           padding: "0 px"    }}>
<div className = 'container d-flex flex-column align-items-center justify-content-center dashboard text-center bg-image1'  >
<h3 style={{
    color: "#FFFFFF",
marginTop:"80px"}}>{message}</h3>
<div className='row' style={{width:"90%"}}>
<div className='col-8 d-flex flex-column align-items-center justify-content-center'style={{padding:"30px"}}>
<ActivityMorning title="Morning" markCompleteMorning={markCompleteMorning}/>
<ActivityAf title="Afternoon" markCompleteAf={markCompleteAf}/>
<ActivityEvening title="Evening" markCompleteEvening={markCompleteEvening}/>
</div>
<div className='col-4  d-flex flex-column align-items-center justify-content-center'style={{}}>
<ProgressBar percentage={percentage}/>

</div>
</div>
<div className = 'row' style={{marginTop:"10px"}}>
<div className = "btn-group">
<button type="button" style={{width: "400px"}} className={`btn btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='history'? 'active': ' '}`}  onClick={clickHandler} value='history'>My Rewards</button>
<Rewards points = {points}/>
</div>
</div>
</div>
</div>
    )
}

 

export default PatientHome