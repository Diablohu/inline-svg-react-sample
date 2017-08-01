import React from 'react'
import ReactDOM from 'react-dom'
import SVGInline from "react-svg-inline"

class App extends React.Component {
    constructor(){
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
                <Icon icon="cog" size={this.state.size} fill={this.state.fill} />
                <Icon icon="hanger" size={this.state.size} fill={this.state.fill} />
                <Icon icon="search" size={this.state.size} fill={this.state.fill} />
            </div>
        )
    }
}

class Icon extends React.Component {
    render() {
        return (
            <SVGInline
                className={this.props.className || "icon"}
                classSuffix={this.props.classSuffix || ""}
                width={(this.props.width || this.props.size || 16) + "px"}
                height={(this.props.height || this.props.size || 16) + "px"}
                fill={this.props.fill}
                style={this.props.style}
                svg={require(`raw-loader!./icons/${this.props.icon}.svg`)}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
