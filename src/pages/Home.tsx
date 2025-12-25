import { useState } from 'react';
import { Clover, Dices, X, ChevronRight, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Lottery {
    id: string;
    name: string;
    prize: string;
    color: string;
    // Modal details
    modalTitle?: string;
    rules?: string;
    drawDays?: string;
    notes?: string;
}

const lotteries: Lottery[] = [
    {
        id: 'lotofacil',
        name: 'LOTOFÁCIL',
        prize: 'R$ 1.800.000,00',
        color: '#bc4287',
        modalTitle: 'Lotofácil',
        rules: 'escolher de 15 a 20 números entre 25.',
        drawDays: 'todos os dias da semana, de segunda a sábado, às 20h.',
        notes: 'é a loteria mais frequente, junto com a Quina.'
    },
    {
        id: 'megasena',
        name: 'MEGA-SENA',
        prize: 'R$ 38.000.000,00',
        color: '#2e7d32',
        modalTitle: 'Mega-Sena',
        rules: 'escolher de 6 a 15 números entre 60.',
        drawDays: 'quartas e sábados, às 20h (horário de Brasília).',
        notes: 'em datas especiais (como a Mega da Virada), pode haver sorteios adicionais.'
    },
    {
        id: 'lotomania',
        name: 'LOTOMANIA',
        prize: 'R$ 1.600.000,00',
        color: '#f57c00',
        modalTitle: 'Lotomania',
        rules: 'marcar 50 números entre 100.',
        drawDays: 'segundas, quartas e sextas, às 20h.',
        notes: ''
    },
    {
        id: 'duplasena',
        name: 'DUPLA SENA',
        prize: 'R$ 2.400.000,00',
        color: '#c62828',
        modalTitle: 'Dupla Sena',
        rules: 'Escolher de 6 a 15 números entre 50. A aposta participa de dois sorteios no mesmo concurso.',
        drawDays: 'terças, quintas e sábados, às 20h (horário de Brasília).',
        notes: 'Em datas especiais ocorre a Dupla de Páscoa, com prêmio acumulado e concurso único.'
    },
    {
        id: 'diadesorte',
        name: 'DIA DE SORTE',
        prize: 'R$ 650.000,00',
        color: '#d4a017',
        modalTitle: 'Dia de Sorte',
        rules: 'escolher de 7 a 15 números entre 31, além de 1 mês da sorte (de janeiro a dezembro).',
        drawDays: 'terças, quintas e sábados, às 20h (horário de Brasília).',
        notes: 'paga prêmios para 4 a 7 acertos, além do acerto do mês sorteado.'
    },
];

export default function Home() {
    const [selectedLottery, setSelectedLottery] = useState<Lottery | null>(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selectedLottery) {
            navigate('/game-selection', { state: { lottery: selectedLottery } });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg shadow-md">
                        <Clover size={20} className="text-white" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-gray-800">
                        LOTOAPP
                    </span>
                </div>
                {/* Profile placeholder or setting icon could go here */}
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
            </header>

            <main className="flex-1 px-5 pt-8 pb-12 overflow-y-auto">
                <div className="max-w-md mx-auto space-y-8">
                    {/* Hero Title */}
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-black text-gray-900 leading-tight">
                            Qual prêmio vamos <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                                buscar hoje?
                            </span>
                        </h1>
                        <p className="text-gray-500 font-medium text-sm">
                            Escolha sua loteria favorita e aumente suas chances
                        </p>
                    </div>

                    {/* Lottery Grid/List */}
                    <div className="grid gap-4">
                        {lotteries.map((loto) => (
                            <button
                                key={loto.id}
                                onClick={() => setSelectedLottery(loto)}
                                className="group relative w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-100 transition-all duration-300 ease-out flex items-center gap-4 text-left active:scale-[0.98]"
                            >
                                {/* Icon Container */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-110 duration-300"
                                    style={{ backgroundColor: `${loto.color}15`, color: loto.color }}
                                >
                                    <Clover size={28} strokeWidth={2.5} />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-green-700 transition-colors">
                                        {loto.name}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <Trophy size={14} className="text-yellow-500" fill="currentColor" />
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                                            Prêmio estimado
                                        </span>
                                    </div>
                                    <p
                                        className="font-extrabold text-base tracking-tight"
                                        style={{ color: loto.color }}
                                    >
                                        {loto.prize}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className="text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                                    <ChevronRight size={24} />
                                </div>

                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Premium Modal */}
            {selectedLottery && (
                <div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedLottery(null)}
                    />

                    <div className="relative w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl transform transition-all animate-in slide-in-from-bottom-10 fade-in duration-300 overflow-hidden">
                        {/* Modal Header with Lottery Color */}
                        <div
                            className="w-full px-6 py-8 flex flex-col items-center justify-center relative overflow-hidden"
                            style={{ backgroundColor: selectedLottery.color }}
                        >
                            {/* Decorative bubbles */}
                            <div className="absolute top-[-20%] left-[-10%] w-24 h-24 rounded-full bg-white/10 blur-xl" />
                            <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 rounded-full bg-white/20 blur-xl" />

                            <button
                                onClick={() => setSelectedLottery(null)}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <Dices size={48} className="text-white mb-3 drop-shadow-md" />
                            <h2 className="text-3xl font-black text-white tracking-tight italic drop-shadow-sm">
                                {selectedLottery.modalTitle}
                            </h2>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Como Jogar</span>
                                    <p className="text-gray-700 font-medium leading-relaxed text-sm">
                                        {selectedLottery.rules}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Sorteios</span>
                                        <p className="text-gray-700 font-medium leading-relaxed text-xs">
                                            {selectedLottery.drawDays}
                                        </p>
                                    </div>
                                </div>

                                {selectedLottery.notes && (
                                    <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100 flex gap-2">
                                        <span>💡</span>
                                        <span>{selectedLottery.notes}</span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleContinue}
                                className="w-full py-4 rounded-xl font-black text-lg text-white shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group"
                                style={{
                                    background: `linear-gradient(to right, ${selectedLottery.color}, ${selectedLottery.color}dd)`
                                }}
                            >
                                CONTINUAR
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
