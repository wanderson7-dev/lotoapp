// @ts-nocheck
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DwUp1() {
    useEffect(() => {
        // Embed the Vturb script dynamically
        const script = document.createElement("script");
        script.id = 'vturb-script-dw-upsell';
        script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/6952b208ed1852c895e1e8dd/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        // Delay logic: 1 minute and 43 seconds
        const delaySeconds = 103;

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


    const navigate = useNavigate();

    const handleYes = () => {
        window.location.href = 'https://go.perfectpay.com.br/PPU38CQ5AOT?upsell=true';
    };

    const handleNo = () => {
        navigate('/up2');
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            {/* Header Warning */}
            <div className="bg-[#ff1f1f] text-white text-center py-4 px-4 leading-tight">
                <div className="flex flex-col items-center justify-center font-bold text-sm md:text-base gap-1">
                    <div className="flex items-center gap-2 text-yellow-300 uppercase tracking-wide">
                        <span className="text-xl">⚠️</span>
                        <span>Você quase ficou de fora...</span>
                    </div>
                    <span className="max-w-xs md:max-w-none">
                        Mas conseguimos liberar uma última alternativa pra você.
                    </span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center pt-6 pb-12 px-4 max-w-md mx-auto w-full">

                {/* Video Container */}
                <div className="w-full mb-6 relative z-10">
                    <vturb-smartplayer
                        id="vid-6952b208ed1852c895e1e8dd"
                        style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
                    />
                </div>

                {/* Buttons container - controlled by Vturb */}
                <div className="esconder w-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
                    {/* Action Button */}
                    <button
                        onClick={handleYes}
                        className="w-full bg-[#138e67] hover:bg-[#0f7a58] text-white font-bold py-3.5 px-6 rounded-xl text-lg shadow-lg mb-6 transform transition hover:scale-[1.02] active:scale-95 text-center uppercase tracking-wide"
                    >
                        SIM, Eu quero aproveitar essa oportunidade
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
