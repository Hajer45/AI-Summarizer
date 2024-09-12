import Summary from "./components/Summary"
import Intro from "./components/Intro"
import "./App.css"
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Intro/>
        <Summary/>
      </div>
    </main>
  )
}

export default App