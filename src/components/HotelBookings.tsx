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

const COLUMN_STYLES = {
  city: { width: 257.3291320800781 },
  checkIn: { width: 214.6104736328125 },
  checkOut: { width: 219.69602966308594 },
  nights: { width: 138.32713317871094 },
  hotelName: { width: 336.351318359375 },
};

const headerStyle: React.CSSProperties = {
  background: "#321E5D",
  height: 61,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: 45,
  borderTopRightRadius: 45,
  fontWeight: 600,
};

const bodyStyle: React.CSSProperties = {
  background: "#F9EEFF",
  height: 442,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  paddingTop: 24,
  paddingBottom: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

const itemTextStyle: React.CSSProperties = {
  color: "#321E5D",
  fontWeight: 500,
  textAlign: "center",
  paddingLeft: 12,
  paddingRight: 12,
  wordBreak: "break-word",
};

const HotelBookings: React.FC<HotelBookingsProps> = ({ bookings }) => {
  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Hotel <span className="text-vigovia-light-purple">Bookings</span>
      </h2>

      {/* Responsive horizontal container: stacks on small screens, horizontal scroll on narrow viewports */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 items-start md:items-stretch">
          {/* City column */}
          <div
            style={{ width: COLUMN_STYLES.city.width }}
            className="flex-shrink-0"
            aria-label="City column"
          >
            <div style={headerStyle}>City</div>
            <div style={bodyStyle}>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <div key={i} style={itemTextStyle}>
                    {b.city}
                  </div>
                ))
              ) : (
                <div style={itemTextStyle}>-</div>
              )}
            </div>
          </div>

          {/* Check In column */}
          <div
            style={{ width: COLUMN_STYLES.checkIn.width }}
            className="flex-shrink-0"
            aria-label="Check in column"
          >
            <div style={headerStyle}>Check In</div>
            <div style={bodyStyle}>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <div key={i} style={itemTextStyle}>
                    {b.checkIn}
                  </div>
                ))
              ) : (
                <div style={itemTextStyle}>-</div>
              )}
            </div>
          </div>

          {/* Check Out column */}
          <div
            style={{ width: COLUMN_STYLES.checkOut.width }}
            className="flex-shrink-0"
            aria-label="Check out column"
          >
            <div style={headerStyle}>Check Out</div>
            <div style={bodyStyle}>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <div key={i} style={itemTextStyle}>
                    {b.checkOut}
                  </div>
                ))
              ) : (
                <div style={itemTextStyle}>-</div>
              )}
            </div>
          </div>

          {/* Nights column */}
          <div
            style={{ width: COLUMN_STYLES.nights.width }}
            className="flex-shrink-0"
            aria-label="Nights column"
          >
            <div style={headerStyle}>Nights</div>
            <div style={bodyStyle}>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <div key={i} style={itemTextStyle}>
                    {b.nights}
                  </div>
                ))
              ) : (
                <div style={itemTextStyle}>-</div>
              )}
            </div>
          </div>

          {/* Hotel Name column */}
          <div
            style={{ width: COLUMN_STYLES.hotelName.width }}
            className="flex-shrink-0"
            aria-label="Hotel name column"
          >
            <div style={headerStyle}>Hotel Name</div>
            <div style={bodyStyle}>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <div key={i} style={itemTextStyle}>
                    {b.hotelName}
                  </div>
                ))
              ) : (
                <div style={itemTextStyle}>-</div>
              )}
            </div>
          </div>
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
