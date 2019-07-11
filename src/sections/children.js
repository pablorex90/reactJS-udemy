import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
    render() {
        return (
            <div style={{border: '1px solid #09f', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }
    
    constructor(props) {
        super(props)
        if (typeof props.author === 'undefined') {
            console.warn('author prop is required');
            
        }
    }
    render() {
        const {author, title, date, children} = this.props;
        return(
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

export default class Children extends Component {
    render() {
        return (
            <div>
                <h4>Children props!</h4>
                <Box>Hola!, soy un children</Box>
                <Box>otro Box con otro contenido</Box>
                <Article
                date={new Date().toLocaleDateString()}
                title='Articulo sobre la prop children'
                >
                <p>El contenido que envolvemos dentro del componente Article sera enviado</p>
                <strong>Y mantiene las etiquetas que hayaís añadido dentro</strong>
                </Article>
                <Article
                author='Pablo Salazar'
                date={new Date().toLocaleDateString()}
                title='Articulo 2'
                >
                <p>El contenido que envolvemos dentro del componente Article sera enviado</p>
                <strong>Y mantiene las etiquetas que hayaís añadido dentro</strong>
                </Article>
                <Article
                author='Pablo Salazar'
                date={new Date().toLocaleDateString()}
                title='Articulo 3!!!'
                >
                <p>El contenido que envolvemos dentro del componente Article sera enviado</p>
                <strong>Y mantiene las etiquetas que hayaís añadido dentro</strong>
                </Article>
            </div>
        );
    }
}