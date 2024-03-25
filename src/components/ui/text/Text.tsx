import React from 'react';
import styles from './Text.module.css';

import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva(
    styles.base, {
        variants: {
            textColor: {
                white: styles.white,
                black: styles.black,
            },
            align: {
                left: styles.left,
                center: styles.center,
            }
        }
    }
)

export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement>, React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
    isTitle?: boolean;
    isSubtitle?: boolean;
    isParagraph?: boolean;
    text: string;
    highlighted?: boolean;
}

export default function Button({ 
    className,
    textColor,
    align,
    ...props
}: TextProps) {
    if (props.isTitle)return <h1 className={`${textVariants({ textColor, align, className })} ${props.highlighted ? styles.highlighted : ''}  ${props.isTitle ? styles.title : ''} ${props.isSubtitle ? styles.subtitle : ''} ${props.isParagraph ? styles.paragraph : ''}`} {...props}>{props.text}</h1>
    else if (props.isSubtitle) return <h2 className={`${textVariants({ textColor, align, className })} ${props.highlighted ? styles.highlighted : ''} ${props.isTitle ? styles.title : ''} ${props.isSubtitle ? styles.subtitle : ''} ${props.isParagraph ? styles.paragraph : ''}`} {...props}>{props.text}</h2>
    else if (props.isParagraph) return <p className={`${textVariants({ textColor, align, className })} ${props.highlighted ? styles.highlighted : ''} ${props.isTitle ? styles.title : ''} ${props.isSubtitle ? styles.subtitle : ''} ${props.isParagraph ? styles.paragraph : ''}`} {...props}>{props.text}</p>
}
