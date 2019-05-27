import React, { Fragment } from 'react'
import QrReader from 'react-qr-reader'

export default ({ onScan, onError }) => 
  <QrReader 
    delay={300}
    onScan={onScan}
    onError={onError}
    style={{width: '100%', height: '100%'}}
    />

  {/* <Fragment>
    <input
        id="qr-code"
        accept="image/*"
        type="file"
        style={{display: 'none'}}
        onChange={(e) => onChange(e.target)}
    />
    <label htmlFor="qr-code">
        <Button variant="contained" component="span" style={{padding: 20, marginTop: 10, marginBottom: 10}}>
          Upload
        </Button>
    </label>
  </Fragment> */}


