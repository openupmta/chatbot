import React, {Component} from 'react';

import './chatbot/chatbot.css';
import ChatbotHeader  from './chatbot/ChatbotHeader';
import ChatbotDialog from './chatbot/ChatbotDialog';
import ChatbotMessage from './chatbot/ChatbotMessage';

class Chatbot extends Component {
    render() {
        return (
            <div className='chatbot'>
                <div className='chatbot-conteudo'>
                    <ChatbotHeader />
                    <ChatbotDialog />
                    <ChatbotMessage />
                </div>
            </div>
        )
    }
}

export default Chatbot;