import { useNavigate, useLocation } from 'react-router-dom';
import { Clover } from 'lucide-react';
import { LotteryBall } from '../components/LotteryBall';
import '../index.css';

export default function GameSelection() {
    const navigate = useNavigate();
    const location = useLocation();
    const lottery = location.state?.lottery;

    // Fallback if accessed directly without state
    const defaultColor = '#bc4287';
    const color = lottery?.color || defaultColor;
    const name = lottery?.name || 'LOTOFÁCIL';

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

                {/* Curviture at bottom of header - simulated with CSS or SVG if needed, but simple for now */}
                <div className="absolute -bottom-6 left-0 right-0 h-6 bg-white rounded-t-[24px] pointer-events-none"></div>
            </div>

            <main className="flex-1 flex flex-col items-center px-6 pt-12 pb-8">
                <h1 className="text-[#004d40] text-3xl font-extrabold text-center leading-tight mb-4 tracking-tight">
                    QUANTOS JOGOS VOCÊ<br />QUER GERAR?
                </h1>

                <p className="text-center font-bold text-gray-900 text-sm max-w-xs mb-12 uppercase tracking-wide">
                    Clique em uma das bolinhas para escolher a quantia de jogos
                </p>

                {/* Balls Grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
                    <LotteryBall
                        number={2}
                        color="blue"
                        onClick={() => navigate('/confirm-selection', { state: { lottery, quantity: 2 } })}
                    />
                    <LotteryBall
                        number={4}
                        color="orange"
                        onClick={() => navigate('/confirm-selection', { state: { lottery, quantity: 4 } })}
                    />
                    <LotteryBall
                        number={6}
                        color="purple"
                        onClick={() => navigate('/confirm-selection', { state: { lottery, quantity: 6 } })}
                    />
                    <LotteryBall
                        number={8}
                        color="cyan"
                        onClick={() => navigate('/confirm-selection', { state: { lottery, quantity: 8 } })}
                    />
                </div>
            </main>


        </div>
    );
}
