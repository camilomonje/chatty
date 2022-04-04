import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { ref,  push, get } from "firebase/database";
import { useAuth } from "../context/authContext";

export default function Chat() {
    const {user} = useAuth()

  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loadingChats, setLoadingChats] = useState(true);

  function getChats() {
    setError(null); 

    get(ref(db, "chats"))
      .then((snapshot) => {
        if (snapshot.exists()) {
    
          console.log(Object.values(snapshot.val()));
          setChats(Object.values(snapshot.val()));
        }
      })
      .catch((error) => {
        alert("error " + error);
      });
  }

  const handleOnChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      return;
    }


    push(ref(db, "chats"), {
      content: content,
      timestamp: Date.now(),
      uid: user.uid,
    })
      .then((a) => {
        setContent("");
      })
      .catch((error) => {
        alert("error: " + error);
      });
      getChats();
  };

  useEffect(() => {
    setLoadingChats(false);
    getChats();
  }, []);

  return (
    <div className="chat">
      <div className="chat-area">
        {loadingChats ? (
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading chat...</span>
          </div>
        ) : (
          ""
        )}
        {/* chat area */}
        {chats&&chats.map((chat) => {
          return (
            <p
              key={chat.timestamp}
              className={
                "chat-bubble " + (user.uid === chat.uid ? "current-user" : "")
              }
            >
              <br />
              {chat.content}
              <br />
              <span className="chat-time float-right">
                {(chat.timestamp)}
              </span>
            </p>
          );
        })}
      </div>
      <div className="py-5 mx-3">
        Login in as: <strong className="text-info">{user.email}</strong>
      </div>
      <form onSubmit={handleSubmit} className="mx-3">
        <textarea
          className="form-control"
          name="content"
          onChange={handleOnChange}
          value={content}
        ></textarea>
        {error ? <p className="text-danger">{error}</p> : null}
        <button className="btn btn-primary px-3 mt-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
