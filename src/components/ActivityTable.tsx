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
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Activity Table
      </h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-vigovia-purple text-white px-6 py-4">
          <div className="grid grid-cols-4 gap-4 font-semibold">
            <div>City</div>
            <div>Activity</div>
            <div>Type</div>
            <div>Time Required</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {activities.map((activity, index) => (
            <div key={index} className="px-6 py-4 bg-gray-50">
              <div className="grid grid-cols-4 gap-4 text-vigovia-purple">
                <div className="font-medium">{activity.city}</div>
                <div className="font-medium">{activity.activity}</div>
                <div className="font-medium">{activity.type}</div>
                <div className="font-medium">{activity.timeRequired}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-vigovia-purple mb-2">
          <span className="text-vigovia-purple">Terms</span> and{" "}
          <span className="text-vigovia-light-purple">Conditions</span>
        </h3>
        <button className="text-blue-600 underline bg-transparent border-none cursor-pointer">
          View all terms and conditions
        </button>
      </div>
    </div>
  );
};

export default ActivityTable;
