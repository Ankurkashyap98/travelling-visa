import React from "react";

interface Service {
  service: string;
  details: string;
}

interface Inclusion {
  category: string;
  count: number;
  details: string;
  status: string;
}

interface ScopeOfServiceProps {
  services: Service[];
  inclusions: Inclusion[];
}

const ScopeOfService: React.FC<ScopeOfServiceProps> = ({
  services,
  inclusions,
}) => {
  return (
    <div className="mx-6 mb-8">
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Scope Of Service
      </h2>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-vigovia-purple text-white px-6 py-4">
            <h3 className="text-lg font-semibold">Service</h3>
          </div>
          <div className="p-6 space-y-4">
            {services.map((service, index) => (
              <div key={index} className="text-vigovia-purple font-medium">
                {service.service}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-vigovia-purple text-white px-6 py-4">
            <h3 className="text-lg font-semibold">Details</h3>
          </div>
          <div className="p-6 space-y-4">
            {services.map((service, index) => (
              <div key={index} className="text-gray-700">
                {service.details}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inclusion Summary */}
      <h2 className="text-2xl font-bold text-vigovia-purple mb-6">
        Inclusion Summary
      </h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-vigovia-purple text-white px-6 py-4">
          <div className="grid grid-cols-4 gap-4 font-semibold">
            <div>Category</div>
            <div>Count</div>
            <div>Details</div>
            <div>Status / Comments</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {inclusions.map((inclusion, index) => (
            <div key={index} className="px-6 py-4">
              <div className="grid grid-cols-4 gap-4 text-vigovia-purple">
                <div className="font-medium">{inclusion.category}</div>
                <div className="font-medium">{inclusion.count}</div>
                <div className="font-medium">{inclusion.details}</div>
                <div className="font-medium">{inclusion.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transfer Policy */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-vigovia-purple mb-2">
          Transfer Policy (Refundable Upon Claim)
        </h3>
        <p className="text-gray-700">
          If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An
          App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.
        </p>
      </div>
    </div>
  );
};

export default ScopeOfService;
