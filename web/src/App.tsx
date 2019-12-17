import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import styles from './App.scss'
const TopRoutes: Array<{ to: string, export: React.FunctionComponent | React.ComponentClass, name: string }> = []
const files = (require as any).context('./pages', true, /^\.\/[A-Za-z]+\//)
files.keys().forEach((path: string) => {
  if (/^\.\/[A-Za-z]+\/$/.test(path) && files(path + 'index.tsx')) {
    const match = path.match(/[A-Za-z]+/)
    const module = files(path)
    console.log(match, path)
    TopRoutes.push({
      to: '/' + (match && match[0] || 'home'),
      export: module.default,
      name: module.LinkName
    })
  }

});
export default () => (
  <HashRouter>
    <div className={styles.pageContainer}>
      <div className={styles.leftNavContainer}>
        <div className={styles.navHeader}>
          <h2 className={styles.navTitle}>导航栏</h2>
          <ul>
            {
              TopRoutes.map(({ name, to }) => {
                return <li className={styles.navLink} key={name}><Link to={to}>{name}</Link></li>
              })
            }

          </ul>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Switch>
          {
            TopRoutes.map(cfg => {
              return <Route key={cfg.name} path={cfg.to} component={cfg.export}></Route>
            })
          }
        </Switch>
      </div>
    </div>
  </HashRouter>
)