import { Component } from "react";

import "./styles.css";

export class Button extends Component {
  render() {
    const { text, onclick, disabled } = this.props;
    return (
      <button disabled={disabled} className="btn" onClick={onclick}>
        {text}
      </button>
    );
  }
}
