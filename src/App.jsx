import { Post } from "./post"
import { Header } from "./components/Header"
import styles from './App.module.css'

import './global.css'

export function App() {


  return (
    <div>

      <Header />

      <div className={styles.wrapper}></div>
      <aside></aside>
      <main>
        <h1>oi</h1>
      </main>


    </div>
  )
}


