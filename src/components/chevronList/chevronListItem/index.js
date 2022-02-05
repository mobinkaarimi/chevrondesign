import React from 'react';
import CheckIcon from '../../../assets/check.png';
import SpinnerIcon from '../../../assets/Spinner.svg';
import styles from './chevronListItem.module.scss';
const ChevronListItem = ({data}) => {
    console.log(data);
    return (
            <div className={`${styles.chevronItem} ${data.status == 'pending' ? styles.chevronItemActive : ''}`}>
                <div className={styles.chevronItemContent}>
                    <div className={styles.chevronItemContentText}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                    <div className={styles.chevronItemContentIcon}>
                        <img src={data.status == 'complete' ? CheckIcon : SpinnerIcon} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default ChevronListItem;