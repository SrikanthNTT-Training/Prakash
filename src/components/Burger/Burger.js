import React from 'react';
import classes from './burger.css';
import burgerIngeradion from './BurgerIngeradion/BugerIngeradion';


const burger=(props)=>{
let transformedIngeradions=object.keys(props.Ingeradion)
.map(igkeg=>{
return [...Array(props.Ingeradion[igkey])].map((_,i)=>{
return <burgerIngeradion key={igkeg+i} type ={igkeg}/>
});
})
.reduce((arr,el)=>{
    return arr.concat(el)
},[]);
if(transformedIngeradions===0){
    transformedIngeradions=<p>Please start adding Ingeradion!</p>

}
return(
    <div className={classes.Burger}>
        <burgerIngeradion type ="bread-top"/>
         {transformedIngeradions}
        <burgerIngeradion type ="bread-bottom"/>

        
    </div>
);
};