import ListNotes from "./components/ListNotes/ListNotes";
import Form from "./components/Form/Form";
import { Component } from "react";

import "./assets/App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: [],
        };
    }

    createNote(titulo, texto) {
        const novaNota = {
            titulo,
            texto,
        };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoEstado = { notas: novoArrayNotas };
        this.setState(novoEstado);
    }

    deletarNota(index) {
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index, 1);
        this.setState({ notas: arrayNotas });
    }

    render() {
        return (
            <section className="conteudo">
                <Form createNote={this.createNote.bind(this)} />
                <main>
                    <listaCategorias />
                    <ListNotes
                        notas={this.state.notas}
                        apagarNota={this.deletarNota.bind(this)}
                    />
                </main>
            </section>
        );
    }
}
