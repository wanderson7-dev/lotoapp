// @ts-nocheck
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Up1() {
    const navigate = useNavigate();

    useEffect(() => {
        // Embed the Vturb script dynamically
        const script = document.createElement("script");
        script.id = 'vturb-script-upsell';
        script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/6952aa7cacd48189f6939648/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        // Delay logic: 5 minutes and 35 seconds
        const delaySeconds = 335;

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

        // Cleanup script prevents double loading issues if navigating back and forth quickly
        return () => {
            // Optional: remove script if needed, but often better to leave it cached or handle specifically
        };
    }, []);


    const handleYes = () => {
        window.location.href = 'https://go.perfectpay.com.br/PPU38CQ5ANH?upsell=true';
    };

    const handleNo = () => {
        navigate('/dw-up1');
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Header Warning */}
            <div className="bg-[#ff0000] text-white text-center py-3 px-4 font-black text-sm md:text-base uppercase tracking-wide leading-tight">
                NÃO FECHE OU ATUALIZE ESSA PÁGINA ISSO PODE GERAR ERROS NA SUA COMPRA
            </div>

            <div className="flex-1 flex flex-col items-center pt-8 pb-12 px-4 max-w-md mx-auto w-full">

                {/* Video Container */}
                <div className="w-full mb-8 relative z-10">
                    <vturb-smartplayer
                        id="vid-6952aa7cacd48189f6939648"
                        style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
                    />
                </div>

                {/* Buttons container - controlled by Vturb */}
                <div className="esconder w-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
                    {/* Action Button */}
                    <button
                        onClick={handleYes}
                        className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3.5 px-6 rounded-[50px] text-lg shadow-lg mb-4 transform transition hover:scale-[1.02] active:scale-95 text-center"
                    >
                        Sim, Quero Aproveitar Essa Oportunidade
                    </button>

                    {/* No Thanks Link */}
                    <button
                        onClick={handleNo}
                        className="w-full text-black font-bold underline text-sm hover:text-gray-700 text-center"
                    >
                        Não, eu não quero aproveitar
                    </button>
                </div>
            </div>
        </div>
    );
}
