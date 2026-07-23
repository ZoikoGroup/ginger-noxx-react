import Image from "next/image";
import "./press-media.css";

export default function BrandAssets() {
  return (
    <section className="press-assets-section">
      <div className="press-assets-container">

        {/* Title */}
        <h2 className="press-assets-heading">
          <span className="text-stone-900">Brand Assets </span>
          <span className="text-[#D9531E]">Available Soon</span>
        </h2>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">

          {/* Card 1: Brand Logo Pack */}
          <div className="press-asset-card">
            {/* Header: light bg with logo centered */}
            <div className="press-card-header press-card-header-logo">
              <Image
                src="/Image/ginger-logo.png"
                alt="GingerNoxx Logo"
                width={206}
                height={32}
                className="object-contain max-h-8"
                priority
              />
            </div>
            <div className="press-card-body">
              <h3 className="press-card-title">Brand Logo Pack</h3>
              <p className="press-card-desc">
                SVG, PNG, EPS — dark, light, and amber<br />variants
              </p>
            </div>
          </div>

          {/* Card 2: Brand Style Guide */}
          <div className="press-asset-card">
            <div className="press-card-header press-card-header-split" />
            <div className="press-card-body">
              <h3 className="press-card-title">Brand Style Guide</h3>
              <p className="press-card-desc">
                Colour tokens, typography, photography<br />guidelines
              </p>
            </div>
          </div>

          {/* Card 3: Media Kit & Fact Sheet */}
          <div className="press-asset-card">
            <div className="press-card-header press-card-header-gray" />
            <div className="press-card-body">
              <h3 className="press-card-title">Media Kit &amp; Fact Sheet</h3>
              <p className="press-card-desc">
                Company overview, product specs, key stats
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
