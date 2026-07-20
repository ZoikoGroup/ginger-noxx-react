export default function BlogHero() {
  return (
    <div style={{ width: '1440px', height: '384px', left: '0px', top: '103px' }} className="absolute bg-amber-950 overflow-hidden">
        <img className="absolute object-cover" style={{ width: '1440px', height: '960px', left: '0px', top: '-335px' }} src="/blog/hero-bg.png" alt="Hero background" />
        <div style={{ width: '1440px', height: '224px', left: '0px', top: '154px' }} className="absolute bg-radial-[at_68%_40%] from-orange-600/20 to-orange-600/0 to 65%" />
        <div style={{ left: '460px', top: '92px' }} className="absolute text-center justify-center">
            <span className="text-white text-5xl font-semibold font-['Poppins'] leading-[51.84px]">Insights &amp; </span>
            <span className="text-orange-600 text-5xl font-semibold font-['Poppins'] leading-[51.84px]">Inspiration</span>
        </div>
        <div style={{ width: '935px', left: '252px', top: '161px' }} className="absolute text-center justify-center text-white text-base font-normal font-['Poppins'] leading-7">
            Stories, wellness tips, recipes, and behind-the-scenes innovations from GingerNoxx. Discover new ways to enjoy ginger and stay inspired by our culinary experiments and functional formulations.
        </div>
    </div>
  );
}

