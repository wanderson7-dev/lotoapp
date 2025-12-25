

interface LotteryBallProps {
    number: number;
    color: 'blue' | 'orange' | 'purple' | 'cyan';
    onClick?: () => void;
    size?: string; // e.g. "w-28 h-28"
    textSize?: string; // e.g. "text-5xl"
}

export function LotteryBall({ number, color, onClick, size = "w-28 h-28", textSize = "text-5xl" }: LotteryBallProps) {
    // Map colors to gradients
    const gradients = {
        blue: 'radial-gradient(circle at 35% 35%, #42a5f5, #1976d2, #0d47a1)',
        orange: 'radial-gradient(circle at 35% 35%, #ffa726, #f57c00, #e65100)',
        purple: 'radial-gradient(circle at 35% 35%, #ab47bc, #8e24aa, #4a148c)',
        cyan: 'radial-gradient(circle at 35% 35%, #26c6da, #00bcd4, #006064)',
    };

    return (
        <button
            onClick={onClick}
            className={`${size} rounded-full flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer shadow-xl`}
        >
            {/* Ball Body */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: gradients[color],
                    boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)'
                }}
            ></div>

            {/* Specular Highlight (The shine) */}
            <div className="absolute top-[15%] left-[15%] w-[40%] h-[30%] bg-gradient-to-br from-white/90 to-transparent rounded-full filter blur-[2px]"></div>

            {/* Number Circle (White part) */}
            <div className="relative w-[50%] h-[50%] bg-white/90 rounded-full flex items-center justify-center shadow-inner pt-1">
                <span className={`${textSize} font-extrabold text-[#222] font-sans tracking-tighter`} style={{ fontFamily: 'Inter' }}>
                    {number}
                </span>
            </div>

            {/* Number Reflection/Gloss inside the white circle */}
            <div className="absolute top-[32%] w-[40%] h-[20%] bg-gradient-to-b from-white to-transparent rounded-full opacity-50"></div>
        </button>
    );
}
