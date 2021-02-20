import React, {Component} from 'react'
import FormContato from './../Form/FormContato'
class Header extends Component{
    render(){
        return(
            <div className="header">
                <div id="geral">Drinks</div>
                <div id="geral">Sobre nós</div>
                <div id="bonsDrinks">Bons Drinks</div>
                <div id="geral">Nosso Time</div>
                <div id="geral"><a href={FormContato}>Contato</a></div>
            </div>

        )
    }

}
export default Header