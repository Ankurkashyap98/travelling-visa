import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

interface DayActivity {
  time: string;
  description: string;
}

interface Day {
  dayNumber: number;
  date: string;
  title: string;
  imageUrl: string;
  activities: {
    morning: DayActivity[];
    afternoon: DayActivity[];
    evening: DayActivity[];
  };
}

interface HotelBooking {
  city: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  hotelName: string;
}

interface Installment {
  installment: string;
  amount: string;
  dueDate: string;
}

interface FormData {
  travelerName: string;
  destination: string;
  duration: string;
  departureFrom: string;
  departureDate: string;
  arrivalDate: string;
  travelers: number;
  days: Day[];
  hotelBookings: HotelBooking[];
  totalAmount: string;
  tcs: string;
  installments: Installment[];
  visaType: string;
  visaValidity: string;
  visaProcessingDate: string;
}

interface ItineraryFormProps {
  onSubmit: (data: FormData) => void;
}

const ItineraryForm: React.FC<ItineraryFormProps> = ({ onSubmit }) => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      travelerName: "Rahul",
      destination: "Singapore",
      duration: "4 Days 3 Nights",
      departureFrom: "Mumbai",
      departureDate: "31/10/2025",
      arrivalDate: "01/11/2025",
      travelers: 4,
      days: [
        {
          dayNumber: 1,
          date: "27th November",
          title: "Arrival In Singapore & City Exploration",
          imageUrl:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
          activities: {
            morning: [
              {
                time: "Morning",
                description:
                  "Arrive In Singapore. Transfer From Airport To Hotel.",
              },
            ],
            afternoon: [
              { time: "Afternoon", description: "Check Into Your Hotel." },
              {
                time: "Afternoon",
                description: "Visit Marina Bay Sands Sky Park (2-3 Hours).",
              },
              {
                time: "Afternoon",
                description:
                  "Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
              },
            ],
            evening: [
              {
                time: "Evening",
                description:
                  "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
              },
            ],
          },
        },
      ],
      hotelBookings: [
        {
          city: "Singapore",
          checkIn: "24/02/2024",
          checkOut: "27/02/2024",
          nights: 3,
          hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
        },
      ],
      totalAmount: "₹ 9,00,000 For 3 Pax (Inclusive Of GST)",
      tcs: "Not Collected",
      installments: [
        {
          installment: "Installment 1",
          amount: "₹3,50,000",
          dueDate: "Initial Payment",
        },
        {
          installment: "Installment 2",
          amount: "₹4,00,000",
          dueDate: "Post Visa Approval",
        },
        {
          installment: "Installment 3",
          amount: "Remaining",
          dueDate: "20 Days Before Departure",
        },
      ],
      visaType: "123456",
      visaValidity: "123456",
      visaProcessingDate: "123456",
    },
  });

  const {
    fields: dayFields,
    append: appendDay,
    remove: removeDay,
  } = useFieldArray({
    control,
    name: "days",
  });

  const {
    fields: hotelFields,
    append: appendHotel,
    remove: removeHotel,
  } = useFieldArray({
    control,
    name: "hotelBookings",
  });

  const {
    fields: installmentFields,
    append: appendInstallment,
    remove: removeInstallment,
  } = useFieldArray({
    control,
    name: "installments",
  });

  const [showForm, setShowForm] = useState(false);

  const addDay = () => {
    const newDayNumber = dayFields.length + 1;
    appendDay({
      dayNumber: newDayNumber,
      date: `${newDayNumber + 26}th November`,
      title: `Day ${newDayNumber} Activities`,
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
      activities: {
        morning: [{ time: "Morning", description: "" }],
        afternoon: [{ time: "Afternoon", description: "" }],
        evening: [{ time: "Evening", description: "" }],
      },
    });
  };

  const addHotel = () => {
    appendHotel({
      city: "",
      checkIn: "",
      checkOut: "",
      nights: 0,
      hotelName: "",
    });
  };

  const addInstallment = () => {
    const installmentNumber = installmentFields.length + 1;
    appendInstallment({
      installment: `Installment ${installmentNumber}`,
      amount: "",
      dueDate: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-vigovia-purple">
              Itinerary Builder
            </h1>
            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="bg-vigovia-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-vigovia-light-purple transition-colors"
            >
              {showForm ? "Hide Form" : "Edit Itinerary"}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-vigovia-purple mb-4">
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Traveler Name
                    </label>
                    <input
                      {...register("travelerName")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination
                    </label>
                    <input
                      {...register("destination")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration
                    </label>
                    <input
                      {...register("duration")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure From
                    </label>
                    <input
                      {...register("departureFrom")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Date
                    </label>
                    <input
                      {...register("departureDate")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Arrival Date
                    </label>
                    <input
                      {...register("arrivalDate")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      {...register("travelers", { valueAsNumber: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Days */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-vigovia-purple">
                    Days
                  </h2>
                  <button
                    type="button"
                    onClick={addDay}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Add Day
                  </button>
                </div>
                {dayFields.map((field, index) => (
                  <div key={field.id} className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Day {index + 1}</h3>
                      <button
                        type="button"
                        onClick={() => removeDay(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date
                        </label>
                        <input
                          {...register(`days.${index}.date`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          {...register(`days.${index}.title`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Image URL
                        </label>
                        <input
                          {...register(`days.${index}.imageUrl`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Morning Activities
                        </label>
                        <textarea
                          {...register(
                            `days.${index}.activities.morning.0.description`
                          )}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Afternoon Activities
                        </label>
                        <textarea
                          {...register(
                            `days.${index}.activities.afternoon.0.description`
                          )}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Evening Activities
                        </label>
                        <textarea
                          {...register(
                            `days.${index}.activities.evening.0.description`
                          )}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hotel Bookings */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-vigovia-purple">
                    Hotel Bookings
                  </h2>
                  <button
                    type="button"
                    onClick={addHotel}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Add Hotel
                  </button>
                </div>
                {hotelFields.map((field, index) => (
                  <div key={field.id} className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        Hotel {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeHotel(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          {...register(`hotelBookings.${index}.city`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hotel Name
                        </label>
                        <input
                          {...register(`hotelBookings.${index}.hotelName`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check In
                        </label>
                        <input
                          {...register(`hotelBookings.${index}.checkIn`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check Out
                        </label>
                        <input
                          {...register(`hotelBookings.${index}.checkOut`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nights
                        </label>
                        <input
                          type="number"
                          {...register(`hotelBookings.${index}.nights`, {
                            valueAsNumber: true,
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Plan */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-vigovia-purple">
                    Payment Plan
                  </h2>
                  <button
                    type="button"
                    onClick={addInstallment}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Add Installment
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Amount
                    </label>
                    <input
                      {...register("totalAmount")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      TCS
                    </label>
                    <input
                      {...register("tcs")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                </div>
                {installmentFields.map((field, index) => (
                  <div key={field.id} className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        Installment {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeInstallment(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Installment
                        </label>
                        <input
                          {...register(`installments.${index}.installment`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount
                        </label>
                        <input
                          {...register(`installments.${index}.amount`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Due Date
                        </label>
                        <input
                          {...register(`installments.${index}.dueDate`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visa Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-vigovia-purple mb-4">
                  Visa Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visa Type
                    </label>
                    <input
                      {...register("visaType")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Validity
                    </label>
                    <input
                      {...register("visaValidity")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Processing Date
                    </label>
                    <input
                      {...register("visaProcessingDate")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vigovia-purple focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-vigovia-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vigovia-light-purple transition-colors"
                >
                  Generate Itinerary
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryForm;
