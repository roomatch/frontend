import React from 'react';
import styles from './Button.module.css';

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    withReactRouter?: boolean,
}

export default function Button({ 
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    if (props.hRef) {
        if (props.withReactRouter) {
            return (
                <motion.div
                whileTap={{ scale: 0.9 }}
                >
                <Link to={props.hRef} className={buttonVariants({ variant, size, className })} target={props.target}>
                    {props.text}
                </Link>
                </motion.div>
            );
        }else{
            return (
                <motion.div
                whileTap={{ scale: 0.9 }}
                >
                <a className={buttonVariants({ variant, size, className })} href={props.hRef} target={props.target}>{props.text}</a>
                </motion.div>
            );
        }
    } else {
        return (
            <motion.div
            whileTap={{ scale: 0.9 }}
            >
            <button className={buttonVariants({ variant, size, className })} {...props}>{props.text}</button>
            </motion.div>
        );
    }
}
