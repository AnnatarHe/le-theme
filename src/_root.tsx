import * as React from 'react'
import Alert from './components/alert/alert'
import Switch from './components/switch/index'

interface RootProps {

}

interface RootState {
    switchStatus: boolean
}

class Root extends React.PureComponent<RootProps, RootState> {
    constructor(props: RootProps) {
        super(props)
        this.state = {
            switchStatus: true
        }
    }

    render() {
        return (
            <div>
                <Switch
                    desc="hello"
                    onChange={e => this.setState({ switchStatus: !this.state.switchStatus })}
                    pos={this.state.switchStatus}
                    />
            </div>
        )
    }
}

export default Root