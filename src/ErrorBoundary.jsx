import React from "react";
import LoadingError from "./LoadingError";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <LoadingError />;
    }
    return this.props.children;
  }
}
