import React from "react";

interface Activity {
  time: string;
  description: string;
}

interface DayItineraryProps {
  dayNumber: number;
  date: string;
  title: string;
  imageUrl: string;
  activities: {
    morning: Activity[];
    afternoon: Activity[];
    evening: Activity[];
  };
}

const DayItinerary: React.FC<DayItineraryProps> = ({
  dayNumber,
  date,
  title,
  imageUrl,
  activities,
}) => {
  return (
    <div className="day-itinerary-section">
      <div className="day-itinerary-content">
        {/* Day Badge */}
        <div className="day-badge-container">
          <div className="day-badge">
            <span>Day {dayNumber}</span>
          </div>
        </div>

        {/* Image and Description Section */}
        <div className="day-image-section">
          <div className="day-image-container">
            <img
              src={imageUrl}
              alt={`Day ${dayNumber}`}
              className="day-image"
            />
          </div>
          <div className="day-text-content">
            <p className="day-date">{date}</p>
            <p className="day-title">{title}</p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <div className="timeline-container">
            {/* Morning */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="timeline-period">Morning</h4>
                <div className="timeline-activities">
                  {activities.morning.map((activity, index) => (
                    <p key={index} className="activity-text">
                      {activity.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Afternoon */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="timeline-period">Afternoon</h4>
                <div className="timeline-activities">
                  {activities.afternoon.map((activity, index) => (
                    <p key={index} className="activity-text">
                      {activity.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Evening */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="timeline-period">Evening</h4>
                <div className="timeline-activities">
                  {activities.evening.map((activity, index) => (
                    <p key={index} className="activity-text">
                      {activity.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayItinerary;

// import React from "react";

// const Day1Itinerary = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl shadow-md p-6 md:p-10 w-full gap-6">
//       {/* Left Purple Day Section */}
//       <div className="bg-[#2E1065] text-white font-semibold text-center px-6 py-12 rounded-2xl md:h-64 flex items-center justify-center md:w-20 w-full md:flex-none">
//         <p className="transform md:-rotate-90 text-lg tracking-wide">Day 1</p>
//       </div>

//       {/* Center Image + Date + Title */}
//       <div className="flex flex-col items-center justify-center gap-3 md:w-1/3 text-center">
//         <img
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
//           alt="Singapore City"
//           className="rounded-full w-48 h-48 object-cover shadow-md"
//         />
//         <div>
//           <h2 className="text-xl font-bold mt-2">27th November</h2>
//           <p className="text-gray-600 text-sm">
//             Arrival In Singapore &amp; City Exploration
//           </p>
//         </div>
//       </div>

//       {/* Right Timeline */}
//       <div className="flex flex-col md:w-1/2 relative pl-4">
//         {/* Timeline Line */}
//         <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

//         {/* Morning */}
//         <div className="flex items-start mb-6 relative">
//           <div className="w-4 h-4 bg-white border-2 border-purple-700 rounded-full mt-1 mr-4 z-10"></div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Morning</h3>
//             <ul className="list-disc ml-5 text-gray-600 text-sm">
//               <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Afternoon */}
//         <div className="flex items-start mb-6 relative">
//           <div className="w-4 h-4 bg-white border-2 border-purple-700 rounded-full mt-1 mr-4 z-10"></div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Afternoon</h3>
//             <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//               <li>Check Into Your Hotel.</li>
//               <li>Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
//               <li>
//                 Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix
//                 Bridge.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Evening */}
//         <div className="flex items-start relative">
//           <div className="w-4 h-4 bg-white border-2 border-purple-700 rounded-full mt-1 mr-4 z-10"></div>
//           <div>
//             <h3 className="font-semibold text-gray-800">Evening</h3>
//             <ul className="list-disc ml-5 text-gray-600 text-sm">
//               <li>
//                 Explore Gardens By The Bay, Including Super Tree Grove (3-4
//                 Hours)
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Day1Itinerary;
