import React, { Component, PureComponent } from 'react';

//HERENCIA!
// class Button extends Component {
//     constructor(props) {
//         super(props)
//         this.borderColor = '#09f'
//     }
//     render() {
//         return (
//             <button
//                 style={{ borderColor: this.borderColor, display: 'block' }}
//             >
//                 {this.props.label}
//             </button>
//         )
//     }
// }

//Herencia
// class ButtonDanger extends Button {
//     constructor(props) {
//         super(props)
//         this.borderColor = 'red'
//     }
// }

// Herencia
// class ButtonWithLegend extends Button {
//     render(){
//         return(
//             <div>
//                 {super.render()}
//                 <small>{this.props.legend}</small>
//             </div>
//         )
//     }
// }


//Component
class Button extends Component {
    render() {
        return (
            <button
                style={{ borderColor: this.props.borderColor, display: 'block' }}
            >
                {this.props.label}
            </button>
        )
    }
}

Button.defaultProps = {
    borderColor: '#09f'
}

class ButtonDanger extends Component {
    render() {
        return <Button
            borderColor='red'
            label={this.props.label}
        ></Button>
    }
}

class ButtonWithLegend extends Component {
    render() {
        return (
            <div>
                <Button
                    borderColor={this.props.borderColor}
                    label={this.props.label}
                ></Button>
                <small>{this.props.legend}</small>
            </div>
        )
    }
}

class ComponentVSHerencia extends Component {
    render() {
        return (
            <div>
                <h4>Siempre evitar la Herencia!, ocupar la Composición para React</h4>
                <Button label='Click AQUI!'></Button>
                <br></br>
                <ButtonDanger label='Cuidado!'></ButtonDanger>
                <br></br>
                <ButtonWithLegend
                    label='Boton con explicación'
                    legend='Clickea para hacer algo'
                ></ButtonWithLegend>
            </div>
        )
    }
}

export default ComponentVSHerencia;