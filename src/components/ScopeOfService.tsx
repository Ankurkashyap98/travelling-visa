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

      {/* Component specific styles to match provided layout & keep responsive */}
      <style>
        {`
          .sos-row { display:flex; gap:24px; align-items:flex-start; width:100%; overflow-x:auto; }
          .sos-col { flex: 0 0 auto; }
          .sos-header {
            background: #321E5D;
            color: #ffffff;
            height: 61px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:600;
            border-top-left-radius:45px;
            border-top-right-radius:45px;
          }
          .sos-body {
            background: #F9EEFF;
            color: #321E5D;
            height: 420px;
            border-bottom-left-radius:30px;
            border-bottom-right-radius:30px;
            padding: 28px 20px;
            display:flex;
            flex-direction:column;
            gap: 45px;
            justify-content:flex-start;
            box-sizing: border-box;
            line-height: 32px;
            text-align: center;
          }
          .sos-text {
            font-family: Roboto, system-ui, -apple-system, "Segoe UI", Arial;
            font-weight: 300;
            font-size: 20px;
            line-height: 32px;
            text-transform: capitalize;
            color: #321E5D;
          }

          /* Specific widths as provided */
          .sos-service { width: 374px; }
          .sos-details { width: 816px; }

          /* Inclusion summary styles */
          .incl-wrap { margin-top: 32px; }
          .incl-row { display:flex; gap:16px; align-items:flex-start; width:100%; overflow-x:auto; }
          .incl-col { flex: 0 0 auto; box-sizing: border-box; }
          .incl-header {
            background: #321E5D;
            color: #fff;
            height: 61px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:600;
            border-top-left-radius:45px;
            border-top-right-radius:45px;
            padding: 0 12px;
            text-align:center;
          }
          .incl-body {
            background: #F9EEFF;
            height: 265px;
            border-bottom-left-radius:30px;
            border-bottom-right-radius:30px;
            padding: 20px;
            display:flex;
            flex-direction:column;
            gap: 35px;
            justify-content:flex-start;
            color: #321E5D;
            box-sizing: border-box;
            text-align: center;
          }

          .incl-category { width: 185.3904266357422px; }
          .incl-count { width: 130.98236083984375px; }
          .incl-details { width: 584.3828735351562px; }
          .incl-status { width: 269.01763916015625px; }

          /* Responsive: on small screens stack columns and make heights auto */
          @media (max-width: 768px) {
            .sos-row, .incl-row { flex-direction: column; }
            .sos-service, .sos-details, .incl-category, .incl-count, .incl-details, .incl-status {
              width: 100% !important;
            }
            .sos-body { height: auto; padding: 16px; }
            .incl-body { height: auto; padding: 16px; }
            .sos-header, .incl-header { border-radius: 12px 12px 0 0; height: 54px; }
            .sos-body, .incl-body { border-radius: 0 0 12px 12px; }
          }
        `}
      </style>

      {/* Services Section */}
      <div className="sos-row">
        <div className="sos-col sos-service" aria-label="Service column">
          <div className="sos-header">Service</div>
          <div className="sos-body">
            {services.length > 0 ? (
              services.map((s, idx) => (
                <div key={idx} className="sos-text">
                  {s.service}
                </div>
              ))
            ) : (
              <div className="sos-text">-</div>
            )}
          </div>
        </div>

        <div className="sos-col sos-details" aria-label="Details column">
          <div className="sos-header">Details</div>
          <div className="sos-body">
            {services.length > 0 ? (
              services.map((s, idx) => (
                <div key={idx} className="sos-text">
                  {s.details}
                </div>
              ))
            ) : (
              <div className="sos-text">-</div>
            )}
          </div>
        </div>
      </div>

      {/* Inclusion Summary */}
      <h2 className="text-2xl font-bold text-vigovia-purple mt-8 mb-4">
        Inclusion Summary
      </h2>

      <div className="incl-wrap">
        <div className="incl-row">
          <div className="incl-col incl-category" aria-label="Category column">
            <div className="incl-header">Category</div>
            <div className="incl-body">
              {inclusions.length > 0 ? (
                inclusions.map((inc, idx) => (
                  <div key={idx} className="sos-text">
                    {inc.category}
                  </div>
                ))
              ) : (
                <div className="sos-text">-</div>
              )}
            </div>
          </div>

          <div className="incl-col incl-count" aria-label="Count column">
            <div className="incl-header">Count</div>
            <div className="incl-body">
              {inclusions.length > 0 ? (
                inclusions.map((inc, idx) => (
                  <div key={idx} className="sos-text">
                    {inc.count}
                  </div>
                ))
              ) : (
                <div className="sos-text">-</div>
              )}
            </div>
          </div>

          <div className="incl-col incl-details" aria-label="Details column">
            <div className="incl-header">Details</div>
            <div className="incl-body">
              {inclusions.length > 0 ? (
                inclusions.map((inc, idx) => (
                  <div key={idx} className="sos-text">
                    {inc.details}
                  </div>
                ))
              ) : (
                <div className="sos-text">-</div>
              )}
            </div>
          </div>

          <div
            className="incl-col incl-status"
            aria-label="Status / Comments column"
          >
            <div className="incl-header">Status / Comments</div>
            <div className="incl-body">
              {inclusions.length > 0 ? (
                inclusions.map((inc, idx) => (
                  <div key={idx} className="sos-text">
                    {inc.status}
                  </div>
                ))
              ) : (
                <div className="sos-text">-</div>
              )}
            </div>
          </div>
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
