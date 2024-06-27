// ButtomContent.js
import React from "react";
import { ButtomStyled, StyledLink } from "./buttomStyled";

interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

const ButtomContent: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Component = to ? StyledLink : as || 'button';
    const componentProps = to ? { to } : href ? { href } : { onClick };

    return (
        <ButtomStyled as={Component} {...componentProps}>
            {label}
        </ButtomStyled>
    );
};

export default ButtomContent;
