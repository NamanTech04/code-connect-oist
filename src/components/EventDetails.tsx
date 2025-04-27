import React from 'react';
import { eventsData } from '@/data/events';  // Import event data

const EventDetails = ({ eventId }: { eventId: number }) => {
  // Find the event by ID
  const event = eventsData.find((e) => e.id === eventId);

  return (
    <div>
      <h1>{event?.title}</h1>
      <p>{event?.date}</p>

      <div>
        {event?.longDescription && (
          <div
          style={{
            maxHeight: '50vh',  
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
          className="sm:max-h-[30vh] md:max-h-[50vh]"  
        >
          {event?.longDescription}
        </div>
        
        )}
      </div>
    </div>
  );
};

export default EventDetails;
