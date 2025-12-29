// @ts-nocheck
import { useEffect } from 'react';
import { Check, MessageCircle } from 'lucide-react';

export default function Up2() {
    useEffect(() => {
        // Embed the Vturb script dynamically
        const script = document.createElement("script");
        script.id = 'vturb-script-up2';
        script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/6952b4fcacd48189f693a2f0/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        // Delay logic: 2 minutes and 10 seconds
        const delaySeconds = 130;

        const setupPlayer = () => {
            const player = document.querySelector("vturb-smartplayer");
            if (player) {
                player.addEventListener("player:ready", function () {
                    // @ts-ignore
                    if (typeof player.displayHiddenElements === 'function') {
                        // @ts-ignore
                        player.displayHiddenElements(delaySeconds, [".esconder"], {
                            persist: true
                        });
                    }
                });
            }
        };

        setupPlayer();

        return () => {
            // Optional cleanup
        };
    }, []);

    const plans = [
        {
            title: "10 COTAS",
            games: "8333 Jogos",
            features: [
                "Bolão com 8333 Jogos",
                "8333 Chances de Ganhar",
                "Receba no WhatsApp",
                "Máximo 50 Pessoas"
            ],
            price: "R$1.000,00",
            installment: "12 x de R$ 116,25",
            cta: "ADQUIRIR 10 COTAS",
            link: "https://go.perfectpay.com.br/PPU38CQ5AQD?upsell=true"
        },
        {
            title: "5 COTAS",
            games: "4166 Jogos",
            features: [
                "Bolão com 4166 Jogos",
                "4166 Chances de Ganhar",
                "Receba no WhatsApp",
                "Máximo 50 Pessoas"
            ],
            price: "R$500,00",
            installment: "12 x de R$ 58,13",
            cta: "ADQUIRIR 5 COTAS",
            link: "https://go.perfectpay.com.br/PPU38CQ5AQB?upsell=true"
        },
        {
            title: "1 COTA",
            games: "833 Jogos",
            features: [
                "Bolão com 833 Jogos",
                "833 Chances de Ganhar",
                "Receba no WhatsApp",
                "Máximo 50 Pessoas"
            ],
            price: "R$100,00",
            installment: "12 x de R$ 11,63",
            cta: "ADQUIRIR 1 COTA",
            link: "https://go.perfectpay.com.br/PPU38CQ5AP6?upsell=true"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black font-sans">
            {/* Header Warning */}
            <div className="bg-[#ff0000] text-white text-center py-2 px-4 font-black text-xs md:text-sm uppercase tracking-wide leading-tight">
                NÃO FECHE OU ATUALIZE ESSA PÁGINA ISSO PODE GERAR ERROS NA SUA COMPRA
            </div>

            {/* Video Section */}
            <div className="bg-black w-full flex justify-center py-8 md:py-12">
                <div className="w-full max-w-[400px]">
                    <vturb-smartplayer
                        id="vid-6952b4fcacd48189f693a2f0"
                        style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
                    />
                </div>
            </div>

            {/* Hidden Content Container */}
            <div className="esconder w-full flex flex-col items-center">
                {/* Selection Bar */}
                <div className="w-full bg-[#ccff00] text-black text-center py-3 px-4 font-black text-base md:text-xl uppercase tracking-wider flex items-center justify-center gap-2">
                    Selecione a quantidade de cotas abaixo:
                    <span className="text-2xl">👇</span>
                </div>

                {/* Content Section with Pattern Background */}
                <div className="w-full flex-1 bg-[#0a0a0a] relative overflow-hidden py-12 px-4">
                    {/* Dark pattern background overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {plans.map((plan, index) => (
                            <a
                                key={index}
                                href={plan.link}
                                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-xl border border-gray-200 cursor-pointer block transform transition hover:scale-[1.02] active:scale-95 no-underline"
                            >
                                <h3 className="text-2xl font-black text-black uppercase mb-1">{plan.title}</h3>
                                <p className="text-lg font-bold text-gray-800 mb-6">{plan.games}</p>

                                <ul className="space-y-3 mb-8 w-full">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-gray-600">
                                            <Check size={16} className="text-black" strokeWidth={3} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto w-full">
                                    <p className="text-2xl font-black text-black">{plan.price}</p>
                                    <p className="text-sm font-bold text-gray-500 mb-6">{plan.installment}</p>

                                    <div
                                        className="block w-full bg-[#006400] hover:bg-[#004d00] text-white font-black py-4 px-4 rounded text-sm md:text-base uppercase tracking-wide transition-colors"
                                    >
                                        {plan.cta}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp Group Button */}
                    <div className="max-w-md mx-auto mt-12">
                        <button className="w-full bg-[#004d40] hover:bg-[#003d33] text-white flex items-center justify-center gap-3 py-4 px-6 rounded-lg shadow-lg border-2 border-green-500/30 transition-all group">
                            <div className="bg-[#25D366] p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                                <MessageCircle size={32} fill="white" />
                            </div>
                            <div className="text-left">
                                <span className="block font-black text-xl uppercase leading-none tracking-tighter">CLIQUE AQUI E</span>
                                <span className="block font-black text-xl uppercase leading-none tracking-tighter text-[#25D366]">ACESSE O GRUPO</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
