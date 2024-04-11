import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { CHAT_OPPONENT, NOISY_MESSAGE } from "../../constants/constants";
import Button from "../../UI/Button/Button";
import style from "./Chat.module.css";
import Message from "../Message/Message";
import { IMessage } from "../../types/types";
import { getAnswer } from "../../utils/utils";
import Tip from "../../assets/icons/Tip.svg?react";

const Chat = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [chatStatus, setChatStatus] = useState<keyof typeof CHAT_OPPONENT>(CHAT_OPPONENT.NOISY_GUY);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    setTimeout(() => setMessages([NOISY_MESSAGE]), 1500);
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setInput("");
    if (chatStatus === CHAT_OPPONENT.DONE) return;

    if (input) {
      setMessages((prev) => [...prev, { isAnswer: false, text: input }]);
      getAnswer({ input, chatStatus, setChatStatus, setMessages });
    }

    inputRef.current && inputRef.current.focus();
  };

  return (
    <section className={style.chat}>
      <div className={style.wrapper}>
        <div ref={chatRef} className={style.display}>
          {messages.map((message, i) => (
            <Message {...message} key={i} />
          ))}
          {chatStatus === CHAT_OPPONENT.DONE && (
            <div className={style.imgBox}>
              <Tip />
            </div>
          )}
        </div>
      </div>

      <form className={style.buttons} onSubmit={handleSubmit}>
        <input ref={inputRef} className={style.input} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Сообщение..." />
        <Button className={style.button} type="submit">
          Отправить сообщение
        </Button>
      </form>
    </section>
  );
};

export default Chat;
