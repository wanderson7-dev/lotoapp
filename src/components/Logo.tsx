import { Clover } from 'lucide-react';

export function Logo() {
    return (
        <div className="flex items-center gap-3 select-none">
            <div className="bg-gradient-to-tr from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-sm flex items-center justify-center">
                <Clover size={22} className="text-white fill-white" strokeWidth={2.5} />
            </div>
            <span className="font-black text-2xl tracking-tight text-[#1a1a1a] font-sans">
                LOTOAPP
            </span>
        </div>
    );
}
