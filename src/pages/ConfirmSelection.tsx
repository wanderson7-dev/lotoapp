import { useLocation, useNavigate } from 'react-router-dom';
import { Clover, Calendar } from 'lucide-react';
import { LotteryBall } from '../components/LotteryBall';
import { useState, useEffect, useRef } from 'react';
import '../index.css';

export default function ConfirmSelection() {
    const navigate = useNavigate();
    const location = useLocation();
    const { lottery, quantity } = location.state || {}; // { lottery: Lottery, quantity: number }

    const [isGenerating, setIsGenerating] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Fallbacks
    const defaultColor = '#bc4287';
    const color = lottery?.color || defaultColor;
    const name = lottery?.name || 'LOTOFÁCIL';
    const displayQuantity = quantity || 2;

    const ballColorMap: Record<number, 'blue' | 'orange' | 'purple' | 'cyan'> = {
        2: 'blue',
        4: 'orange',
        6: 'purple',
        8: 'cyan'
    };
    const ballColor = ballColorMap[displayQuantity] || 'blue';

    useEffect(() => {
        if (isGenerating) {
            intervalRef.current = setInterval(() => {
                setProgress((oldProgress) => {
                    // Random increment between 2 and 6 to ensure movement
                    const diff = Math.random() * 4 + 2;
                    const newProgress = Math.min(oldProgress + diff, 100);
                    return newProgress;
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isGenerating]);

    useEffect(() => {
        if (progress >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            // Small delay before navigating
            const timeout = setTimeout(() => {
                navigate('/generated-games', { state: { lottery, quantity } });
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [progress, navigate, lottery, quantity]);

    const handleGenerate = () => {
        setIsGenerating(true);
        setProgress(0);
    };

    if (isGenerating) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center bg-white px-8">
                {/* Big Clover Icon */}
                <div className="relative mb-12">
                    <Clover
                        size={160}
                        color={color} // Use lottery color for theme
                        fill={color}
                        className="animate-pulse"
                    />
                </div>

                {/* Percentage */}
                <h2 className="text-4xl font-extrabold text-black mb-10 tracking-tighter">
                    {Math.round(progress)}%
                </h2>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full mb-12 overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-100 ease-out"
                        style={{ width: `${progress}%`, backgroundColor: color }}
                    ></div>
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2">
                    <Calendar size={24} className="text-[#a16207]" /> {/* Simplified icon choice */}
                    <span className="text-lg font-medium text-black text-center">
                        Estudando resultados<br />anteriores...
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Colored Header */}
            <div
                className="w-full py-6 flex flex-col items-center justify-center relative shadow-md"
                style={{ backgroundColor: color }}
            >
                <div className="flex items-center gap-3">
                    <Clover className="text-white/90" size={48} fill="currentColor" strokeWidth={2.5} />
                    <span className="text-white text-4xl italic font-black tracking-wide" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                        {name}
                    </span>
                </div>
                <div className="absolute -bottom-6 left-0 right-0 h-6 bg-white rounded-t-[24px] pointer-events-none"></div>
            </div>

            <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
                <h1 className="text-[#003380] text-3xl font-extrabold text-center mb-12 tracking-tight">
                    Você escolheu {displayQuantity} jogos
                </h1>

                <div className="mb-16 transform scale-150">
                    <LotteryBall
                        number={displayQuantity}
                        color={ballColor}
                        size="w-40 h-40"
                        textSize="text-7xl"
                    />
                </div>

                <button
                    onClick={handleGenerate}
                    className="w-full max-w-xs bg-[#00b34d] hover:bg-[#009942] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition-all active:scale-95 mb-8"
                >
                    Gerar Combinações
                </button>
            </main>


        </div>
    );
}
