import React from "react";
import { Grid } from "@material-ui/core";
//importação de componentes e classes
import CardNote from "../CardNote/CardNote";

export default function ListNote({ tasks, checkDone }) {
    return (
        <Grid container spacing={2}>
            {tasks.map((task, index) => {
                return (
                    <Grid
                        item
                        key={index}
                        xs={12}
                    >
                        <CardNote
                            id={index}
                            checkDone={checkDone}
                            description={task.description}
                            status={task.status}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}
