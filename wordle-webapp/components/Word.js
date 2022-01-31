import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import LetterContainer from './LetterContainer';

export default function MyWord(props) {
  return (
    <Stack direction="row" spacing={2}>
        <LetterContainer letter={props.a}/>
        <LetterContainer letter={props.b}/>
        <LetterContainer letter={props.c}/>
        <LetterContainer letter={props.d}/>
        <LetterContainer letter={props.e}/>
    </Stack>
  );
}