"use client";
import styles from "./page.module.css";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "@/components/Chat";
import Help from "@/components/Help";

interface User{
  id: String | number;
  roomId: String | number;
  userName: String;
}

interface Users {
  users: [ User ];
}

export default function Home() {
  const [showApp, setShowApp] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  var socket: any;
  socket = io("http://localhost:3001");

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      socket.emit("join_room", roomId, userName);
      setShowSpinner(true);
      // You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowApp(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  useEffect(() => {
    socket.on("user_joined", (data: User[]) => {
      console.log(data);
      setUsers(data);
    });
  }, [socket]);

  return (
    <div>
      <div
        className={styles.main_div}
        style={{ display: showApp ? "none" : "" }}
      >
        <img className="h-24" src="https://careers.dwp.gov.uk/wp-content/themes/dwp/library/images/dwp-digital-logo.png?x90798" />
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button className="btn btn-primary" onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div className={styles.loading_spinner}></div>
          )}
        </button>
      </div>


      <div style={{ display: !showApp ? "none" : "" }}>
        <div className="container">
          <div className="m-6 hidden"><img className="w-24 h-24" src="https://careers.dwp.gov.uk/wp-content/themes/dwp/library/images/dwp-digital-logo.png?x90798" /></div>
        </div>

        <div className="flex flex-row">
          <div className="basis-full">
            <div id="log" className="m-4">
            {users.map(({ userName, roomId }, key) => (
              <p>{userName}</p>

            ))}

            </div>
          </div>
        </div>

        <div className="flex flex-row">


          <Help />
          <Chat socket={socket} roomId={roomId} username={userName} />

          <div className="basis-2/4">
            <div className="m-4 rounded p-2 shadow-xl border border-2 border-black-300">
              <div className="bg-primary p-2 rounded shadow text-center">
                <p className="text-xl text-white mx-4">Agenda </p>
              </div>
              <div className="p-4 text-xl">
                Hello
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center"><small className="p-4 text-gray-400">RoomId: {roomId}</small></div>
    </div>
  );
}