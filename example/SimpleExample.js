import React from 'react'
import ReactNeditor from '../src'

class SimpleExample extends React.Component {
  updateEditorContent = content => {
    this.content = content
  }

  render() {
    return (
      <ReactNeditor
        debug
        neditorPath='../neditor'
        onChange={this.updateEditorContent}
      />
    )
  }
}

export default SimpleExample
