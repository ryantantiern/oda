import React from 'react';
import './style/App.css';
import { QrScanner } from './components/qr/QrScanner';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qrUploaded: false
    }
    this.qrScannerOnChange = this.qrScannerOnChange.bind(this)
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  qrScannerOnChange = (image) => {
    console.log("I've received an image")
    this.setState({qrUploaded: true})
  }

  render() {
    return (
      <div>
        <QrScanner onChange={this.qrScannerOnChange}/>
        {this.state.qrUploaded && <SubmitButton />}
      </div>
    );
  }
}

function SubmitButton(pros) {
  return <button>
    This is a submit button
  </button>
}

export default App;
