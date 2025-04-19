import Image from "next/image";

import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import copper from "../../../assets/medal-cooper.svg";
import { getFirstPlacesRanking } from "@/http/eventApi";

interface RankingProps {
    prettyName: string;
}

export async function Ranking({ prettyName }: RankingProps) {

    const ranking = await getFirstPlacesRanking(prettyName)

    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 font-heading text-xl font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4 relative">
                {ranking.map((item, index) => {

                    const rankingPosition = index + 1;

                    return (
                        <div key={item.userId} className="relative bg-gray-700 border-gray-600 p-6 flex flex-col justify-center rounded-xl gap-3">
                            <span className="text-gray-300 text-sm leading-none">
                                <span className="font-semibold">{rankingPosition}º</span> |
                                {item.userName}
                            </span>

                            <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
                                {item.subscribers}
                            </span>

                            {rankingPosition === 1 && <Image className="absolute top-0 right-8" src={gold} alt='medal-gold' />}
                            {rankingPosition === 2 && <Image className="absolute top-0 right-8" src={silver} alt='medal-silver' />}
                            {rankingPosition === 3 && <Image className="absolute top-0 right-8" src={copper} alt='medal-copper' />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}