import React, { Component } from "react";

import "./style.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleChangeTitle(e) {
        e.stopPropagation();
        this.titulo = e.target.value;
    }

    _handleChangeText(e) {
        e.stopPropagation();
        this.texto = e.target.value;
    }

    _CreateCard(e) {
        e.preventDefault();
        this.props.createNote(this.titulo, this.texto);
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this._CreateCard.bind(this)}
            >
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="titulo"
                    onChange={this._handleChangeTitle.bind(this)}
                ></input>
                <textarea
                    className="form-cadastro_input"
                    placeholder="escreva sua nota"
                    rows={15}
                    onChange={this._handleChangeText.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}
