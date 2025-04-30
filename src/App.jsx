import { Post } from "./post"
import { Header } from "./components/Header"

import './styles.css'

export function App() {


  return (
    <div>

      <Header />

      <Post author="Leandro" content="Lorem ipsum dolor sit amet" />
      <Post author="Fulano" content="novo post aqui mano" />


    </div>
  )
}


