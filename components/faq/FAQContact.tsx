export default function FAQContact() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div style={{ width: '1440px', height: '240px' }} className="relative bg-orange-600 overflow-hidden">
        <div style={{ left: '591px', top: '33px' }} className="absolute text-center justify-center text-white text-2xl font-bold font-['Poppins'] leading-7">
          Still Have Questions?
        </div>
        <div style={{ left: '355px', top: '67px' }} className="absolute text-center justify-center text-white text-base font-normal font-['Poppins'] leading-6">
          Our team is here to help. Contact us directly and we'll respond within 24–48 business hours.
        </div>
        
        <button style={{ width: '288px', height: '44px', left: '409px', top: '120px' }} className="absolute bg-white rounded-[999px] hover:bg-orange-50 transition-colors">
          <div style={{ left: '105px', top: '11px' }} className="absolute text-center justify-center text-orange-600 text-base font-semibold font-['Poppins']">
            Contact Us
          </div>
        </button>
        
        <button style={{ width: '288px', height: '44px', left: '736px', top: '120px' }} className="absolute rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white hover:bg-white/10 transition-colors">
          <div style={{ left: '94px', top: '11px' }} className="absolute text-center justify-center text-white text-base font-semibold font-['Poppins']">
            Returns Policy
          </div>
        </button>
      </div>
    </div>
  );
}

