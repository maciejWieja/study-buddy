import axios from 'axios';
import { useEffect, useState } from 'react';

const EventsProvider = ({ group, children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
  }, [group]);

  return children(events);
};

export default EventsProvider;
