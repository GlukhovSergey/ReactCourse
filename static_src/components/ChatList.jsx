import React from 'react';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    render() {
        return (
            <div style={{ border: '2px black' }}>
                <List>
                    <ListItem
                        primaryText="Собеседник1"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Собеседник2"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Собеседник3"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Собеседник4"
                        rightIcon={<CommunicationChatBubble />}
                    />
                </List>
            </div>
        )
    }
}