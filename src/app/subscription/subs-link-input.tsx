'use client'

import { Link, Copy } from "lucide-react";
import IconButton from "../components/IconButton";
import { InputRoot, InputIcon, InputField } from "../components/Input";
import { useState } from "react";
import PopupBaloon from "./popup-ballon";

interface SubsLinkInputProps {
    subscriptionLink: string;
}

export function SubsLinkInput({ subscriptionLink } : SubsLinkInputProps) {

    const [showPopup, setShowPopup] = useState(false);

    function togglePopup() {
        setShowPopup(true);

        setTimeout(() => {
            setTimeout(() => setShowPopup(false), 300);
        }, 3000);
    }

    function copyLink() {
        navigator.clipboard.writeText(subscriptionLink);
        togglePopup();
    }

    return (
        <div className="relative">
            <InputRoot>
                <InputIcon>
                    <Link className="size-5" />
                </InputIcon>
                <InputField defaultValue={subscriptionLink} readOnly />
                <IconButton className="-mr-2" onClick={copyLink}>
                    <Copy className="size-5" />
                </IconButton>
            </InputRoot>

            <PopupBaloon isVisible={showPopup} />
        </div>
    )
}