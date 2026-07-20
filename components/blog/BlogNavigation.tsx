export default function BlogNavigation() {
  return (
    <div style={{ width: '1080px', height: '64px', left: '180px', top: '529px' }} className="absolute">
        <button style={{ width: '160px', height: '40px', left: '25px', top: '16px' }} className="absolute bg-orange-600 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 cursor-pointer hover:bg-orange-700 transition-colors">
            <div style={{ left: '55px', top: '12px' }} className="absolute text-center justify-center text-white text-xs font-semibold font-['Poppins']">All Posts</div>
        </button>
        <button style={{ width: '160px', height: '40px', left: '199px', top: '16px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 cursor-pointer hover:bg-orange-50 transition-colors">
            <div style={{ left: '47px', top: '12px' }} className="absolute text-center justify-center text-stone-600 text-xs font-semibold font-['Poppins']">Lab Notes</div>
        </button>
        <button style={{ width: '160px', height: '40px', left: '373px', top: '16px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 cursor-pointer hover:bg-orange-50 transition-colors">
            <div style={{ left: '50px', top: '12px' }} className="absolute text-center justify-center text-stone-600 text-xs font-semibold font-['Poppins']">Wellness</div>
        </button>
        <button style={{ width: '160px', height: '40px', left: '547px', top: '16px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 cursor-pointer hover:bg-orange-50 transition-colors">
            <div style={{ left: '53px', top: '12px' }} className="absolute text-center justify-center text-stone-600 text-xs font-semibold font-['Poppins']">Recipes</div>
        </button>
        <button style={{ width: '160px', height: '40px', left: '721px', top: '16px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 cursor-pointer hover:bg-orange-50 transition-colors">
            <div style={{ left: '21px', top: '12px' }} className="absolute text-center justify-center text-stone-600 text-xs font-semibold font-['Poppins']">Behind the Scenes</div>
        </button>
        <button style={{ width: '160px', height: '40px', left: '895px', top: '16px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 cursor-pointer hover:bg-orange-50 transition-colors">
            <div style={{ left: '56px', top: '12px' }} className="absolute text-center justify-center text-stone-600 text-xs font-semibold font-['Poppins']">Stories</div>
        </button>
    </div>
  );
}

