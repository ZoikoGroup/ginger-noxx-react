const cards = [
  {
    category: "Wellness · Daily Ritual",
    title: <>5 Ways to Build a Daily Ginger Ritual<br/>That Actually Sticks</>,
    desc: <>From morning shots to post-meal refreshment<br/>— practical ways to make ginger a consistent,<br/>enjoyable part of everyday life.</>,
    date: "Mar 2026",
    tag: "Wellness",
    img: "/blog/wellness-ritual.png",
    left: '0px', top: '0px',
    tagW: '80px', tagInnerW: '56px', tagInnerL: '10px',
    footerTop: '329.36px'
  },
  {
    category: "Recipes · Culinary",
    title: <>Ginger Fire Sauce Marinade:<br/>Restaurant Depth in Under 5 Minutes</>,
    desc: <>A simple three-ingredient marinade using our<br/>Ginger Fire Sauce that transforms ordinary<br/>proteins into something genuinely<br/>memorable.</>,
    date: "Feb 2026",
    tag: "Recipe",
    img: "/blog/recipes-culinary.png",
    left: '367.33px', top: '0px',
    tagW: '56px', tagInnerW: '36px', tagInnerL: '10px',
    footerTop: '350.47px'
  },
  {
    category: "Lab Notes · Formulation",
    title: <>What Gingerol Concentration Actually<br/>Means for Flavour and Function</>,
    desc: <>A non-technical explanation of the science<br/>behind why GingerNoxx products taste<br/>different from every other ginger product on<br/>the market.</>,
    date: "Feb 2026",
    tag: "Lab Notes",
    img: "/blog/lab-notes-chopping.png",
    left: '734.66px', top: '0px',
    tagW: '80px', tagInnerW: '56px', tagInnerL: '10px',
    footerTop: '350.47px'
  },
  {
    category: "Behind the Scenes",
    title: <>Inside Our Ginger Sourcing Journey —<br/>From Peru to Your Door</>,
    desc: <>How we select our ginger farms, what<br/>regenerative sourcing means in practice, and<br/>why origin traceability matters for every<br/>product we make.</>,
    date: "Jan 2026",
    tag: "Behind Scenes",
    img: "/blog/behind-the-scenes.png",
    left: '0px', top: '415.07px',
    tagW: '112px', tagInnerW: '80px', tagInnerL: '10px',
    footerTop: '350.47px'
  },
  {
    category: "Recipes · Beverages",
    title: <>The Perfect Sparkling Ginger Mocktail:<br/>3 Ingredients, Zero Compromise</>,
    desc: <>Using the Sparkling Ginger Lime Infusion as a<br/>base, three mocktail recipes that perform as<br/>well at a dinner table as at a wellness<br/>morning.</>,
    date: "Jan 2026",
    tag: "Beverages",
    img: "/blog/recipes-beverages.png",
    left: '367.33px', top: '415.07px',
    tagW: '80px', tagInnerW: '56px', tagInnerL: '10px',
    footerTop: '350.47px'
  },
  {
    category: "Stories · Brand",
    title: <>Why We Said No to Extract-Only<br/>Ginger — And What Cost Us</>,
    desc: <>An honest look at the formulation decisions<br/>that made GingerNoxx more expensive to<br/>make but more credible to taste — and why<br/>we wouldn&apos;t change them.</>,
    date: "Dec 2025",
    tag: "Stories",
    img: "/blog/stories.png",
    left: '734.66px', top: '415.07px',
    tagW: '80px', tagInnerW: '56px', tagInnerL: '10px',
    footerTop: '350.47px'
  }
];

export default function PostGrid() {
  return (
    <div style={{ width: '1080px', height: '872.13px', left: '180px', top: '1086.87px' }} className="absolute">
        {cards.map((card, idx) => (
            <div key={idx} style={{ width: '345.33px', height: '384px', left: card.left, top: card.top }} className="absolute bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
                
                {/* Text Layout precisely positioned as a Flex block to prevent overlap */}
                <div style={{ left: '16px', top: '181px', width: '313px', height: '179px' }} className="absolute flex flex-col items-start text-left">
                    <div style={{ marginBottom: '5px' }} className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest">{card.category}</div>
                    
                    <div style={{ marginBottom: '12px' }} className="w-full text-stone-900 text-base font-bold font-['Poppins'] leading-5 group-hover:text-orange-600 transition-colors">{card.title}</div>
                    
                    <div className="w-full text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{card.desc}</div>
                    
                    <div className="w-full flex items-center justify-between mt-auto">
                        <div className="text-stone-500 text-xs font-normal font-['Poppins'] leading-4">{card.date}</div>
                        <div className="text-orange-600 text-xs font-bold font-['Poppins'] leading-4">Read More →</div>
                    </div>
                </div>
                
                {/* Image Section */}
                <div style={{ width: '345.33px', height: '160px', left: '0px', top: '0px' }} className="absolute bg-neutral-400 overflow-hidden">
                    <div style={{ width: card.tagW, height: '24px', left: '12px', top: '12px' }} className="absolute bg-orange-600 rounded-[999px] z-10">
                        <div style={{ width: card.tagInnerW, height: '14px', left: card.tagInnerL, top: '4px' }} className="absolute justify-center text-white text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-wide">{card.tag}</div>
                    </div>
                    <img className="absolute object-cover inset-0 w-full h-full" src={card.img} alt={card.tag} />
                </div>
            </div>
        ))}
    </div>
  );
}

