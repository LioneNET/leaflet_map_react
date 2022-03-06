import ReactDOM from 'react-dom'
import './scss/style.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)