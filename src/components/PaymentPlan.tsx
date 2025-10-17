import React from "react";

interface Installment {
  installment: string;
  amount: string;
  dueDate: string;
}

interface PaymentPlanProps {
  totalAmount: string;
  tcs: string;
  installments: Installment[];
  visaType: string;
  validity: string;
  processingDate: string;
  onBook?: () => void; // added optional callback prop
}

const PaymentPlan: React.FC<PaymentPlanProps> = ({
  totalAmount,
  tcs,
  installments,
  visaType,
  validity,
  processingDate,
  onBook, // optional callback
}) => {
  // default handler if parent doesn't provide onBook
  const handleBook = () => {
    if (onBook) {
      onBook();
      return;
    }
    // fallback behaviour: navigate to /booking if route exists, otherwise show alert
    if (typeof window !== "undefined") {
      try {
        window.location.href = "/booking";
      } catch {
        // last-resort
        // eslint-disable-next-line no-alert
        alert("Booking initiated");
      }
    }
  };

  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Payment <span className="text-vigovia-light-purple">Plan</span>
      </h2>

      {/* Summary boxes with specific layout */}
      <div
        className="flex flex-col gap-4 mb-8"
        style={{ width: 1207, height: 161 }}
      >
        <div className="bg-[#F9EEFF] rounded-2xl p-6 flex items-center">
          <div className="flex-1">
            <span className="text-[#321E5D] font-medium">Total Amount</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#321E5D] font-medium">₹ 9,00,000</span>
            <span className="ml-2 text-gray-600">
              For 3 Pax (Inclusive Of GST)
            </span>
          </div>
        </div>

        <div className="bg-[#F9EEFF] rounded-2xl p-6 flex items-center">
          <div className="flex-1">
            <span className="text-[#321E5D] font-medium">TCS</span>
          </div>
          <div>
            <span className="text-[#321E5D] font-medium">Not Collected</span>
          </div>
        </div>
      </div>

      {/* Installment Table with specific column layouts */}
      <div className="flex gap-6 overflow-x-auto">
        {/* Installment Column */}
        <div style={{ width: 335.28369140625 }}>
          <div
            style={{
              height: 61,
              background: "#321E5D",
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: 26,
            }}
          >
            Installment
          </div>
          <div
            style={{
              height: 273,
              background: "#F9EEFF",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              padding: "20px",
            }}
          >
            {installments.map((inst, idx) => (
              <div key={idx} className="text-[#321E5D] mb-4">
                {inst.installment}
              </div>
            ))}
          </div>
        </div>

        {/* Amount Column */}
        <div style={{ width: 511.8037414550781 }}>
          <div
            style={{
              height: 61,
              background: "#321E5D",
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: 26,
            }}
          >
            Amount
          </div>
          <div
            style={{
              height: 273,
              background: "#F9EEFF",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              padding: "20px",
            }}
          >
            {installments.map((inst, idx) => (
              <div key={idx} className="text-[#321E5D] mb-4">
                {inst.amount}
              </div>
            ))}
          </div>
        </div>

        {/* Due Date Column */}
        <div style={{ width: 343.6396484375 }}>
          <div
            style={{
              height: 61,
              background: "#321E5D",
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: 26,
            }}
          >
            Due Date
          </div>
          <div
            style={{
              height: 273,
              background: "#F9EEFF",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              padding: "20px",
            }}
          >
            {installments.map((inst, idx) => (
              <div key={idx} className="text-[#321E5D] mb-4">
                {inst.dueDate}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLAN.PACK.GO! + Book Now */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#321E5D] mb-6">
          PLAN.PACK.GO!
        </h2>
        <button
          onClick={handleBook}
          aria-label="Book now"
          className="text-white font-medium"
          style={{
            background: "#521f8e",
            padding: "12px 56px",
            borderRadius: 999,
            border: "none",
            boxShadow: "none",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
          }
          div[style*="width"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentPlan;
