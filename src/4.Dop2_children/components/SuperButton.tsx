import {ButtonHTMLAttributes} from "react";
import styles from "./SuperButton.module.css";

// type SuperButtonProps = {
//     onClick: () => void
//     color: string
//     title?: string
//     children: React.ReactNode;
//     color2: string
// };

type ColorProps = {
    color1?: string
    color2?: string
    color3?: string
    color4: string
    color5: string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    backgroundColor?: string
} & Omit<ColorProps, 'color4' | 'color5' >  // исключить пропсы  'color4' | 'color5'

export const SuperButton = (props: SuperButtonProps) => {

    const {color, children, disabled} = props

    // const finalClassName =
    //     styles.button +
    //     (disabled
    //         ? " " + styles.disabled
    //         : color === "red"
    //             ? " " + styles.red
    //             : color === "secondary"
    //                 ? " " + styles.secondary
    //                 : " " + styles.default) +
    //     (className ? " " + className : "");

    // const finalClassName = styles.button + ' ' + styles.red

    // const finalClassName = `
    // ${styles.button}
    // ${color === 'red' ? styles.red : styles.secondary}
    // ${disabled ? styles.disabled : ''}
    // `
    const finalClassName = `
    ${styles.button}
    ${color === 'red' ? styles.red : color === 'secondary' ? styles.secondary : styles.default}
    ${disabled ? styles.disabled : ''}
    `

    return (

        <button

            className={finalClassName}
            //todo: {restProps} - передает все остащиеся не деструктурированные пропсы со значениями, если они передавались в родительской компоненте

        >{children}</button>

    );
};