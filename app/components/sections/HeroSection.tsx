"use client";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-20 md:py-28 overflow-hidden relative flex items-center justify-center bg-background">
      {/* Impressive Mesh Gradient Background (Static) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="hero-mesh-1 absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px]" />
        <div className="hero-mesh-2 absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[100px]" />
        <div className="hero-mesh-3 absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full blur-[140px]" />
      </div>

      {/* Soft Watercolor Wash Behind the Leaf */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-90 mix-blend-multiply">
        <div className="relative w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] md:w-[45rem] md:h-[45rem]">
          {/* Base Beige Wash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#EFE6DD] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[50px] opacity-80"></div>
          {/* Pale Orange Spread */}
          <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[85%] bg-[#F4D5C2] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[60px] opacity-70"></div>
          {/* Warm Cream Core */}
          <div className="absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#FDFBF7] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[40px] opacity-90"></div>
          {/* Subtle Rust/Peach Accent */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#E8C3B0] rounded-[50%_50%_20%_80%/25%_80%_20%_75%] blur-[70px] opacity-60"></div>
        </div>
      </div>

      {/* Psychology Quotes - Left and Right */}
      <div className="hidden lg:flex flex-col absolute left-[4%] xl:left-[8%] top-[35%] max-w-[220px] xl:max-w-[280px] z-20 hero-animate-up hero-delay-4 mix-blend-multiply">
        <p className="font-cormorant text-[#5A6B56] text-xl xl:text-2xl italic leading-relaxed mb-4 opacity-90">
          "The curious paradox is that when I accept myself just as I am, then I can change."
        </p>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-[#8C5A3E] opacity-40"></div>
          <p className="text-[#8C5A3E] text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
            Carl Rogers
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-col absolute right-[4%] xl:right-[8%] top-[45%] max-w-[220px] xl:max-w-[280px] text-right items-end z-20 hero-animate-up hero-delay-5 mix-blend-multiply">
        <p className="font-cormorant text-[#5A6B56] text-xl xl:text-2xl italic leading-relaxed mb-4 opacity-90">
          "Who looks outside, dreams; who looks inside, awakes."
        </p>
        <div className="flex items-center justify-end gap-3">
          <p className="text-[#8C5A3E] text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
            Carl Jung
          </p>
          <div className="h-[1px] w-8 bg-[#8C5A3E] opacity-40"></div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center mt-[-55vh] max-w-5xl mx-auto px-4">
        {/* Top Tagline with Icon */}
        <div className="hero-animate-up hero-delay-1 flex items-center justify-center gap-3 text-[#6A7C64] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M12 21C12 21 11.5 16 16 11.5C20.5 7 22.5 5 22.5 5C22.5 5 19.5 6.5 15 11C10.5 15.5 12 21 12 21Z" fill="#6A7C64" />
            <path d="M12 21C12 21 11.5 17 8.5 14C5.5 11 4 9 4 9C4 9 6.5 10.5 9.5 13.5C12.5 16.5 12 21 12 21Z" fill="#6A7C64" />
            <path d="M12 21C12 21 12.5 15 9 10.5C5.5 6 4.5 3 4.5 3C4.5 3 7.5 5.5 11 10C14.5 14.5 12 21 12 21Z" fill="#6A7C64" />
          </svg>
          <span>WELCOME TO RIDA BY RAHMA</span>
        </div>

        {/* Primary Title */}
        <h1 className="hero-animate-scale hero-delay-2 text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-cormorant font-semibold text-[#3A4B35] leading-[1.1] tracking-tight -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4">
          Breathe.
        </h1>
      </div>

      {/* Bottom Hero Details */}
      <div className="absolute bottom-[2vh] sm:bottom-[5vh] lg:bottom-[8vh] left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Three phrases */}
        <div className="hero-animate-up hero-delay-3 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[#8C5A3E] text-lg sm:text-xl md:text-2xl font-cormorant font-semibold mb-4">
          <span>Unwind your worries</span>
          <span className="text-[#D3C4B7] text-xl">•</span>
          <span>Soak in peace</span>
          <span className="text-[#D3C4B7] text-xl">•</span>
          <span>Restore your wellbeing</span>
        </div>

        {/* Separator with leaf */}
        <div className="hero-animate-expand hero-delay-4 flex items-center justify-center gap-4 w-full max-w-md mb-4">
          <div className="h-[1px] bg-[#D3C4B7] flex-1 opacity-60"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6A7C64]">
            <path d="M12 21C12 21 11.5 16 16 11.5C20.5 7 22.5 5 22.5 5C22.5 5 19.5 6.5 15 11C10.5 15.5 12 21 12 21Z" fill="currentColor" />
            <path d="M12 21C12 21 11.5 17 8.5 14C5.5 11 4 9 4 9C4 9 6.5 10.5 9.5 13.5C12.5 16.5 12 21 12 21Z" fill="currentColor" />
            <path d="M12 21C12 21 12.5 15 9 10.5C5.5 6 4.5 3 4.5 3C4.5 3 7.5 5.5 11 10C14.5 14.5 12 21 12 21Z" fill="currentColor" />
          </svg>
          <div className="h-[1px] bg-[#D3C4B7] flex-1 opacity-60"></div>
        </div>

        {/* Subtitle */}
        <p className="hero-animate-up hero-delay-5 text-[#4A5D4E] text-base sm:text-lg mb-6 max-w-xl">
          Your path to better wellbeing, where calm meets care.
        </p>

        {/* Button */}
        <button className="hero-animate-up hero-delay-6 group relative bg-[#5A6B56] text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full uppercase tracking-[0.15em] text-xs sm:text-sm font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#5A6B56]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[#4A5947] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out z-0"></div>
          <span className="relative z-10 flex items-center gap-3">
            BOOK APPOINTMENT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Bottom Arc structure */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[130px] lg:h-[160px] translate-y-px"
        >
          <path
            d="M 0,0 Q 720,250 1440,0 L 1440,150 L 0,150 Z"
            fill="var(--accent-light-color)"
            opacity="0.95"
          />
        </svg>
      </div>
    </section>
  );
}
