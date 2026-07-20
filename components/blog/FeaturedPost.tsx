export default function FeaturedPost() {
  return (
    <div style={{ width: '1080px', height: '384px', left: '180px', top: '625px' }} className="absolute bg-stone-950 rounded-3xl shadow-[0px_12px_44px_0px_rgba(43,18,8,0.16)] overflow-hidden">
        <div style={{ width: '176px', height: '28px', left: '584px', top: '48px' }} className="absolute bg-orange-600/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600/30">
            <div style={{ width: '160px', height: '14px', left: '13px', top: '6px' }} className="absolute justify-center text-orange-400 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest">🔬 Featured · Lab Notes</div>
        </div>
        <div style={{ width: '480px', left: '584px', top: '89px' }} className="absolute justify-center text-white text-3xl font-bold font-['Poppins'] leading-8">
            How We Built the Ginger-<br/>Fusion™ System From the<br/>Ground Up
        </div>
        <div style={{ width: '480px', left: '584px', top: '207px' }} className="absolute justify-center text-white text-sm font-normal font-['Poppins'] leading-6">
            Inside the formulation philosophy that transformed ginger from<br/>a familiar ingredient into the foundational architecture of a new<br/>global food category. The full story of how structure, not novelty,<br/>became the operating principle.
        </div>
        <div style={{ width: '200px', left: '584px', top: '322.69px' }} className="absolute justify-center text-white/70 text-xs font-medium font-['Poppins'] leading-5">GingerNoxx R&amp;D Team</div>
        <div style={{ width: '100px', left: '730.91px', top: '322.69px' }} className="absolute justify-center text-white/70 text-xs font-normal font-['Poppins'] leading-5">March 2026</div>
        <div style={{ width: '200px', left: '812.95px', top: '322.69px' }} className="absolute justify-center text-orange-600 text-xs font-bold font-['Poppins'] leading-5 cursor-pointer hover:text-orange-500 transition-colors">Read Article →</div>
        
        <div style={{ width: '540px', height: '384px', left: '0px', top: '0px' }} className="absolute bg-stone-900">
            <img className="absolute object-cover" style={{ width: '540px', height: '384px', left: '0px', top: '0px' }} src="/blog/featured-article.png" alt="Featured Article" />
        </div>
    </div>
  );
}

