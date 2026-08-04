import Link from "next/link";

export default function MissionSection() {

  return (
    <section className="mission-section">

      <div className="mission-overlay"></div>

      <div className="mission-container">

        <p className="mission-tag">
          O u r&nbsp;&nbsp; M i s s i o n
        </p>

        <h2>
          To Become the World's Most Loved
          <br />
          Ginger-Fusion Brand
        </h2>

        <p className="mission-text">
          Inspiring healthier, tastier, and more connected lives through the
          <br />
          power of ginger and culinary imagination.
        </p>

        <div className="mission-buttons">

          <Link href="/best-sellers" className="btn-primary">
            Experience the Range →
          </Link>

          <Link href="/find-profile" className="btn-secondary">
            Find Your Ginger Profile
          </Link>

        </div>

      </div>

    </section>
  );
}
