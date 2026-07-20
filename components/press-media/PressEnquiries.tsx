export default function PressEnquiries() {
  return (
    <section className="relative w-full max-w-[1440px] h-[384px] bg-white overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-[1440px]">
        {/* Enquiries Card */}
        <div className="absolute w-[798px] h-64 left-[321px] top-[72px] bg-orange-600 rounded-3xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100">
          <div className="absolute w-60 h-4 left-[269.36px] top-[29px] text-center text-white text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[2.80px]">
            Press Enquiries
          </div>
          
          <div className="absolute w-80 h-7 left-[222.53px] top-[58px] text-center text-white text-2xl font-bold font-['Poppins'] leading-7">
            Media &amp; Editorial Contact
          </div>
          
          <div className="absolute w-[759px] left-[20px] top-[90px] text-center text-white text-sm font-normal font-['Poppins'] leading-6">
            For press enquiries, interview requests, review samples, or media partnerships,<br/>
            please contact our team directly. We aim to respond to all media enquiries within 24 hours.
          </div>
          
          <div className="absolute w-80 h-5 left-[249.33px] top-[200.64px] text-center flex items-center justify-center">
            <span className="text-white text-sm font-bold font-['Poppins'] leading-6 mr-1">📧 </span>
            <span className="text-white text-sm font-semibold font-['Poppins'] leading-6">press@gingernoxx.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

