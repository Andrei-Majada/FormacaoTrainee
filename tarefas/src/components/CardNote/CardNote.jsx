import React, { useState } from "react";
import {
    Typography,
    Card,
    CardActions,
    CardContent,
    Switch,
    makeStyles,
    FormControlLabel,
} from "@material-ui/core";

export default function CardNote({ checkDone, id, description, status }) {
    const taskDone = () => {
        checkDone(id);
    };

    const [finish, SetFinish] = useState(false);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    return (
        <>
            <Card raised className={useStyles.root}>
                <CardContent>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        className={useStyles.title}
                        variant="h5"
                    >
                        {id} • {description} • {status}
                    </Typography>
                </CardContent>
                <CardActions aria-label="finish">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={finish}
                                onChange={(e) => {
                                    SetFinish(e.target.checked);
                                    taskDone();
                                }}
                                name="finish"
                                color="primary"
                            />
                        }
                        label="Finalizar"
                    />
                </CardActions>
            </Card>
        </>
    );
}
