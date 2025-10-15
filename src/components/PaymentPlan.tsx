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
  visaDetails: {
    visaType: string;
    validity: string;
    processingDate: string;
  };
}

const PaymentPlan: React.FC<PaymentPlanProps> = ({
  totalAmount,
  tcs,
  installments,
  visaDetails,
}) => {
  return (
    <div className="mx-6 mb-8">
      {/* Payment Plan */}
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Payment <span className="text-vigovia-light-purple">Plan</span>
      </h2>

      {/* Summary Boxes */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-vigovia-purple rounded-l-lg"></div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-xl font-bold text-vigovia-purple">
              {totalAmount}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-vigovia-purple rounded-l-lg"></div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">TCS</p>
            <p className="text-xl font-bold text-vigovia-purple">{tcs}</p>
          </div>
        </div>
      </div>

      {/* Installments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-vigovia-purple text-white px-6 py-4">
          <div className="grid grid-cols-3 gap-4 font-semibold">
            <div>Installment</div>
            <div>Amount</div>
            <div>Due Date</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {installments.map((installment, index) => (
            <div key={index} className="px-6 py-4 bg-gray-50">
              <div className="grid grid-cols-3 gap-4 text-vigovia-purple">
                <div className="font-medium">{installment.installment}</div>
                <div className="font-medium">{installment.amount}</div>
                <div className="font-medium">{installment.dueDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visa Details */}
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Visa <span className="text-vigovia-light-purple">Details</span>
      </h2>

      <div className="bg-white rounded-lg p-6 mb-8">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Visa Type</p>
            <p className="text-lg font-semibold text-vigovia-purple">
              {visaDetails.visaType}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Validity</p>
            <p className="text-lg font-semibold text-vigovia-purple">
              {visaDetails.validity}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Processing Date</p>
            <p className="text-lg font-semibold text-vigovia-purple">
              {visaDetails.processingDate}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black mb-6">PLAN.PACK.GO!</h2>
        <button className="bg-vigovia-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vigovia-light-purple transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPlan;
