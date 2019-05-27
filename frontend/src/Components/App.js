import React, { Fragment, Component } from 'react'
import { Header, Footer } from './Layouts'
import Pages from './Pages'
import 'typeface-roboto'

export default class extends Component {
  render() {
    return <Fragment>
        <Header />
        <Pages />
        <Footer />
    </Fragment>
  }
}
