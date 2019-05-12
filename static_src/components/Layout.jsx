import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/styles.scss'

export default class Layout extends React.Component {
    state = {
        messageList: [1, 2],
        messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
        nextId: 3,
    };

    componentDidUpdate(prevProps, prevState) {
        const { nextId, messages, messageList } = this.state;
        const lastSender = messages[nextId - 1].sender;
        if (lastSender === 'me' && messageList.length > prevState.messageList.length ) {
            setTimeout(() => this.handleSendMessage('Отстань, я робот!', 'bot'), 500)
        }
    }

    handleSendMessage = (text, sender) => {
        const { messageList, messages, nextId } = this.state;
        this.setState({
            messageList: [ ...messageList, nextId],
            messages: { ...messages, [nextId]: { text, sender } },
            nextId: nextId + 1,
        })
    };

    render() {
        return (
            [
                <Header key="header" messagesCount={ this.state.messageList.length } />,
                <div key="layout" className="layout">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField
                            messageList={this.state.messageList}
                            messages={this.state.messages}
                            nextId={this.state.nextId}
                            handleSendMessage={ this.handleSendMessage }
                        />
                    </div>
                </div>
            ]
        )
    }
}