import React,{ useState, useEffect } from "react";
import 'regenerator-runtime/runtime'

const ActivityDetail= (props) => {
 
    console.log({data: props.activityDetail})

  return(props.shouldShow && (
    <div className="body">
      <br></br>

      {props.activityDetail && (<div>      <h1>Activity Details</h1>

      <ul>
            <h2 key={props.activityDetail.id}>
            {props.activityDetail.from}
            <div>{props.activityDetail.direction === 'outbound' ? 
            <div>to: {props.activityDetail.to}, from: {props.activityDetail.from}</div>:
            <div>from: {props.activityDetail.from}</div>
            }</div>
            <div>{ (new Date(props.activityDetail.created_at)).toLocaleDateString() }</div>
            <div>{ (new Date(props.activityDetail.created_at)).toLocaleTimeString() }</div>
            

            <br></br>
            </h2>
                
      </ul>
      </div>
      )}
    </div>
  ));
};

export default ActivityDetail;
