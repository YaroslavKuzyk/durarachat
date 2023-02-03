import { FC } from "react";

interface MessageProps{
    message: string,
    style: string
}

const Message: FC<MessageProps> = ({message, style}) => {
    return ( 
        <div className={"message message-" + style}>{message}</div>
     );
}
 
export default Message;