import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export default function VideoReveal() {
    // const location = useLocation();
    // Pass state through to the final revealed page if needed, or back to generated
    // const { lottery, quantity } = location.state || {}; // Unused now

    useEffect(() => {
        // Embed the Vturb script dynamically
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/694c994c87bdd2a5aeada9d3/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Cleanup if necessary, though usually safe to leave script header
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-black items-center justify-center p-4">

            <div className="w-full max-w-[400px]">
                {/* Vturb Element */}
                <vturb-smartplayer
                    id="vid-694c994c87bdd2a5aeada9d3"
                    style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
                ></vturb-smartplayer>
            </div>

            {/* Simulated 'Continue' button for testing flow - User didn't ask for this explicitly yet but needed to escape the video page usually */}
            {/* The video likely has a button inside it or appears after time. For now I will just show the video page. 
                If the user wants to auto-redirect after video, we need to listen to Vturb events. 
                For now, I'll add a hidden or subtle way to proceed for dev testing, or just leave it as a video page.
            */}

        </div>
    );
}

// Add TypeScript declaration for custom element if needed to avoid TS errors
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { id?: string };
        }
    }
}
