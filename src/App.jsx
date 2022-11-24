import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Footer from "./components/Footer.jsx";

import Archived from "./components/Archived.jsx";



const App = () => {
  const [shouldShow, setShouldShow] = useState(true)
  const [data, setData] = useState(null);
  const [activityDetail, setActivityDetail] = useState()
  const [shouldRefetch, setShouldRefetch] = useState(false)
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://aircall-job.herokuapp.com/activities`
        );
        setData(response.data);
        // setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        // setLoading(false);
      }
    };
    getData();
  }, [shouldRefetch]);


  return (
    <div className="container">
      <Header setShouldShow={setShouldShow} shouldShow={shouldShow}/>
      <ActivityFeed shouldShow={shouldShow} data={data} setShouldRefetch={setShouldRefetch} setActivityDetail={setActivityDetail}/>
      <ActivityDetail shouldShow={shouldShow} activityDetail={activityDetail} setShouldRefetch={setShouldRefetch}/>
      <Archived shouldShow={shouldShow} data={data} setShouldRefetch={setShouldRefetch}/>
      <div className="footer"><Footer/></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
