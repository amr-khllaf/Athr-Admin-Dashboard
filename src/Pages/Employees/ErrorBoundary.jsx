import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  // Update state to trigger fallback UI when an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Catch and log errors for debugging
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Optionally log the error to an external service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="p-4 text-red-600">
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
          {/* Optionally display error details for debugging (in development) */}
          {process.env.NODE_ENV === "development" && (
            <details>
              <summary>Error Details</summary>
              <p>{this.state.error?.toString()}</p>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
