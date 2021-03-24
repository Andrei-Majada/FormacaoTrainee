import React, { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";

//importação de componentes e classes
import Form from "./components/Form/Form";
import ListNote from "./components/ListNote/ListNote";
import "./assets/App.css";

export default function App(props) {
    const [tasks, setTasks] = useState([]);

    const createNote = (id, description, status, done) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                description,
                status,
                done,
            },
        ]);
    };

    const endTask = (index) => {
        let taskList = tasks;
        taskList[index].status = "Done ;)";
        taskList[index].done = true;
        setTasks([...tasks]);
    };

    return (
        <>
            <Container component="article" maxWidth="sm">
                <Grid>
                    <Grid item spacing={2}>
                        <Typography variant="h4" component="h1" align="center">
                            Memo Notes
                        </Typography>
                    </Grid>
                    <Grid item spacing={2}>
                        <Form createNote={createNote} />
                    </Grid>
                    <Grid item spacing={2}>
                        <ListNote tasks={tasks} checkDone={endTask} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
