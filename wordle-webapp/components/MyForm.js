import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function MyForm(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label="Basic example"
            value={props.date}
            onChange={(newValue) => {
                props.setDate(newValue);
                props.setSlNum(0);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.slNum}
          onChange={(e) => {
            props.setSlNum(e.target.value);
            props.setDate(null);
        }}
        />
      </div>
    </Box>
  );
}
