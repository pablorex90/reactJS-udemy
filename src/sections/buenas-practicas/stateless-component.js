import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types'

function Article(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p><em>Escrito por {props.author}</em></p>
            <date>{props.date}</date>
            <article>
                {props.children}
            </article>
        </section>
    )
}

const Button = ({ borderColor = 'blue', label }) => (
    <button
        style={{ borderColor, display: 'block' }}
    >
        {label}
    </button>
)

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
}

Button.propTypes = {
    borderColor: PropTypes.string,
    label: PropTypes.string.isRequired
}

// Button.defaultProps = {
//     borderColor: 'blue'
// }

class StatelessComponent extends Component {
    render() {
        return (
            <div>
                <h4>Stateless Component</h4>
                <Article
                    author='Pablo Salazar'
                    title='titulo articulo'
                    date={new Date().toLocaleDateString()}
                >
                    <p>El contenido que envolvemos dentro del componente Article sera enviado</p>
                    <strong>Y mantiene las etiquetas que hayaís añadido dentro</strong>
                </Article>
                <br></br>
                <Button
                    label='Click AQUI!'
                ></Button>
            </div>
        )
    }
}

export default StatelessComponent;