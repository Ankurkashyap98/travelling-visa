import React from "react";

interface HotelBooking {
  city: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  hotelName: string;
}

interface HotelBookingsProps {
  bookings: HotelBooking[];
}

const HotelBookings: React.FC<HotelBookingsProps> = ({ bookings }) => {
  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Hotel <span className="text-vigovia-light-purple">Bookings</span>
      </h2>

      {/* Hotel Bookings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-vigovia-purple text-white px-6 py-4 rounded-t-xl">
          <div className="grid grid-cols-5 gap-4 font-semibold">
            <div>City</div>
            <div>Check In</div>
            <div>Check Out</div>
            <div>Nights</div>
            <div>Hotel Name</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {bookings.map((booking, index) => (
            <div key={index} className="px-6 py-4">
              <div className="grid grid-cols-5 gap-4 text-vigovia-purple">
                <div className="font-medium">{booking.city}</div>
                <div className="font-medium">{booking.checkIn}</div>
                <div className="font-medium">{booking.checkOut}</div>
                <div className="font-medium">{booking.nights}</div>
                <div className="font-medium">{booking.hotelName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Notes */}
      <div className="mt-6 space-y-2">
        <p className="text-sm text-gray-600">
          1. All Hotels Are Tentative And Can Be Replaced With Similar.
        </p>
        <p className="text-sm text-gray-600">
          2. Breakfast Included For All Hotel Stays.
        </p>
        <p className="text-sm text-gray-600">
          3. All Hotels Will Be 4* And Above Category
        </p>
        <p className="text-sm text-gray-600">
          4. A maximum occupancy of 2 people/room is allowed in most hotels.
        </p>
      </div>
    </div>
  );
};

export default HotelBookings;
