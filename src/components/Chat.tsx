"use client"
import React, { useEffect, useState, useRef } from "react";
import style from "./chat.module.css";

interface IMsgDataTypes {
  roomId: String | number;
  user: String;
  msg: String;
  time: String;
}

const ChatPage = ({ socket, username, roomId }: any) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    console.log('Scrolling')
    messagesEndRef.current?.scrollIntoView();
  }

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };


  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
      scrollToBottom();
    });
  }, [socket]);


  return (
    <>
        <div className="basis-2/4">
          <div className="m-4 rounded p-2 shadow-xl border border-2 border-black-300">
            <div className="bg-primary p-2 rounded shadow text-center">
              <p className="text-xl text-white mx-4">Chat </p>
            </div>
            <div className="p-4 text-md ">
              <div className=" h-96 overflow-y-scroll pb-10">
                <div className={style.chat_border}>
                  {chat.map(({ roomId, user, msg, time }, key) => (
                    <div className={user == username ? "chat chat-end" : "chat chat-start"}>
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">

                          <span
                            className={style.chatProfileSpan}
                          >
                            {user.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="chat-header">
                        {user}
                        <time className="text-xs opacity-50"> {time}</time>
                      </div>

                      <div className={user == username ? "chat-bubble chat-bubble-primary" : "chat-bubble chat-bubble-secondary"}>{msg}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-20" ref={messagesEndRef} />
              </div>
              <div className="mt-4">
                <form onSubmit={(e) => sendData(e)}>
                <div className="join w-full">

                  <input
                    className="input input-bordered join-item w-full"
                    type="text"
                    value={currentMsg}
                    placeholder="Type your message.."
                    onChange={(e) => setCurrentMsg(e.target.value)}
                  />
                  <button className="btn btn-primary join-item rounded-r-full">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ChatPage;