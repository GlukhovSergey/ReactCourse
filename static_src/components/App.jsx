import React from 'react';
import Message from './Message';

const messageChoices = ['Привет', 'Здравствуйте', 'Здорова', 'Доброго здоровьица', 'Здрасте'];

export default class App extends React.Component {
    state = {
        messageList: [1, 2],
        messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
        nextId: 3,
    };

    componentDidUpdate(prevProps, prevState) {
        const { nextId, messages, messageList } = this.state;
        const lastSender = messages[nextId - 1].sender;
        if (lastSender === 'me' && messageList.length > prevState.messageList.length ) {
            setTimeout(() => this.sendMessage('Отстань, я робот!', 'bot'), 500)
        }
    }

    sendMessage = (text, sender) => {
        const { messageList, messages, nextId } = this.state;
        if (sender === 'me') {
            text = messageChoices[Math.floor(Math.random() * messageChoices.length)];
        }
        console.log(sender);
        this.setState({
            messageList: [ ...messageList, nextId],
            messages: { ...messages, [nextId]: { text, sender } },
            input: '',
            nextId: nextId + 1,
        })
    };

    render() {
        const { messages, messageList} = this.state;
        const messageElements = messageList.map((messageId, index) =>
            <Message key={ index } text={ messages[messageId].text } />);
        return (
            <div>
                <h1>App</h1>
                { messageElements }
                <button onClick={ () => this.sendMessage('', 'me') }>sendMessage</button>
            </div>
        )
    }
}