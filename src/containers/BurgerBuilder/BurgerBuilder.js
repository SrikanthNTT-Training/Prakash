import React,{Component}from 'react';
import Burger from '../../components/Burger/Burger';
import Auxa from '../../hoc/Auxa';
class BurgerBuilder extends Component{
    //constructor(props){
    //state(props)
    //this.state ={...}
    //}
state={
    ingeradions:{
        salad:1,
        bacon:1,
        cheese:2,
        meat:2,
    }

    }
render(){
    return(
<Auxa>
    <Burger ingeradions={this.state.ingeradions}/>
    <div>Burger</div>
    <div>Build Controls</div>
</Auxa>
    );
}
}

export default BurgerBuilder;