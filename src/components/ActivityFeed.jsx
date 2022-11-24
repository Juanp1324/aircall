import React,{ useState, useEffect } from "react";
import axios from "axios";
import 'regenerator-runtime/runtime'

const ActivityFeed= (props) => {

  async function archive(id) {
    try {
      const response = await axios.post("https://aircall-job.herokuapp.com/activities/" + id, {
        is_archived: true
      })
      props.setShouldRefetch((prevValue) => !prevValue)
    }
    catch(e){
      alert(e.message)
    }
  }

  function showInfo(id) {
    const infoDetails = props.data.find(messages => messages.id === id)
    props.setActivityDetail(infoDetails)
  }

  return(props.shouldShow && (
    <div className="body">
      <h1>Activity</h1>
      <br></br>
      {!props.data && <div>A moment please...</div>}
      {/* {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )} */}
      <ul>
          {props.data &&
            props.data.filter(message => message.is_archived === false).map(filteredData => (
                <h2 key={filteredData.id}>
                {filteredData.from}
                <div>{filteredData.direction === 'outbound' ? 
                <div>to: {filteredData.to}, from: {filteredData.from}</div>:
                <div>from: {filteredData.from}</div>
              }</div>
                <div>{ (new Date(filteredData.created_at)).toLocaleDateString() }</div>
                <div>{ (new Date(filteredData.created_at)).toLocaleTimeString() }</div>
                <button onClick={() => archive(filteredData.id)}>Archive</button>
                <button onClick={() => showInfo(filteredData.id)}>Info</button>

                <br></br>
                </h2>
          ))}
      </ul>
    </div>
  ));
};

export default ActivityFeed;
