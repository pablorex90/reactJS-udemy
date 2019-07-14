import React, { Component, PureComponent } from 'react';

class ComponenteADesmontar extends Component {
    state = { windowWidth: 0 }

    _updateStateWithWindowWidth = () => {
        console.log('_updateStateWithWindowWidth');
        this.setState({ windowWidth: document.body.clientWidth });
    }

    componentDidMount() {
        console.log('componentDidMount');
        this._updateStateWithWindowWidth();
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        );
    }

    render() {
        console.log('ComponenteADesmontar render');
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}

class EjemploComponentWillUnmount extends Component {
    state = { mostrarComponente: true };
    render() {
        console.log('EjemploComponentWillUnmount render');
        if (this.state.mostrarComponente) {
            return (
                <div className='App'>
                    <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                    <ComponenteADesmontar></ComponenteADesmontar>
                    <button
                        onClick={() => this.setState({ mostrarComponente: false })}
                    >
                        Desmontar componente
                    </button>
                </div>
            )
        }
        return (
            <p>Componente desmontado</p>
        )
    }
}

export default EjemploComponentWillUnmount;