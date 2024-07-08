import React, { useState, useEffect } from 'react';
import {
    OutlinedInput, Box, Container, InputLabel, InputAdornment, Grid, FormControl, FormHelperText,
} from "@mui/material";

const Optimization = ({ onCoverageChange,ondurationChange }) => {
    const [duration, setDuration] = useState('');
    const [coverage, setCoverage] = useState('');

    useEffect(() => {
        onCoverageChange(coverage);
        ondurationChange(duration);
    }, [duration, coverage, onCoverageChange, ondurationChange]);

    useEffect(() => {
        const storedInputData = localStorage.getItem('inputData');
        if (storedInputData) {
            const parsedInputData = JSON.parse(storedInputData);
            if (parsedInputData) {
                if (parsedInputData.minCoverage) setCoverage(parsedInputData.minCoverage);
                if (parsedInputData.durationData) setDuration(parsedInputData.durationData);
            }
        }
    }, []);

    return (
        <Container>
            <Box sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off">
                <InputLabel><b>Optimization Parameters:</b></InputLabel>
                <Grid container spacing={2}>
                    <Grid item>
                        <FormControl>
                            <OutlinedInput
                                placeholder="Duration"
                                required
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                endAdornment={<InputAdornment position="end">Hours</InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <OutlinedInput
                                type="number"
                                placeholder="Minimum Coverage"
                                value={coverage}
                                onChange={(e) => setCoverage(e.target.value)}
                                required
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                            />
                            <FormHelperText>Minimum coverage for Recon Location</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Optimization;