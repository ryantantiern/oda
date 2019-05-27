import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import QrScanner from '../QrScanner'

const styles = {
    Paper: {
        padding: 20
    }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = ({0: file}) => {
    // process QR code in back end
    if (file) console.log(file)
  }

  render() {
    return<div>        
            <Grid container direction='column' alignItems='center'> 
              <Grid item sm>
                <QrScanner onChange={this.handleChange}/>     
              </Grid>
            </Grid>    
          </div> 
  }
}


