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
    <div className="mx-6 mb-8">
      <div className="flex items-start space-x-6" style={{ height: 332 }}>
        {/* Day Badge */}
        <div className="day-badge">
          <span className="text-xl font-bold">Day {dayNumber}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Image and Title */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <img
                src={imageUrl}
                alt={`Day ${dayNumber}`}
                className="day-image"
              />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-600">{date}</p>
              <h3 className="text-2xl font-bold text-vigovia-purple">
                {title}
              </h3>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex space-x-8">
            {/* Morning */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="timeline-dot mr-3"></div>
                <h4 className="text-lg font-semibold text-vigovia-purple">
                  Morning
                </h4>
              </div>
              <div className="ml-7 space-y-2">
                {activities.morning.map((activity, index) => (
                  <p key={index} className="text-gray-700">
                    {activity.description}
                  </p>
                ))}
              </div>
            </div>

            {/* Afternoon */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="timeline-dot mr-3"></div>
                <h4 className="text-lg font-semibold text-vigovia-purple">
                  Afternoon
                </h4>
              </div>
              <div className="ml-7 space-y-2">
                {activities.afternoon.map((activity, index) => (
                  <p key={index} className="text-gray-700">
                    {activity.description}
                  </p>
                ))}
              </div>
            </div>

            {/* Evening */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="timeline-dot mr-3"></div>
                <h4 className="text-lg font-semibold text-vigovia-purple">
                  Evening
                </h4>
              </div>
              <div className="ml-7 space-y-2">
                {activities.evening.map((activity, index) => (
                  <p key={index} className="text-gray-700">
                    {activity.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 mt-6"></div>
    </div>
  );
};

export default DayItinerary;
