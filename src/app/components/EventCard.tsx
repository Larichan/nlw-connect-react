'use client'

import { useRouter } from "next/navigation";

interface EventCardProps {
    prettyName: string;
    price: number;
    title: string;
}

export default function EventCard({ prettyName, title, price }: EventCardProps) {
    const { push } = useRouter();

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    };

    return (
        <div onClick={() => push(`http://localhost:3000/subscription/${prettyName}`)} className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl py-4 px-8 space-y-6 cursor-pointer">
            <div className="flex items-center justify-between">
                <h2 className='font-heading font-semibold text-gray-200 text-xl'>{title}</h2>
                <p>Preço: {formatCurrency(price)}</p>
            </div>
        </div>
    )
}