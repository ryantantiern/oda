import React from 'react'

export function QrScanner(props) {
    return <input className="QrScanner-form-control" type="file" onChange={props.onChange}/>
}
