import * as React from 'react'
import { Loading, Switch, Alert } from './index'

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
                <Loading />
                <Alert msg="hello" type="success" cb={() => console.log('oh')} />
            </div>
        )
    }
}

export default Root