import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {hasError: false};
    }

    componentDidCatch(error,info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>Please try again.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;