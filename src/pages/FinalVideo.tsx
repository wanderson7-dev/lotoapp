// @ts-nocheck
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FinalVideo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { lottery, quantity } = location.state || {};

    useEffect(() => {
        // Embed the Vturb script dynamically
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69520f6fba8707e946be0d37/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        // Logic for the display hidden elements
        const delaySeconds = 248; // 4min 8s

        const setupPlayer = () => {
            const player = document.querySelector("vturb-smartplayer");
            if (player) {
                player.addEventListener("player:ready", function () {
                    if (typeof player.displayHiddenElements === 'function') {
                        player.displayHiddenElements(delaySeconds, [".esconder"], {
                            persist: true
                        });
                    }
                });
            }
        };

        setupPlayer();

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const handleStart = () => {
        // This is the final step. Where should it go? 
        // Usually checkout. For now, we'll just alert or navigate to home.
        alert("Redirecionando para o checkout...");
        // navigate('/checkout', { state: { lottery, quantity } });
    };

    return (
        <div className="flex flex-col min-h-screen bg-black items-center justify-center p-4">

            <div className="w-full max-w-[400px] flex flex-col items-center gap-8">
                {/* Vturb Element */}
                {/* @ts-ignore */}
                <vturb-smartplayer
                    id="vid-69520f6fba8707e946be0d37"
                    style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
                ></vturb-smartplayer>

                {/* Hidden Button - Could be "Buy Now" */}
                <button
                    onClick={handleStart}
                    className="esconder w-full max-w-xs bg-[#28a745] hover:bg-[#218838] text-white text-lg font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(40,167,69,0.5)] transition-all active:scale-95 animate-bounce"
                >
                    Garantir a minha vaga
                </button>
            </div>


        </div>
    );
}
