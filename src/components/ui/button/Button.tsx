import React from 'react';
import styles from './Button.module.css';

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    styles.base, {
        variants: {
            variant:{
                dark: styles.dark,
                light: styles.light,
            },
            size: {
                small: styles.small,
                regular: styles.regular,
            }
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    hRef?: string,
    target?: string,
    text: string,
    type?: 'submit',
}

export default function Button({ 
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    if(props.hRef) return <a className={buttonVariants({ variant, size, className })} href={props.hRef} target={props.target}>{props.text}</a>
    else return <button className={buttonVariants({ variant, size, className })} {...props}>{props.text}</button>
}
