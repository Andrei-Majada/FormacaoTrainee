import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";

import "./style.css";

export default class ListNotes extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="lista-notas_item">
                            <CardNote
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
