import React from "react";

interface Activity {
  city: string;
  activity: string;
  type: string;
  timeRequired: string;
}

interface ActivityTableProps {
  activities: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ activities }) => {
  return (
    <div className="activity-table-section">
      <h2 className="activity-table-title">
        Activity <span className="activity-table-accent">Table</span>
      </h2>

      <div className="activity-table-container">
        {/* City Column */}
        <div className="activity-column city-column">
          <div className="activity-column-header city-header">City</div>
          <div className="activity-column-body city-body">
            {activities.map((activity, index) => (
              <div key={index} className="activity-row-item">
                {activity.city}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Column */}
        <div className="activity-column activity-column-main">
          <div className="activity-column-header activity-header">Activity</div>
          <div className="activity-column-body activity-body">
            {activities.map((activity, index) => (
              <div key={index} className="activity-row-item">
                {activity.activity}
              </div>
            ))}
          </div>
        </div>

        {/* Type Column */}
        <div className="activity-column type-column">
          <div className="activity-column-header type-header">Type</div>
          <div className="activity-column-body type-body">
            {activities.map((activity, index) => (
              <div key={index} className="activity-row-item">
                {activity.type}
              </div>
            ))}
          </div>
        </div>

        {/* Time Required Column */}
        <div className="activity-column time-column">
          <div className="activity-column-header time-header">Time Required</div>
          <div className="activity-column-body time-body">
            {activities.map((activity, index) => (
              <div key={index} className="activity-row-item">
                {activity.timeRequired}
              </div>
            ))}
          </div>
        </div>
      </div>  

      {/* Terms and Conditions */}
      <div className="activity-terms">
        <h3 className="activity-terms-title">
          <span className="activity-terms-accent">Terms</span> and{" "}
          <span className="activity-terms-light">Conditions</span>
        </h3>
        <button className="activity-terms-button">
          View all terms and conditions
        </button>
      </div>
    </div> 
  );
};   

export default ActivityTable;