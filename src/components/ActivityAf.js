import React from "react";
import Checkbox from "./Checkbox";

function ActivityAf(props) {
    const {title,markCompleteAf} = props
  return (
<div className="card text-center" style={{width:"60%",margin:"10px"}}>
<div className="card-header"><Checkbox label=" Ready to update the Afternoon Medication?"/></div>
<div className="card-body">
<h5 className="card-title">{title}</h5>
<button onClick={markCompleteAf} className="ButtonStyle">
          Wohhhoooo!!!
</button>
</div>
</div>
  );
}


export default ActivityAf;