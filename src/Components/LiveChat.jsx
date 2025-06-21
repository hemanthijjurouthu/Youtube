import React, { useEffect,useState} from 'react';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateName, generateText } from './RandomName';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMessage,setLiveMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            //console.log("API POLLING");
            dispatch(addMessage({
                name: generateName(),
                text: generateText(20) + " 🚀",
            }));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="mt-2 bg-slate-100 w-[30rem] h-96 rounded-lg p-2 border border-l-black overflow-y-scroll flex flex-col-reverse">
                {chatMessages.map((message, index) => (
                    <ChatMessage key={index} name={message.name} text={message.text} />
                ))}
            </div>
            <div className="border border-black p-2 mt-2 h-12 w-[30rem]">
            {<form onSubmit={(e) => {
                e.preventDefault();
                console.log(liveMessage);
                dispatch(addMessage({
                    name : 'Ramakrishna',
                    text : liveMessage
                }))
                setLiveMessage("");
            }}>
                <input type="text" placeholder="Message" className="w-96 border border-blue-700 mr-2 h-8 p-2" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
                <button className="bg-green-500 p-1 text-white rounded-lg w-14">Send</button>
            </form>}
            </div>
        </>
    );
}

export default LiveChat;
