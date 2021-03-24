import React, { Component } from "react";

import "./style.css";
import { ReactComponent as DeleteIcon } from "../../assets/img/deleteIcon.svg";

export default class CardNote extends Component {
    apagar() {
        this.props.apagarNota(this.props.indice);
    }

    render() {
        return (
            <section className="card-note">
                <header className="card-note_cabecalho">
                    <h3 className="card-note_texto">{this.props.titulo}</h3>
                    <DeleteIcon onClick={this.apagar.bind(this)} />
                </header>
                <p className="card-note_titulo">{this.props.texto}</p>
            </section>
        );
    }
}
