import { Component } from "react";

export default class ImgComponent extends Component {
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt}/>
        )
    }
}