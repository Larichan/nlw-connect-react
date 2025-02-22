import Image from "next/image";

import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";
import copper from "../../assets/medal-cooper.svg";

export function Ranking() {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 font-heading text-xl font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4 relative">
                <div className="relative bg-gray-700 border-gray-600 p-6 flex flex-col justify-center rounded-xl gap-3">
                    <span className="text-gray-300 text-sm leading-none">
                        <span className="font-semibold">1º</span> |
                        Larissa Noronha
                    </span>

                    <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
                        10
                    </span>

                    <Image className="absolute top-0 right-8" src={gold} alt='medal-gold' />
                </div>

                <div className="relative bg-gray-700 border-gray-600 p-6 flex flex-col justify-center rounded-xl gap-3">
                    <span className="text-gray-300 text-sm leading-none">
                        <span className="font-semibold">2º</span> |
                        Lucas Dantas
                    </span>

                    <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
                        5
                    </span>

                    <Image className="absolute top-0 right-8" src={silver} alt='medal-silver' />
                </div>

                <div className="relative bg-gray-700 border-gray-600 p-6 flex flex-col justify-center rounded-xl gap-3">
                    <span className="text-gray-300 text-sm leading-none">
                        <span className="font-semibold">3º</span> |
                        Hanako-kun
                    </span>

                    <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
                        3
                    </span>

                    <Image className="absolute top-0 right-8" src={copper} alt='medal-copper' />
                </div>
            </div>
        </div>
    )
}