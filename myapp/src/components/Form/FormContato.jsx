
import React, {Component} from 'react'
import imgContato from '../../img/contato.jpg'

class Form extends Component {
    render(){
        return (
                <div class="container">
                    <div>
                        <img src={imgContato} id="imageBackground" /> <br/>
                    </div>
                    <div>
                        <label for="name"> Nome: </label><br/> 
                        <input type="text" name="nome" />  <br/>
                        <label for="email"> Email: </label> <br/>
                        <input type="text" name="email" /> <br /> 
                        <label for="mensagem">Mensagem</label>  <br/> 
                        <textarea name="mensagem"></textarea>
                    </div>
                </div>
        )

    }
}
export default Form