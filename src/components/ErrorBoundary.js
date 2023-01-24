import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ErrorComponent = () => {
    return <h1>Something went wrong :O</h1>
};

export function ErrorBoundary({children}) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setHasError(false)
    }, [location.key]);

    return (
        <ErrorBoundaryInner
            hasError={hasError}
            setHasError={setHasError}
        >
            {children}
        </ErrorBoundaryInner>
    )
}

class ErrorBoundaryInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    };

    componentDidUpdate(prevProps) {
        if (!this.props.hasError && prevProps.hasError) {
            this.setState({ hasError: false })
        };
    };

    componentDidCatch() {
        this.props.setHasError(true);
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <ErrorComponent /> : children;
    };
};


