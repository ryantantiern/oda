import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import QrScanner from '../QrScanner'

const styles = {
    Paper: {
        padding: 20
    },
    QrScanner: {
      height: 300,
      width: 300,
      margin: 20
    }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qrCodeFound: false
    }
    this.handleScan = this.handleScan.bind(this)
    this.handlerError = this.handlerScanError.bind(this)
  }

  handleScan = (data) => {
    if (data) {
      this.setState({
        qrCodeFound: true
      })
      // do some validation on the data
    }
  }

  handlerScanError = (err) => {
    console.error(err)
  }

  render() {
    return(      
      <Grid container direction='column' alignItems='center' >
        <Grid item style={styles.QrScanner}>
          {!this.state.qrCodeFound && 
            <QrScanner
              onScan={this.handleScan}
              onError={this.handlerScanError}
             />
          }
        </Grid>
      </Grid>
    )
  }
}
