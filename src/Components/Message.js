const Message = (props) => {
    return(
        <div className="message">
            <h1>
                {props.author}
            </h1>
            <p>
                {props.text}
            </p>
            <br/>
        </div>
    )
}

export default Message