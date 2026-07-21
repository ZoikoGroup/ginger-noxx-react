"use client";

const reviews = [
  {
    text: `"I've been searching for something that actually tastes like real ginger and not a chemical approximation. GingerNoxx absolutely nails it — the sparkling is now a daily ritual."`,
    name: "Amara J.",
    tag: "Taste",
  },
  {
    text: `"Got the family pack for school lunches. My kids demolished it in days. Clean label, no sugar issues, and the flavour gets a full family approval — which is saying something."`,
    name: "Marcus T.",
    tag: "Family Approval",
  },
  {
    text: `"As a chef, I'm obsessive about ingredient quality. The spice blends are restaurant-grade — they've genuinely changed how I use ginger in my kitchen. Extraordinary range."`,
    name: "Priya K.",
    tag: "Cooking Utility",
  },
];


export default function FindProfileReviews() {

  return (

    <section className="find-profile-reviews-section">

      <div className="find-profile-reviews-container">


        <div className="find-profile-reviews-badge">
          Reviews & Trust
        </div>



        <h2 className="find-profile-reviews-heading">

          <span className="dark">
            Loved by 
          </span>

          <span>
            10,000+
          </span>

          <span className="dark">
            {" "}Customers
          </span>

        </h2>



        <div className="find-profile-reviews-grid">


          {reviews.map((review,index)=>(


            <div 
              className="find-profile-review-card"
              key={index}
            >


              <div className="find-profile-review-stars">
                ★★★★★
              </div>



              <p className="find-profile-review-text">

                {review.text}

              </p>



              <div className="find-profile-review-user">


                <div className="find-profile-review-avatar">
                </div>



                <div className="find-profile-review-details">


                  <h4>
                    {review.name}
                  </h4>


                  <span className="find-profile-review-tag">
                    {review.tag}
                  </span>


                </div>


              </div>


              <div className="find-profile-review-verified">

                ✓ Verified Purchase

              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

}