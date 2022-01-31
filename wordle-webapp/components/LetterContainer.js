import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';

export default function VariantAvatars(props) {
  return (
      <Avatar sx={{ bgcolor: green[500] }} variant="square" style={{fontSize: "100px", width: "200px", height : "200px"}}>
        {props.letter}
      </Avatar>
  );
}