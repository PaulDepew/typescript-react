import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';

interface Props {
  title: string
}

interface Message {
  createdAt: string;
  text: string
}

interface MessageArchive {
  data: Message[]
}

const Messages: React.FunctionComponent<Props> = (props: Props) => {

const [input, setInput] = React.useState('');
const [messages, setMessages] = React.useState<MessageArchive>({data: []})
const [socket, setSocket] = React.useState<any>(null)

React.useEffect((): void => {
  let socketClient: SocketIOClient.Socket = SocketIOClient('http://localhost:3000');

  socket.on('message', (results: Message[])=> {
    setMessages({data: results});
  });
  setSocket(socketClient);

}, []);

const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
  const {value} = event.currentTarget;
  setInput(value);
}

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();


  const payload: Message = {
    createdAt: `${new Date}`,
    text: input
  };

  socket.emit('message', payload);
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInput} />
      <button>Send Message!</button>
    </form>
    <ul>
      {messages.data.map((data: Message) => {
        <li>
          <h4>{data.text}</h4>
          <p>{data.createdAt}</p>
        </li>
      })}
    </ul>
  </>
)


}

export default Messages;