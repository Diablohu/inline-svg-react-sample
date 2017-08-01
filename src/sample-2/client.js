import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            size: 64,
            fill: '#880000'
        }
    }
    render() {
        return (
            <div>
                <p>
                    Size: {this.state.size} <input type="range" min="0" max="128" defaultValue={this.state.size} onChange={evt => {
                        this.setState({
                            size: evt.target.value
                        })
                    }} />
                    <br />
                    Color: {this.state.fill} <input type="color" defaultValue={this.state.fill} onChange={evt => {
                        this.setState({
                            fill: evt.target.value
                        })
                    }} />
                </p>
                <Icon icon="mic4" size={this.state.size} fill={this.state.fill} />
                <Icon icon="anchor" size={this.state.size} fill={this.state.fill} />
                <Icon icon="loop" size={this.state.size} fill={this.state.fill} />
                <Icon icon="menu" size={this.state.size} fill={this.state.fill} />
                <Icon icon="checkbox-checked" size={this.state.size} fill={this.state.fill} />
            </div>
        )
    }
}

class Icon extends React.Component {
    render() {
        const styles = {}
        if (this.props.size) {
            styles.width = `${this.props.size}px`
            styles.height = `${this.props.size}px`
        }
        if (this.props.fill) {
            styles.fill = this.props.fill
        }
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className={this.props.className}
                style={styles}
            >
                <use xlinkHref={'#icon-' + this.props.icon}></use>
            </svg>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
