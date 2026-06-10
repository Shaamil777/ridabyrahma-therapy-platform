"use client";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-20 overflow-hidden relative flex items-center justify-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="flex flex-col space-y-6">
            {/* TODO: Left side hero content (temporarily removed) */}
          </div>
          
          {/* Right Side SVG */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-calm-accent/5 rounded-full blur-3xl transform scale-[2] -z-10"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-[150%] sm:w-[175%] lg:w-[200%] max-w-none h-auto drop-shadow-2xl transform scale-125 lg:scale-150 xl:scale-[1.75] origin-center lg:origin-right translate-x-24 lg:translate-x-48 xl:translate-x-64 transition-all duration-700">
              <g fill="none" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                
                <path d="M 220 450 Q 230 350 220 250" />
                <path d="M 225 450 Q 235 340 230 230" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M 280 450 Q 270 350 280 250" />
                <path d="M 275 450 Q 265 340 270 230" strokeWidth="1" strokeOpacity="0.6"/>
                
                <path d="M 240 445 Q 245 350 240 260" strokeWidth="1" />
                <path d="M 255 452 Q 252 350 255 240" strokeWidth="0.8" strokeOpacity="0.7"/>
                <path d="M 265 448 Q 260 380 265 290" strokeWidth="0.8" />
                <path d="M 248 440 Q 250 390 245 310" strokeWidth="0.6" strokeOpacity="0.5"/>
                
                <path d="M 220 450 Q 200 455 180 465" />
                <path d="M 225 450 Q 205 460 190 460" strokeWidth="1" strokeOpacity="0.7"/>
                <path d="M 280 450 Q 300 455 320 465" />
                <path d="M 275 450 Q 295 460 310 460" strokeWidth="1" strokeOpacity="0.7"/>

                <path d="M 230 280 Q 180 260 140 200" />
                <path d="M 235 285 Q 185 270 145 205" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M 270 270 Q 320 250 360 190" />
                <path d="M 265 275 Q 315 260 355 195" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M 245 250 Q 240 180 210 120" />
                <path d="M 255 250 Q 260 180 290 120" strokeWidth="1.2"/>

                <path d="M 180 150 C 160 120 190 70 250 70 C 310 70 340 120 320 150 C 360 170 370 230 310 240 C 300 270 200 270 190 240 C 130 230 140 170 180 150 Z" />
                <path d="M 185 155 C 168 128 195 80 250 80 C 305 80 332 128 315 155 C 350 175 358 225 305 233 C 295 260 205 260 195 233 C 142 225 150 175 185 155 Z" strokeWidth="1" strokeOpacity="0.5"/>
                <path d="M 175 145 C 152 112 185 60 250 60 C 315 60 348 112 325 145 C 370 165 382 235 315 247 C 305 280 195 280 185 247 C 118 235 130 165 175 145 Z" strokeWidth="0.8" strokeOpacity="0.4"/>
                
                <path d="M 210 120 Q 230 100 250 130 T 290 110 T 280 150 T 230 160 T 210 120" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M 180 190 Q 200 170 220 200 T 260 180 T 250 220 T 200 230 T 180 190" strokeWidth="1" strokeOpacity="0.6"/>
                <path d="M 270 180 Q 290 160 310 190 T 340 170 T 330 210 T 290 220 T 270 180" strokeWidth="1" strokeOpacity="0.6"/>

                <g transform="translate(130, 290) rotate(15)">
                  <path d="M 0 0 C 10 -12 20 -12 30 0 C 20 12 10 12 0 0 Z" />
                  <path d="M 2 0 L 25 0" strokeWidth="0.8" strokeOpacity="0.7"/>
                </g>
                
                <g transform="translate(350, 270) rotate(-25)">
                  <path d="M 0 0 C 10 -12 20 -12 30 0 C 20 12 10 12 0 0 Z" />
                  <path d="M 2 0 L 25 0" strokeWidth="0.8" strokeOpacity="0.7"/>
                </g>
                
                <g transform="translate(290, 340) rotate(45)">
                  <path d="M 0 0 C 8 -10 16 -10 24 0 C 16 10 8 10 0 0 Z" />
                  <path d="M 2 0 L 20 0" strokeWidth="0.8" strokeOpacity="0.7"/>
                </g>

                <g transform="translate(170, 380) rotate(-10)">
                  <path d="M 0 0 C 12 -14 24 -14 36 0 C 24 14 12 14 0 0 Z" />
                  <path d="M 2 0 L 30 0" strokeWidth="0.8" strokeOpacity="0.7"/>
                </g>

                <g transform="translate(320, 410) rotate(-60)">
                  <path d="M 0 0 C 10 -12 20 -12 30 0 C 20 12 10 12 0 0 Z" />
                  <path d="M 2 0 L 25 0" strokeWidth="0.8" strokeOpacity="0.7"/>
                </g>
                
                <path d="M 120 270 Q 140 250 155 285" strokeDasharray="2 4" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 360 240 Q 380 260 345 285" strokeDasharray="2 4" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 310 320 Q 330 350 280 355" strokeDasharray="2 4" strokeWidth="1" strokeOpacity="0.3" />

              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
