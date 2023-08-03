import React from "react";
import { saveAs } from "file-saver";
import Annem from '../resume.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Grid';


export default function DownloadPDF() {
    const saveFile = () => {
        saveAs(
            Annem,
            "Veera Bhanu Prakash Reddy Annem.pdf"
        );
    };
    return (
        <Grid container spacing={2}>
            <Grid item align='right' xs={12}>
                <Button  sx={{textTransform:"capitalize",fontFamily:"cursive"}} onClick={saveFile} variant="contained" endIcon={<DownloadIcon />}>resume</Button>
            </Grid>
        </Grid>
    );
}