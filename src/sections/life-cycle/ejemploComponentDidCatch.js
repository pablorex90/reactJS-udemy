import React, { Component, PureComponent } from 'react';

class BotonLanzaError extends Component {
    state = { throwError: false }

    render() {
        if (this.state.throwError) {
            throw new Error('error lanzado por el boton');
        }

        return (
            <button
                onClick={() => this.setState({ throwError: true })}
            >
                Lanza Error!
            </button>
        )
    }
}

class EjemploComponentDidCatch extends Component {
    state = { hasError: false, errorMsg: '' }

    componentDidCatch(error, errorInfo) {
        console.log('EjemploComponentDidCatch', error, errorInfo);
        this.setState({ hasError: true, errorMsg: error.toString() });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>ejemplo Error!</p>
                    <p>Error en el componente {this.state.errorMsg}</p>
                    <button
                        onClick={() => { this.setState({ hasError: false }) }}
                    >
                        Volver a la aplicación
                    </button>
                </div>
            )
        }
        return (
            <div>
                <h4>Ciclo de montaje: componentDidCatch</h4>
                <BotonLanzaError></BotonLanzaError>
            </div>
        )
    }
}

export default EjemploComponentDidCatch;