export default function BlogNewsletter() {
  return (
    <div style={{ width: '1080px', height: '240px', left: '180px', top: '1959px' }} className="absolute bg-orange-600 rounded-3xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col items-center justify-center text-center p-8">
        <div className="text-orange-100 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[2.80px] mb-2">Stay Inspired</div>
        <div className="text-white text-xl font-bold font-['Poppins'] leading-8 mb-2">Get Lab Notes in Your Inbox</div>
        <div className="max-w-[760px] text-white/90 text-sm font-normal font-['Poppins'] leading-6 mb-6">
            New recipes, formulation insights, and stories from the GingerNoxx team — delivered when it's worth reading.
        </div>
        
        <div className="flex items-center w-full max-w-[448px] h-12 mb-4">
            <div className="flex-1 h-full bg-neutral-50 rounded-l-[999px] border-l border-t border-b border-orange-100 overflow-hidden">
                <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full h-full bg-transparent px-5 outline-none text-neutral-800 text-sm font-normal font-['Poppins'] placeholder-neutral-400"
                />
            </div>
            <button className="h-full px-6 bg-orange-100 rounded-r-[999px] border border-orange-100 hover:bg-orange-200 transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-orange-600 text-xs font-semibold font-['Poppins']">Subscribe</span>
            </button>
        </div>
        
        <div className="text-white/80 text-xs font-normal font-['Poppins'] leading-4">No spam. Unsubscribe anytime.</div>
    </div>
  );
}

