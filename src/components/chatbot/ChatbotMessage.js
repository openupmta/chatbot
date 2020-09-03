import React, {Component} from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/actions/chat';
import { talkToWatson } from '../../store/actions/watson';

class ChatbotMessage extends Component {
    constructor (props) {
        super(props)
        this.sendInputMessage = this.sendInputMessage.bind(this);
        this.props.talkToWatson('inicio', '');
    }

    sendInputMessage (e) {
        if (e.keyCode === 13) {
            console.log(e.target.value);
            
            const message = {
                text: e.target.value,
                author: 'user'
            };

            let context = {};
            if (this.props.response.data && this.props.response.data.context) {
                context = this.props.response.data.context;
            }

            this.props.sendMessage(message);
            this.props.talkToWatson(message, context);

            // Clear input
            e.target.value = '';
        }
    }

    render () {
        return(
            <div className='chatbot-message'>
                <hr />
                <InputGroup>
                    <Input onKeyDown={this.sendInputMessage} placeholder='Nhập vào đây ' />
                    <InputGroupAddon addonType='append'>
                        <Button onClick={this.sendInputMessage}> 
                            Gửi 
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message)),
        talkToWatson: (message, context) => dispatch(talkToWatson(message, context))
    }
}

const mapStateToProps = (state) => {
    return {
        response: state.watson.response
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotMessage);