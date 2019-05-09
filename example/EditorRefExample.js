import React from 'react'
import ReactNeditor from '../src'

class EditorRefExample extends React.Component {
  constructor() {
    super()
    this.ueditorRef = null
    this.state = {
      content: '',
    }
  }

  getUeditor = ref => {
    this.ueditorRef = ref
  }

  getUeditorContent = ref => {
    this.setState({
      content: this.ueditorRef.getContent(),
    })
  }

  handleReady = () => {
    this.ueditorRef.setHeight(200)
  }

  render() {
    let {content} = this.state

    return (
      <div>
        <ReactNeditor
          debug
          neditorPath='../neditor'
          getRef={this.getUeditor}
          onChange={this.updateEditorContent}
          onReady={this.handleReady}
        />
        <button onClick={this.getUeditorContent}>获取内容</button>
        <p>{content}</p>
      </div>
    )
  }
}

export default EditorRefExample
