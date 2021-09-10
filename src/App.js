import "./App.css";
import React, { useEffect, useState } from "react";

import Loading from "./Components/Loading";
import InactiveEvent from "./Components/InactiveEvent";
import { getEvent } from "./api";
import { checkForResizing, extractEvent, eventNotStarted, eventFinished, dateDiff, isLogged } from "./Utils/globalHelpers";
import PortraitScreen from "./Components/PortraitScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [eventInfo, setEventInfo] = useState(null);
  
  useEffect(() => {
    checkForResizing();
    const event = extractEvent();
    getEvent(event).then(({ success, response}) => {
      if (success) {
        setEventInfo(response);
        setLoading(false);
      } else console.log("Error");
    });
  }, []);


  if (loading) return <Loading />;
  if (eventNotStarted(eventInfo.start_day)) return (
    <InactiveEvent 
      logo={eventInfo.organization.logo}
      cover={eventInfo.cover_image}
      text="Empezamos en"
      time={dateDiff(eventInfo.start_day)}
    />
  );
  if (eventFinished(eventInfo.end_day)) return (
    <InactiveEvent 
      logo={eventInfo.organization.logo}
      cover={eventInfo.cover_image}
      text="El vivo finalizo hace"
      time={dateDiff(eventInfo.end_day)}
    />
  );

  return eventInfo ? (
    <PortraitScreen 
      eventInfo={eventInfo}
    />
  ) : <div> Video no iniciado </div>
};

  
export default App;
