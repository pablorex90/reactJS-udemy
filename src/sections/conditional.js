import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>;
    }
}
class LogoutButton extends Component {
    render() {
        return(
            <div>
                <p>Bienvenido Usuario!</p>
                <button>Cerrar sesión</button>
            </div>
        );
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { isUserLogged: false };
    }

    render() {
        return (
            <div>
                <h4>Conditional rendering</h4>
                {this.state.isUserLogged ?
                    <LogoutButton></LogoutButton>
                    : <LoginButton></LoginButton>}
            </div>
        )
    }
}

// function useConditionalRendering(mostrarA) {
//     if(mostrarA) {
//         return <ComponenteA></ComponenteA>
//     } else {
//         return <ComponenteB></ComponenteB>
//     }
// }