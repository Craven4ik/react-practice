import Message from "./Message";
import {useState} from "react";

const Chat = () => {
    const [messageList, setMessageList] = useState([]);
    const [messageItem, setMessageItem] = useState({
        author: '',
        text: ''
    });

    return (
        <div>
            <MessageForm data={messageItem} setData={setMessageItem} setMessage={setMessageList}></MessageForm>
            <div>
                {messageList.map((e, id) => <Message key={id} author={e.author} text={e.text}></Message>)}
            </div>
        </div>
    )
}

export default Chat

const MessageForm = ({ data, setData, setMessage }) => {
    const { author, text } = data;

    const submitForm = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            setMessage(p => [...p, { author, text }])
        }
        setData({
            author: '',
            text: ''
        })
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text"
                   label="Name"
                   value={author}
                   placeholder="Имя"
                   onChange={(el) =>
                       setData(p => ({ ...p, author: el.target.value })
                       )} />
            <input type="text"
                   label="Message"
                   placeholder="Сообщение"
                   value={text}
                   onChange={(el) =>
                       setData(p => ({ ...p, text: el.target.value })
                       )} />
            <button type="submit">Отправить</button>
        </form >
    )
}