// These two containers are siblings in the DOM

import React, { Component, StrictMode }  from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById('portal-root');

class DispatcherPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}


export default DispatcherPortal;