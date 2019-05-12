import React from 'react';
import Message from './Message';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";


export default class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number,
        handleSendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = (text, sender) => {
        this.props.handleSendMessage(text, sender);
        this.setState({
            input: '',
        })
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'me');
        }
    };

    render() {
        const { messages, messageList } = this.props;
        const input = this.state.input;

        const messageElements = messageList.map((messageId, index) =>
            <Message key={ index } incTest={ this.incTest } text={ messages[messageId].text } />);

        return (
            <div>
                { messageElements }
                <TextField
                    style={{ margin: '5px' }}
                    onKeyUp={ this.handleKeyUp }
                    label="Name"
                    underlineStyle={{ color: 'red' }}
                    name="input"
                    value={ input }
                    onChange={ this.handleInput }
                    placeholder="Введите сообщение"
                />
                <FloatingActionButton
                    onClick={ () => this.handleSendMessage(input, 'me') }>
                    <ContentSend />
                </FloatingActionButton>
            </div>
        )
    }
}