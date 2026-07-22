import * as React from "react";

const SecuritySection = () => {
  return (
    <section className="security-section w-full bg-[#C7DCE6]">
      <div className="security-grid">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="security-headline">
            Your data.
            <br />
            Private and secure.
          </h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/AICPA_SOC_Logo.png/240px-AICPA_SOC_Logo.png"
            alt="AICPA SOC certification badge"
            className="security-badge"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="security-blocks">
            <div>
              <div className="security-label">SOC 2 Certified</div>
              <p className="security-body">
                DemandSense is SOC 2 Type II certified - we always handle your
                data securely and responsibly.
              </p>
            </div>

            <div>
              <div className="security-label">GDPR compliant</div>
              <p className="security-body">
                Our Data is only persistent in European data centres unless the
                customer requests data to be replicated into a region of their
                choice.
              </p>
            </div>

            <div>
              <div className="security-label">Google Cloud Based</div>
              <p className="security-body">
                DemandSense uses Google Cloud Platform as its data centres. For
                more information about how Google manages security read{" "}
                <a
                  href="https://cloud.google.com/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          <a href="#" className="security-portal-link">
            DemandSense Security Portal&nbsp;&rarr;
          </a>
        </div>
      </div>

      <style>{`
        .security-section {
          padding-top: 96px;
          padding-bottom: 96px;
          padding-left: 6%;
          padding-right: 6%;
        }
        .security-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 80px;
          align-items: flex-start;
        }
        .security-headline {
          font-family: Inter, sans-serif;
          font-weight: 800;
          font-size: 64px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #111827;
          text-align: left;
          margin: 0;
        }
        .security-badge {
          display: block;
          margin-top: 48px;
          width: 200px;
          height: auto;
        }
        .security-blocks {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .security-label {
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #111827;
          text-align: left;
        }
        .security-body {
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 19px;
          line-height: 1.5;
          color: #111827;
          text-align: left;
          margin: 8px 0 0 0;
        }
        .security-body a {
          color: #111827;
          font-size: 19px;
        }
        .security-portal-link {
          display: inline-block;
          margin-top: 80px;
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #111827;
          text-decoration: underline;
        }

        @media (max-width: 767px) {
          .security-section {
            padding-top: 64px;
            padding-bottom: 64px;
          }
          .security-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .security-headline {
            font-size: 40px;
          }
          .security-badge {
            width: 140px;
          }
          .security-label {
            font-size: 20px;
          }
          .security-body,
          .security-body a {
            font-size: 17px;
          }
          .security-portal-link {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default SecuritySection;
