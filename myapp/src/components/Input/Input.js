import {Component} from "react";
import React from 'react'



class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, 
            isLoaded: false, 
            items: {}
        };
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')

        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({
                isLoaded: true, 
                items: response})
            console.log(response)
                    
            }); 

     
        // (error) => {
        //     this.setState({
        //         isLoaded: true, 
        //         error 
        //     })
        // }
    
}    
render() {

    // const {error, items, isLoaded} = this.state  

    // if(error){
    //     return <div>Erro: {error.message}</div>
    // }else if(!isLoaded){
    //     return <div>Carregando...</div>
    // }else{
        return (
     
    //         <div> 
    //   {items.map(item => (
    //       <div>
    //           {item.srtDrink}

    //       </div>
    //   ))}
    //         </div>
    
    <h1>oioi</h1>
                     ); 
    //   }
    // }}
        }
}

export default Input
