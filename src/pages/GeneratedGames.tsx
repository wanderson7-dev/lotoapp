import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Lock, TrendingUp, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from '../components/Logo';
import '../index.css';

interface Game {
    numbers: number[];
    month?: string; // For Dia de Sorte
}

export default function GeneratedGames() {
    const navigate = useNavigate();
    const location = useLocation();
    const { lottery, quantity, revealed } = location.state || {}; // { lottery: Lottery, quantity: number, revealed?: boolean }
    const [, setGames] = useState<Game[]>([]);
    const [isRevealed, setIsRevealed] = useState(false);

    // Fallbacks
    const defaultColor = '#bc4287';
    const color = lottery?.color || defaultColor;

    useEffect(() => {
        if (lottery && quantity) {
            const newGames = generateGames(lottery.id, quantity);
            setGames(newGames);
        } else {
            // If accessed directly, generate some dummy data or redirect
            // For now, let's generate dummy Lotofácil
            const newGames = generateGames('lotofacil', 4);
            setGames(newGames);
        }
    }, [lottery, quantity]);

    useEffect(() => {
        if (revealed) {
            setIsRevealed(true);
        }
    }, [revealed]);



    // Helper to format currency
    const estimatedPrize = lottery?.prize || "R$ 1.001.614,00";

    return (
        <div className="flex flex-col min-h-screen bg-[#e8f5e9]">
            {/* Header LOTOAPP */}
            <div className="w-full py-4 bg-white flex justify-center items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>
            </div>

            <main className="flex-1 flex flex-col px-4 pt-6 pb-8 max-w-md mx-auto w-full items-center">

                {!isRevealed ? (
                    // LOCKED STATE
                    <div className="flex flex-col items-center w-full animate-fadeIn">
                        <div className="flex items-center gap-2 mb-6">
                            <Lock className="text-[#bf9000]" size={28} />
                            <h1 className="text-[#1b5e20] text-2xl font-extrabold text-center leading-tight">
                                Previsão Gerada com<br />Sucesso!
                            </h1>
                        </div>

                        {/* Blurred Grid Preview */}
                        <div className="grid grid-cols-5 gap-3 mb-8 w-full px-4 blur-sm opacity-80 select-none pointer-events-none">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div key={i} className="aspect-square bg-[#1b5e20] rounded-lg"></div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="text-red-500" size={20} />
                            <p className="text-[#1b5e20] font-bold text-center text-sm">
                                Com esses números, sua estimativa de<br />premiação é:
                            </p>
                        </div>

                        {/* Prize Banner */}
                        <div className="bg-[#fbc02d] w-full py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg mb-10 transform hover:scale-105 transition-transform">
                            <DollarSign className="text-[#5d4037]" size={24} />
                            <span className="text-[#212121] text-2xl font-black tracking-tight">
                                {estimatedPrize}
                            </span>
                        </div>

                        {/* Reveal Button */}
                        <button
                            onClick={() => navigate('/video-reveal', { state: { lottery, quantity } })}
                            className="bg-[#1b5e20] text-white text-lg font-bold py-3 px-12 rounded-lg shadow-md hover:bg-[#144818] transition-colors mb-12 uppercase tracking-wide"
                        >
                            Revelar Números
                        </button>

                        {/* Disclaimer */}
                        <div className="bg-white/80 p-4 rounded-xl border border-gray-200">
                            <p className="text-[#2e7d32] text-xs text-center leading-relaxed font-medium">
                                Os números foram gerados com base em um sistema avançado de inteligência artificial que analisa os padrões da loteria. Anote os números para jogar
                            </p>
                        </div>
                    </div>
                ) : (
                    // REVEALED STATE (Previous UI adapted)
                    <div className="w-full animate-fadeIn">


                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate('/')}
                                className="flex-1 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
                            >
                                Voltar
                            </button>
                            <button className="flex-1 py-3 rounded-xl text-white font-bold shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                style={{ backgroundColor: color }}
                            >
                                <Download size={18} />
                                Salvar Jogos
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

// Logic to generate games (kept the same)
function generateGames(lotteryId: string, quantity: number): Game[] {
    const games: Game[] = [];

    for (let i = 0; i < quantity; i++) {
        let numbers: number[] = [];
        let month: string | undefined;

        switch (lotteryId) {
            case 'lotofacil':
                numbers = generateRandomNumbers(25, 15);
                break;
            case 'megasena':
                numbers = generateRandomNumbers(60, 6);
                break;
            case 'lotomania':
                numbers = generateRandomNumbers(100, 50).map(n => n - 1).sort((a, b) => a - b);
                break;
            case 'duplasena':
                numbers = generateRandomNumbers(50, 6);
                break;
            case 'diadesorte':
                numbers = generateRandomNumbers(31, 7);
                const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
                month = months[Math.floor(Math.random() * 12)];
                break;
            default:
                numbers = generateRandomNumbers(60, 6);
        }

        numbers.sort((a, b) => a - b);

        games.push({ numbers, month });
    }

    return games;
}

function generateRandomNumbers(max: number, count: number): number[] {
    const nums = new Set<number>();
    while (nums.size < count) {
        const n = Math.floor(Math.random() * max) + 1;
        nums.add(n);
    }
    return Array.from(nums);
}
