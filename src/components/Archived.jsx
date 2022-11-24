import React from "react"
import axios from "axios"

const Archived = (props) => {
    async function archive(id) {
        try {
          const response = await axios.post("https://aircall-job.herokuapp.com/activities/" + id, {
            is_archived: false
          })

          props.setShouldRefetch(prevValue => !prevValue)
        }
        catch(e){
          alert(e.message)
        }
      }
    return(!props.shouldShow && (
        <h1>
        <h1>Archived</h1>
        {props.data &&
            props.data.filter(message => message.is_archived === true).map(filteredData => (
                <h2>
                {filteredData.from}
                <div>{filteredData.direction === 'outbound' ? 
                <div>to: {filteredData.to}, from: {filteredData.from}</div>:
                <div>from: {filteredData.from}</div>
              }</div>
                <div>{ (new Date(filteredData.created_at)).toLocaleDateString() }</div>
                <div>{ (new Date(filteredData.created_at)).toLocaleTimeString() }</div>
                <button onClick={() => archive(filteredData.id)}>Archive</button>
                <br></br>
                </h2>
          ))}
        </h1>
    )
    )    
  };
export default Archived;