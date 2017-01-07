import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './_root'
import './index.styl'

const Root = () => {
    return (
        <AppContainer>
            <App />
        </AppContainer>
    )
}

const mountEle = document.getElementById('root')

ReactDOM.render(<Root />, mountEle)

if (module.hot) {
    module.hot.accept("./_root", () => {
    const NextApp = require("./_root").default;
    ReactDOM.render(
        <AppContainer>
            <NextApp/>
        </AppContainer>
      ,
      mountEle
    )
  })
}
