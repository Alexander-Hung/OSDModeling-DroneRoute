import React, { useState, useEffect } from 'react';
import {
  OutlinedInput, Box, Container, InputLabel, InputAdornment, Grid, FormControl, FormHelperText,
} from "@mui/material";

const Coordinate = ({ onCoordinateChange }) => {
  const [baseCoord, setBaseCoord] = useState({ lat: '', long: '' });
  //Add recon options with number order
  const [reconCoord, setReconCoord] = useState({ lat: '', long: '' });
  const [size, setSize] = useState('');

  useEffect(() => {
    onCoordinateChange({ baseCoord, reconCoord, size});
  }, [baseCoord, reconCoord, size, onCoordinateChange]);

  useEffect(() => {
    const storedInputData = localStorage.getItem('inputData');
    if (storedInputData) {
      const parsedInputData = JSON.parse(storedInputData);
      if (parsedInputData) {
        if (parsedInputData.coordData){
          setBaseCoord(parsedInputData.coordData.baseCoord);
          setReconCoord(parsedInputData.coordData.reconCoord);
        }
        if (parsedInputData.coordData.size) setSize(parsedInputData.coordData.size);
      }
    }
  }, []);

  return (
    <Container>
      <Box sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off">
        <InputLabel><b>Base Location Coordinates:</b></InputLabel>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl>
              <OutlinedInput
                placeholder="Latitude"
                required
                value={baseCoord.lat}
                onChange={(e) => setBaseCoord({ ...baseCoord, lat: e.target.value })}
                endAdornment={<InputAdornment position="end">N°</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <OutlinedInput
                placeholder="Longitude"
                required
                value={baseCoord.long}
                onChange={(e) => setBaseCoord({ ...baseCoord, long: e.target.value })}
                endAdornment={<InputAdornment position="end">E°</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>

        <InputLabel><b>Recon Location Coordinates:</b></InputLabel>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl>
              <OutlinedInput
                placeholder="Latitude"
                required
                value={reconCoord.lat}
                onChange={(e) => setReconCoord({ ...reconCoord, lat: e.target.value })}
                endAdornment={<InputAdornment position="end">N°</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <OutlinedInput
                placeholder="Longitude"
                required
                value={reconCoord.long}
                onChange={(e) => setReconCoord({ ...reconCoord, long: e.target.value })}
                endAdornment={<InputAdornment position="end">E°</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <OutlinedInput
                placeholder="Size"
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
                endAdornment={<InputAdornment position="end">km²</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Coordinate;