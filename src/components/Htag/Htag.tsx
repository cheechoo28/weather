import React from 'react';
import {IHtagProps} from "./Htag.props";
import styles from "./Htag.module.scss"

export const Htag = ({children, tag}: IHtagProps) => {
    switch (tag) {
        case "h1": {
            return <h1 className={styles.h1}>{children}</h1>
        }
        case "h2": {
            return <h1 className={styles.h2}> {children}</h1>
        }
        default: return <></>
    }
};