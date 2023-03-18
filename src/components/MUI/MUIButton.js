import * as React from 'react';
import Button from '@mui/material/Button';

function MUIButton(props) {
  let {name, type} = props;
  return <Button variant="contained">{name}</Button>;
}

export default MUIButton;