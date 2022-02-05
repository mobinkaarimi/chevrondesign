import React from 'react';
import ChevronListItem from "./chevronListItem";
import classes from './chevronList.module.scss'
const ChevronList = () => {
    let data = [{title: 'Money Transfer',description: 'Fill Details for send money',status: 'complete'},
        {title: 'Receiver Details',description: 'Fill details for receiver',status: 'complete'},
        {title: 'Complete your payment',description: 'scan qr code to view details',status: 'pending'}
    ]
    return (
        <div className={classes.chevronList}>
            {data.map((item,index) => <ChevronListItem key={index} data={item} /> )}



        </div>
    );
};

export default ChevronList;