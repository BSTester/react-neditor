import AsyncExample from './AsyncExample'
import EditorRefExample from './EditorRefExample'
import ExtendControlsExample from './ExtendControlsExample'
import PasteImageExample from './PasteImageExample'
import MediaExample from './MediaExample'
import SimpleExample from './SimpleExample'
import PluginExample from './PluginExample'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

const style = {
  title: {
    paddingLeft: '10px',
    margin: '15px 0',
    textAlign: 'center',
  },
  page: {
    width: '100%',
  },
  pageLeft: {
    float: 'left',
    width: '20%',
    margin: '0 20px 0 10px',
    overflow: 'hidden',
  },
  pageRight: {
    overflow: 'auto',
    padding: '10px',
    width: '1080px',
  },
  navbar: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'right',
  },
  navbarItem: {
    marginBottom: '10px',
  },
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={style.page}>
          <h1 style={style.title}>react-neditor demo</h1>
          <section style={style.pageLeft}>
            <ul style={style.navbar}>
              <li style={style.navbarItem}>
                <NavLink to='/' exact activeStyle={{color: 'red'}}>简单示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/async-example/' activeStyle={{color: 'red'}}>异步获取数据示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/media-example/' activeStyle={{color: 'red'}}>上传资源示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/editor-ref-example/' activeStyle={{color: 'red'}}>获取 neditor ref 示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/extend-controls-example/' activeStyle={{color: 'red'}}>扩展工具栏示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/paste-image-example/' activeStyle={{color: 'red'}}>复制图片上传示例</NavLink>
              </li>
              <li style={style.navbarItem}>
                <NavLink to='/plugin-example/' activeStyle={{color: 'red'}}>插件示例</NavLink>
              </li>
            </ul>
          </section>
          <section style={style.pageRight}>
            <Switch>
              <Route path='/' exact component={SimpleExample} />
              <Route path='/async-example/' component={AsyncExample} />
              <Route path='/media-example/' component={MediaExample} />
              <Route path='/editor-ref-example/' component={EditorRefExample} />
              <Route path='/extend-controls-example/' component={ExtendControlsExample} />
              <Route path='/paste-image-example/' component={PasteImageExample} />
              <Route path='/plugin-example/' component={PluginExample} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
