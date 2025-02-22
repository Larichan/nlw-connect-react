import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { SubsLinkInput } from "./subs-link-input";

export default function SubscriptionPage() {
    const subscriptionLink = "http:coder.com.br/event-coder-2025/3509";

    return (
        <div
        className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row"
      >
        <div className="flex flex-col gap-10 w-full max-w-[550px]">
            <Image src={logo} alt='devCoder' width={108.5} height={30} />

            <div className="space-y-2">
                <h1 className="text-gray-100 font-heading text-4xl leading-none font-semibold">Inscrição confirmada!</h1>
                <p className="text-gray-300">Para entrar no evento, acesse o link enviado para o seu e-mail.</p>
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="font-heading text-gray-200 text-xl font-semibold leading-none">Indique e Ganhe</h2>
                    <p className="text-gray-300">
                        Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:
                    </p>
                </div>

                <SubsLinkInput subscriptionLink={subscriptionLink} />

                <Stats />
            </div>
        </div>
        
        <Ranking />
      </div>
    );
}