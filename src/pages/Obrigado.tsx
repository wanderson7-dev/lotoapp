// @ts-nocheck
import { useState } from 'react';
import {
    Rocket,
    Star,
    Flame,
    Clover,
    Dices,
    Target,
    Users,
    Phone,
    MessageCircle,
    Hand
} from 'lucide-react';

export default function Obrigado() {
    const [selectedLottery, setSelectedLottery] = useState<string | null>(null);
    const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);

    const generateNumbers = (lottery: string) => {
        let count = 0;
        let max = 0;

        switch (lottery) {
            case 'Mega-Sena':
                count = 6;
                max = 60;
                break;
            case 'Quina':
                count = 5;
                max = 80;
                break;
            case 'Lotofácil':
                count = 15;
                max = 25;
                break;
            case 'Lotomania':
                count = 50;
                max = 99; // 0-99 often
                break;
            default:
                return;
        }

        const numbers = new Set<number>();
        while (numbers.size < count) {
            const num = Math.floor(Math.random() * max) + 1; // 1 to max
            numbers.add(num);
        }

        // Convert to array and sort
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        setSelectedLottery(lottery);
        setGeneratedNumbers(sortedNumbers);
    };

    const formatNumber = (num: number) => {
        return num.toString().padStart(2, '0');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-8 font-sans">

            {/* Header Logo Area */}
            <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2 mb-1">
                    {/* Mock Logo based on image */}
                    <div className="relative">
                        <div className="text-[#006400] font-black text-3xl tracking-tighter flex items-center">
                            <span className="text-[#d4af37] text-4xl mr-1">$</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-[#d4af37] text-xs uppercase">Sistema</span>
                                <span className="text-[#006400] text-xl uppercase">da Loteria</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-[#ff4545] font-black text-xl md:text-2xl uppercase text-center mb-8 px-4">
                NÚMEROS PARA APOSTAR HOJE
            </h1>

            <div className="flex items-center justify-center gap-2 mb-6 px-4 text-center">
                <Dices className="w-6 h-6 text-gray-700" />
                <p className="text-[#4a148c] font-bold text-sm md:text-base uppercase leading-tight">
                    ESCOLHA A LOTERIA E CLIQUE PARA<br />
                    GERAR SEUS NÚMEROS 👇
                </p>
            </div>

            {/* Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 w-full max-w-lg px-6 mb-8">

                {/* Mega-Sena */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => generateNumbers('Mega-Sena')}
                        className="w-full bg-[#34495e] hover:bg-[#2c3e50] text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                        <Rocket className="w-5 h-5 text-yellow-400" />
                        Mega-Sena
                    </button>
                    <div className="bg-gray-50 rounded p-2 text-center border border-gray-100">
                        <p className="text-[10px] md:text-xs text-[#d32f2f] font-bold uppercase leading-tight">
                            👆 Clique acima para<br />gerar os jogos da Mega-Sena
                        </p>
                    </div>
                </div>

                {/* Quina */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => generateNumbers('Quina')}
                        className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                        <Clover className="w-5 h-5 text-yellow-200" />
                        Quina
                    </button>
                    <div className="bg-gray-50 rounded p-2 text-center border border-gray-100">
                        <p className="text-[10px] md:text-xs text-[#d32f2f] font-bold uppercase leading-tight">
                            👆 Clique acima para<br />gerar os jogos da Quina
                        </p>
                    </div>
                </div>

                {/* Lotofácil */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => generateNumbers('Lotofácil')}
                        className="w-full bg-[#9b59b6] hover:bg-[#8e44ad] text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        Lotofácil
                    </button>
                    <div className="bg-gray-50 rounded p-2 text-center border border-gray-100">
                        <p className="text-[10px] md:text-xs text-[#d32f2f] font-bold uppercase leading-tight">
                            👆 Clique acima para<br />gerar os jogos da Lotofácil
                        </p>
                    </div>
                </div>

                {/* Lotomania */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => generateNumbers('Lotomania')}
                        className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                        <Flame className="w-5 h-5 text-yellow-100 fill-yellow-100" />
                        Lotomania
                    </button>
                    <div className="bg-gray-50 rounded p-2 text-center border border-gray-100">
                        <p className="text-[10px] md:text-xs text-[#d32f2f] font-bold uppercase leading-tight">
                            👆 Clique acima para<br />gerar os jogos da Lotomania
                        </p>
                    </div>
                </div>

            </div>

            {/* Results Area */}
            <div className="mb-10 text-center px-4 min-h-[100px]">
                {selectedLottery ? (
                    <>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Target className="w-6 h-6 text-red-500" />
                            <h2 className="text-gray-800 font-bold text-lg uppercase">
                                Números da {selectedLottery}:
                            </h2>
                        </div>
                        <div className="text-[#0288d1] font-black text-2xl md:text-3xl tracking-wider leading-relaxed max-w-lg mx-auto">
                            {generatedNumbers.map(formatNumber).join(' - ')}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-400 italic">Selecione uma loteria acima para ver os números</p>
                )}
            </div>

            {/* WhatsApp Group */}
            <div className="w-full max-w-sm px-6 mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-5 h-5 text-[#5c6bc0]" />
                    <h3 className="text-[#5c6bc0] font-bold text-base uppercase">
                        Entre no grupo do WhatsApp
                    </h3>
                </div>
                <p className="text-xs text-gray-600 mb-4 px-2">
                    Receba avisos de sorteios, jogos do dia e atualizações importantes.
                </p>

                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 uppercase text-sm transition-colors">
                    <span>👉</span>
                    Entrar no Grupo do WhatsApp
                </button>
            </div>

            <div className="w-full h-px bg-gray-200 max-w-xs mb-8"></div>

            {/* Support Section */}
            <div className="w-full max-w-sm px-6 text-center pb-8">
                <div className="flex items-center justify-center gap-2 mb-1">
                    <Phone className="w-5 h-5 text-[#6c757d]" />
                    <h3 className="text-[#673ab7] font-bold text-base">
                        Falar com o Suporte
                    </h3>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                    Dúvidas ou problemas? Nosso time atende pelo WhatsApp.
                </p>

                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm transition-colors">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    Falar com o Suporte no WhatsApp
                </button>
            </div>

        </div>
    );
}
