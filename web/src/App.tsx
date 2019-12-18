import React from 'react'
import { HashRouter, Route, Link, Switch, withRouter } from 'react-router-dom'
import styles from './App.scss'
import cs from 'classnames'
import Icon from '@/components/icon'
const TopRoutes: Array<{ to: string, export: React.FunctionComponent | React.ComponentClass, name: string }> = []
const files = (require as any).context('./pages', true, /^\.\/[A-Za-z]+\//)
files.keys().forEach((path: string) => {
  if (/^\.\/[A-Za-z]+\/$/.test(path) && files(path + 'index.tsx')) {
    const match = path.match(/[A-Za-z]+/)
    const module = files(path)
    TopRoutes.push({
      to: '/' + (match && match[0] || 'home'),
      export: module.default,
      name: module.LinkName
    })
  }

});

const NavList = withRouter(props => {
  const { location } = props;
  return (
    <ul className={styles.navList}>
      {
        TopRoutes.map(({ name, to }) => {
          return (
            <li className={cs(styles.navLink, { [styles.currentLink]: new RegExp(to).test(location.pathname) })} key={name}>
              <Link to={to}><span>{name}</span></Link>
            </li>
          )
        })
      }
    </ul>
  )
})

export default () => (
  <HashRouter>
    <div className={styles.pageContainer}>
      <div className={styles.leftNavContainer}>
        <div className={styles.navHeader}>
          <h2 className={styles.navTitle}>导航栏<small><Icon type='icongithubalt'/></small></h2>
          <NavList />
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

