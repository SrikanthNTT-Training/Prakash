import React from 'react';
import classes from './burgerIngeradion.css';

const burgerIngeradion = (props)=>{
    let Ingeradion = null;

    switch(props.type){
        case('bread-bottom'):
        Ingeradion=<div className={classes.BreadBottom}></div>;
    break;
    case('bread-top'):
    Ingeradion =(
        <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>

         </div>
    );
    break;
    case('meat'):
    <div className={classes.Meat}></div>;
    break;

    case('cheese'):
    <div className={classes.Cheese}></div>;
    break;
    case('bacon'):
    <div className={classes.Bacon}></div>;
    break;
    case('salad'):
    <div className={classes.Salad}></div>;
    break; 
    default:
        Ingeradion=null;
    }
    return Ingeradion;
};
export default burgerIngeradion;