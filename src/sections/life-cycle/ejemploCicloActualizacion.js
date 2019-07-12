import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALES_IMAGES = {
    panda: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHipp2JVAPu_NzeVOssHsRkYVzdqDEmpbN_Pn9Ui61ij520cO7A',
    cat: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
    dolphin: 'https://cdn.britannica.com/s:300x500/88/188088-131-4D4BB503.jpg',
}

const ANIMALS = Object.keys(ANIMALES_IMAGES);

class AnimalImage extends Component {
    state = { src: ANIMALES_IMAGES[this.props.animal] }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: ', nextProps);
        this.setState({ src: ANIMALES_IMAGES[nextProps.animal] });
    }

    render() {
        console.log('AnimalImage render');
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                >
                </img>
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

// AnimalImage.defaultProps = {
//     animal: 'panda'
// }

class EjemploCicloActualizacion extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
        return (
            <button
                disabled={animal === this.state.animal}
                key={animal}
                onClick={() => this.setState({ animal })}
            >
                {animal}
            </button>
        )
    }

    render() {
        return (
            <div>
                <h4>Ciclo de Actualización, ejemplo de: ComponentWillRecieveProps</h4>
                {/* {Object.keys(ANIMALES_IMAGES).map(this._renderAnimalButton)} */}
                {ANIMALS.map(this._renderAnimalButton)}
                {/* {this._renderAnimalButton('panda')}
                {this._renderAnimalButton('cat')}
                {this._renderAnimalButton('dolphin')} */}
                <AnimalImage animal={this.state.animal}></AnimalImage>
            </div>
        )
    }
}

export default EjemploCicloActualizacion;