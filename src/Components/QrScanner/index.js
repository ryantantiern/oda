import React, { Fragment } from 'react'
import { Button } from '@material-ui/core';

export default ({ onChange }) => 
  <Fragment>
    <input
        id="raised-button"
        accept="image/*"
        type="file"
        style={{display: 'none'}}
        onChange={(e) => onChange(e.target.files)}
    />
    <label htmlFor="raised-button">
        <Button variant="contained" component="span" style={{padding: 20, marginTop: 10, marginBottom: 10}}>
          Upload
        </Button>
    </label>
  </Fragment>


