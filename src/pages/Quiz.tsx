import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Star, ArrowLeft } from 'lucide-react';
import testimonial1 from '../assets/testimonial1.png';
import '../index.css';
import { Logo } from '../components/Logo';

export default function Quiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const { lottery, quantity } = location.state || {};
    const [step, setStep] = useState(1);

    const handleAnswer = () => {
        if (step < 13) {
            setStep(step + 1);
            window.scrollTo(0, 0);
        } else {
            // End of current quiz steps, move to next page
            navigate('/generated-games', { state: { lottery, quantity } });
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate(-1);
        }
    };

    const progressWidth = step === 1 ? '15%' : step === 2 ? '25%' : step === 3 ? '40%' : step === 4 ? '50%' : step === 5 ? '60%' : step === 6 ? '70%' : step === 7 ? '80%' : step === 8 ? '88%' : step === 9 ? '94%' : step === 10 ? '96%' : step === 11 ? '98%' : '99%';

    return (
        <div className="flex flex-col min-h-screen bg-white font-['Inter']">
            {/* Header */}
            <header className="relative py-4 flex justify-center items-center shadow-sm bg-white sticky top-0 z-10">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="absolute left-4 p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>

                <div className="transform scale-100 hover:scale-100 flex justify-center w-full">
                    <Logo />
                </div>
            </header>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100">
                <div
                    className="h-full bg-black rounded-r-full transition-all duration-500 ease-out"
                    style={{ width: progressWidth }}
                ></div>
            </div>

            <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col animate-in fade-in duration-500">

                {step === 1 && (
                    <>
                        {/* Text Content Step 1 */}
                        <div className="mb-8 text-black text-sm leading-relaxed">
                            <p className="font-extrabold text-lg mb-4 leading-tight">
                                A ex-BBB Paulinha ganhou mais de 50 vezes. Guilhermino, de PE, ganhou 70 vezes. O matemático "Munir Pé Quente" acertou 46 vezes.
                            </p>

                            <p className="italic mb-4 text-base">
                                Se a loteria fosse puramente sorte, como você explica isso? A matemática não bate.
                            </p>

                            <p className="text-base">
                                A verdade que a Caixa esconde: Um jogo criado por humanos PODE SIM ser decodificado.
                            </p>
                        </div>

                        {/* Question Step 1 */}
                        <div className="mb-6">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Qual seu principal objetivo ao jogar na loteria?
                            </h2>
                        </div>

                        {/* Options Step 1 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Ganhar milhões e mudar de vida completamente" onClick={handleAnswer} />
                            <QuizOption text="Conquistar de 50 a 100 mil para quitar dívidas" onClick={handleAnswer} />
                            <QuizOption text="Fazer uma renda extra de 5 a 10 mil por mês" onClick={handleAnswer} />
                            <QuizOption text="Apenas diversão, sem expectativas" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        {/* Testimonial Card */}
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6 flex gap-4 items-start">
                            <img
                                src={testimonial1}
                                alt="Fernando Souza"
                                className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-0.5 mb-1.5">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} size={14} fill="#FFD700" className="text-[#FFD700]" />
                                    ))}
                                </div>
                                <h3 className="font-extrabold text-black text-lg leading-none mb-0.5">Fernado Souza</h3>
                                <span className="text-gray-500 text-xs font-medium mb-3">Campinas</span>

                                <p className="text-gray-600 text-sm leading-snug">
                                    Na primeira semana que testei o método, fiz <span className="font-bold text-gray-800">5 ACERTOS</span> e ganhei <span className="font-bold text-gray-800">R$ 47.800</span>
                                </p>
                            </div>
                        </div>

                        {/* Text Content Step 2 */}
                        <div className="mb-8 ">
                            <p className="italic text-base text-black leading-relaxed font-medium">
                                Enquanto você queima dinheiro há anos, pessoas comuns estão faturando milhares toda semana usando ciência ao invés de sorte.
                            </p>
                        </div>

                        {/* Question Step 2 */}
                        <div className="mb-6">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Qual foi o maior prêmio que você já ganhou na loteria?
                            </h2>
                        </div>

                        {/* Options Step 2 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Nunca ganhei nada" onClick={handleAnswer} />
                            <QuizOption text="Menos de R$ 100" onClick={handleAnswer} />
                            <QuizOption text="Entre R$ 100 a R$ 1.000" onClick={handleAnswer} />
                            <QuizOption text="Entre R$ 1.000 a R$ 10.000" onClick={handleAnswer} />
                            <QuizOption text="Mais de R$ 10.000" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        {/* Question Step 3 */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Como você escolhe seus números para apostar?
                            </h2>
                        </div>

                        {/* Options Step 3 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Datas especiais (aniversários, casamento, etc.)" onClick={handleAnswer} />
                            <QuizOption text="Números da sorte pessoais" onClick={handleAnswer} />
                            <QuizOption text="Surpresinha (aleatório)" onClick={handleAnswer} />
                            <QuizOption text="Baseado em estatísticas dos sorteios anteriores" onClick={handleAnswer} />
                            <QuizOption text="Uso algum método ou sistema" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 4 && (
                    <>
                        {/* Question Step 4 - Formerly Step 5 (Spending) */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Quanto você gasta por mês com apostas na loteria?
                            </h2>
                        </div>

                        {/* Options Step 4 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Não Gasto Nada" onClick={handleAnswer} />
                            <QuizOption text="Até R$ 50" onClick={handleAnswer} />
                            <QuizOption text="Entre R$ 50 a R$ 100" onClick={handleAnswer} />
                            <QuizOption text="Entre R$ 100 a R$ 500" onClick={handleAnswer} />
                            <QuizOption text="Mais de R$ 500" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 5 && (
                    <LoadingStep onComplete={() => setStep(6)} />
                )}

                {step === 6 && (
                    <>
                        {/* Question Step 6 - Formerly Step 7 (50k) */}
                        <div className="mb-6 mt-2">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Se você ganhasse R$ 50.000 na loteria amanhã, qual seria sua primeira ação?
                            </h2>
                        </div>

                        {/* Options Step 6 - With Icons */}
                        <div className="flex flex-col gap-3 mb-8">
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💸</span>}
                                text="Pagaria todas as dívidas"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">🚗</span>}
                                text="Compraria um carro novo"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Investiria o dinheiro"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">🏠</span>}
                                text="Realizaria o sonho da casa própria"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">👨‍👩‍👧‍👦</span>}
                                text="Ajudaria a família"
                                onClick={handleAnswer}
                            />
                        </div>

                        {/* Footer Text */}
                        <div className="text-center space-y-4">
                            <p className="bg-yellow-300 inline-block px-1 text-sm font-bold text-black border border-yellow-400 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                "Seus sonhos estão mais próximos do que imagina..."
                            </p>

                            <p className="bg-[#fbbf24] p-2 text-sm font-bold text-black border-2 border-dashed border-black/20">
                                Mas há algo que você PRECISA saber antes de continuar jogando do jeito tradicional...
                            </p>
                        </div>
                    </>
                )}

                {step === 7 && (
                    <>
                        {/* Question Step 7 - Formerly Step 8 (10 Times) */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Você já ouviu falar de pessoas que ganharam na loteria mais de 10 vezes?
                            </h2>
                        </div>

                        {/* Options Step 7 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Sim, e acredito que é possível" onClick={handleAnswer} />
                            <QuizOption text="Sim, mas acho que é sorte" onClick={handleAnswer} />
                            <QuizOption text="Sim, mas desconfio que seja golpe" onClick={handleAnswer} />
                            <QuizOption text="Não, nunca soube disso" onClick={handleAnswer} />
                            <QuizOption text="Não acredito que seja real" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 8 && (
                    <>
                        {/* Question Step 8 - Formerly Step 5 (Obstacle) */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Qual seu maior obstáculo para ganhar na loteria?
                            </h2>
                        </div>

                        {/* Options Step 8 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Não sei escolher os números certos" onClick={handleAnswer} />
                            <QuizOption text="Gasto muito e ganho pouco" onClick={handleAnswer} />
                            <QuizOption text="Não tenho um método eficaz" onClick={handleAnswer} />
                            <QuizOption text="Acho que é tudo sorte mesmo" onClick={handleAnswer} />
                            <QuizOption text="Nunca pensei nisso" onClick={handleAnswer} />
                        </div>
                    </>
                )}
                {step === 9 && (
                    <>
                        {/* Question Step 9 */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Se existisse um método científico para aumentar drasticamente suas chances de ganhar, você investiria R$ 147,90 para aprender?
                            </h2>
                        </div>

                        {/* Options Step 9 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Sim, sem dúvida" onClick={handleAnswer} />
                            <QuizOption text="Sim, mas com garantia" onClick={handleAnswer} />
                            <QuizOption text="Talvez, dependendo da prova" onClick={handleAnswer} />
                            <QuizOption text="Não, prefiro apostar na sorte" onClick={handleAnswer} />
                            <QuizOption text="Não tenho esse dinheiro agora" onClick={handleAnswer} />
                        </div>

                        {/* Footer Text */}
                        <div className="text-center space-y-4 mt-8">
                            <p className="bg-yellow-300 inline-block p-2 text-sm font-bold text-black border border-yellow-400 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                "Sua resposta revela se você tem mentalidade de GANHADOR ou de PERDEDOR. Continue para descobrir a verdade..."
                            </p>
                        </div>
                    </>
                )}

                {step === 10 && (
                    <>
                        {/* Question Step 10 */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Qual seria o valor ideal para você ganhar mensalmente na loteria?
                            </h2>
                        </div>

                        {/* Options Step 10 - With Icons */}
                        <div className="flex flex-col gap-3">
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Entre R$ 1.000 a R$ 5.000"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Entre R$ 5.000 a R$ 15.000"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Entre R$ 15.000 a R$ 50.000"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Mais de R$ 50.000"
                                onClick={handleAnswer}
                            />
                            <QuizOptionWithIcon
                                icon={<span className="text-2xl">💰</span>}
                                text="Qualquer valor já mudaria minha vida"
                                onClick={handleAnswer}
                            />
                        </div>
                    </>
                )}

                {step === 11 && (
                    <>
                        {/* Question Step 11 */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Você estaria disposto a seguir um método testado e aprovado, mesmo que seja diferente do que você faz hoje?
                            </h2>
                        </div>

                        {/* Options Step 11 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="Sim, totalmente aberto a mudanças" onClick={handleAnswer} />
                            <QuizOption text="Sim, mas quero ver resultados primeiro" onClick={handleAnswer} />
                            <QuizOption text="Talvez, dependendo do método" onClick={handleAnswer} />
                            <QuizOption text="Não, prefiro meu jeito atual" onClick={handleAnswer} />
                            <QuizOption text="Não sei responder" onClick={handleAnswer} />
                        </div>
                    </>
                )}

                {step === 12 && (
                    <>
                        {/* Question Step 12 */}
                        <div className="mb-6 mt-4">
                            <h2 className="text-xl font-extrabold text-black leading-tight">
                                Se eu te mostrasse pessoas comuns que ganharam milhares de reais seguindo um método específico, você daria 3 minutos do seu tempo para conhecer esse sistema?
                            </h2>
                        </div>

                        {/* Options Step 12 */}
                        <div className="flex flex-col gap-3">
                            <QuizOption text="SIM! Quero conhecer agora" onClick={handleAnswer} />
                            <QuizOption text="Sim, mas quero ver as provas primeiro" onClick={handleAnswer} />
                            <QuizOption text="Talvez, se for gratuito" onClick={handleAnswer} />
                            <QuizOption text="Não tenho tempo agora" onClick={handleAnswer} />
                            <QuizOption text="Não me interesso" onClick={handleAnswer} />
                        </div>
                    </>
                )}



                {step === 13 && (
                    <FinalLoadingStep onComplete={() => navigate('/final-video', { state: { lottery, quantity } })} />
                )}

            </main>
        </div>
    );
}

function FinalLoadingStep({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [messages, setMessages] = useState<string[]>([]);

    // Sequence of messages
    useEffect(() => {
        const sequence = [
            { text: "🔄 Analisando suas respostas...", delay: 500 },
            { text: "🔄 Calculando seu perfil de ganhador...", delay: 1500 },
            { text: "🔄 Verificando compatibilidade com método premiado...", delay: 2500 },
            { text: "🔄 Preparando seu resultado personalizado...", delay: 3500 }
        ];

        const timeouts: ReturnType<typeof setTimeout>[] = [];

        sequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setMessages(prev => {
                    // Prevent duplicates
                    if (prev.includes(text)) return prev;
                    return [...prev, text];
                });
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    // Progress Bar
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                const diff = Math.random() * 5 + 2; // Faster progress (was * 2)
                return Math.min(prev + diff, 100);
            });
        }, 150); // Slightly slower interval tick, but larger chunks

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="flex flex-col pt-10">
            {/* Messages Area */}
            <div className="flex flex-col gap-4 mb-12 min-h-[200px]">
                {messages.map((msg, index) => (
                    <div key={index} className="flex items-center gap-2 text-black font-medium text-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <span>{msg}</span>
                    </div>
                ))}
            </div>

            {/* Progress Section */}
            <div className="w-full flex justify-between text-black font-bold text-sm mb-2 px-1">
                <span>Carregando...</span>
                <span>{Math.round(progress)}%</span>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full mb-8 overflow-hidden border border-gray-100">
                <div
                    className="h-full bg-black rounded-full transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Footer Text */}
            <p className="text-center text-black text-sm leading-relaxed mx-auto max-w-xs">
                "AGUARDE... Estamos processando suas 11 respostas através de nosso algoritmo exclusivo que já identificou mais de 2.847 perfis de ganhadores..."
            </p>
        </div>
    );
}

function LoadingStep({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                const diff = Math.random() * 5 + 1; // Increment between 1 and 6
                return Math.min(prev + diff, 100);
            });
        }, 100); // Slightly faster updates for smoothness

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center pt-20">
            <div className="w-full flex justify-between text-black font-bold text-sm mb-2 px-1">
                <span>Carregando...</span>
                <span>{Math.round(progress)}%</span>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full mb-8 overflow-hidden border border-gray-100">
                <div
                    className="h-full bg-black rounded-full transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <p className="text-center text-black font-medium leading-relaxed text-lg">
                "Calculando seus gastos versus seus ganhos... Os números mostram algo <span className="font-extrabold text-red-600">CHOCANTE</span> que você precisa ver..."
            </p>
        </div>
    );
}

function QuizOption({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-full p-4 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] border border-gray-300 rounded-xl flex items-center justify-between transition-all group"
        >
            <span className="text-black font-semibold text-left text-sm flex-1 mr-2">{text}</span>
            <div className="bg-white rounded-full p-1 shadow-sm group-hover:translate-x-1 transition-transform">
                <ChevronRight size={16} className="text-black/50" />
            </div>
        </button>
    );
}

function QuizOptionWithIcon({ text, icon, onClick }: { text: string; icon: React.ReactNode; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-full p-3 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] border border-gray-300 rounded-xl flex items-center gap-4 transition-all group"
        >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-xl border border-gray-100">
                {icon}
            </div>
            <span className="text-black font-bold text-left text-sm flex-1">{text}</span>
            <div className="bg-white rounded-full p-1.5 shadow-sm group-hover:translate-x-1 transition-transform">
                <ChevronRight size={14} className="text-black/50" />
            </div>
        </button>
    );
}

