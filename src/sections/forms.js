import React, { Component } from 'react';

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log('Forms handleclick: ', { name, email });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit: ',this.state);
    }

    handleChange = (e) => {
        console.log('init handleChange');
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked});
    }

    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                            onChange={e=> this.setState({inputName: e.target.value})}
                        ></input>
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'
                            value={this.state.inputTwitter}
                            onChange={e=> this.setState({inputTwitter: e.target.value})}
                        ></input>
                    </p>
                    <p>
                        <label>
                            <input 
                            type='checkbox'
                            checked={this.state.inputTerms}
                            onChange={this.handleChange}
                            ></input>
                            Accepted terms
                        </label>
                    </p>
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}