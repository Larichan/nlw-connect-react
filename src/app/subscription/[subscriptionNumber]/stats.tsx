import { getRankingPositionByUser } from "@/http/eventApi";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface StatsProps {
    prettyName: string;
    userId: number;
}

export async function Stats({ prettyName, userId }: StatsProps) {
    const { item, position } = await getRankingPositionByUser(prettyName, userId);

    return (
        <div
            className="grid gap-3 md:grid-cols-3"
        >
            <div className="relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl gap-1">
                <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">0</span>
                <span className="text-gray-300 text-sm leading-none text-center">Acessos ao link</span>
                <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl gap-1">
                <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">{item?.subscribers}</span>
                <span className="text-gray-300 text-sm leading-none text-center">Inscrições feitas</span>
                <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center rounded-xl gap-1">
                <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">{position ? `${position}º` : '-'}</span>
                <span className="text-gray-300 text-sm leading-none text-center">Posição no ranking</span>
                <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
        </div>
    )
}