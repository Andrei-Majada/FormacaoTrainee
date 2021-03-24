import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function Form({ createNote }) {
    const [id] = useState(0);
    const [description, setDescription] = useState("");
    const [status] = useState("In Process...");
    const [done] = useState(false);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createNote(id, description, status, done);
            }}
        >
            <TextField
                id="outlined-basic"
                label="Tarefa"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button type="submit" variant="outlined" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default Form;
