'use client'

import { Link, Copy } from "lucide-react";
import IconButton from "../components/IconButton";
import { InputRoot, InputIcon, InputField } from "../components/Input";

interface SubsLinkInputProps {
    subscriptionLink: string;
}

export function SubsLinkInput({ subscriptionLink } : SubsLinkInputProps) {
    function copyLink() {
        navigator.clipboard.writeText(subscriptionLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>
            <InputField defaultValue={subscriptionLink} readOnly />
            <IconButton className="-mr-2" onClick={copyLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    )
}