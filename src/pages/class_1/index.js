import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    componentWillMount() {
        this.setState({ value: 2 });
        console.log(this.state.value);
        this.setState({ value: 3 });
        console.log(this.state.value);

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                我是生命周期
                {this.state.value}
            </div>
        );
    }
}

index.propTypes = {

};

export default index;