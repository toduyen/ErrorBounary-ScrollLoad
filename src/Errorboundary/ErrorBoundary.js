import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
        error: error,
        errorInfo : errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return <React.Fragment>
          <pre>{this.state.error}</pre>
          <pre>{this.state.errorInfo}</pre>
      </React.Fragment>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
