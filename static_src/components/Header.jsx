import React from 'react';
import PropTypes from "prop-types";


export default class Header extends React.Component {
    static propTypes = {
        messagesCount: PropTypes.number.isRequired,
    };

    render() {
        return (
            <h1>Header (количество сообщений: {this.props.messagesCount})</h1>
        )
    }
}