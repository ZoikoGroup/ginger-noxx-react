"use client";

export default function FindProfileNotify() {
  return (
    <section className="find-profile-notify-section">

      <div className="find-profile-notify-container">

        <h2 className="find-profile-notify-heading">
          Not Available Near You{" "}
          <span>Yet?</span>
        </h2>


        <div className="find-profile-notify-card">

          <div className="find-profile-notify-icon">
            <img 
              src="/find-profile/location-mail.png"
              alt="location notification"
            />
          </div>


          <h3 className="find-profile-notify-title">
            Tell Us Where You Are
          </h3>


          <p className="find-profile-notify-description">
            Tell us where you are and we will notify you when GingerNoxx becomes available
            <br />
            near you. Your location helps us prioritise where to expand next.
          </p>


          <div className="find-profile-notify-form">


            <div className="find-profile-notify-field">

              <label>
                Email Address *
              </label>

              <div className="find-profile-notify-input">
                your@email.com
              </div>

            </div>



            <div className="find-profile-notify-field">

              <label>
                Country *
              </label>

              <div className="find-profile-notify-input">
                Select country…
              </div>

            </div>


            <div className="find-profile-notify-field full">

              <label>
                City / Postcode *
              </label>

              <div className="find-profile-notify-input">
                Enter your city or postcode
              </div>

            </div>
                        <div className="find-profile-notify-field full">

              <label>
                Product Interest
              </label>

              <div className="find-profile-notify-input">
                What are you looking for?
              </div>

            </div>



            <button className="find-profile-notify-button">
              Notify Me When GingerNoxx Is Near Me →
            </button>



            <p className="find-profile-notify-policy">

              By submitting, you consent to GingerNoxx storing your location and contact details to notify you of availability
              <br />

              updates. You can unsubscribe at any time. See our{" "}
              
              <span>
                Privacy Policy
              </span>

              . We never sell your data. Compliant with
              <br />

              GDPR and applicable privacy frameworks.

            </p>


          </div>

        </div>

      </div>

    </section>
  );
}

