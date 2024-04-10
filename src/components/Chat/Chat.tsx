import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { NAVIGATION } from "../../constants/constants";
import Button from "../../UI/Button/Button";
import style from "./Chat.module.css";
import Message from "../Message/Message";
import { IMessage } from "../../types/types";
import Noisy from "../../assets/messageImages/Noisy.jpg";

interface Props {
  setCurrentNav: (nav: keyof typeof NAVIGATION) => void;
}

const Chat = ({ setCurrentNav }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<IMessage[]>([
    {
      name: "Бесячий ученик",
      text: `Здарова! Ну че там, мб скинешь мне ответы по истории? А то я и так все знаю же, в падлу вот это готовиться. Ну по-братски, скинь шпоры хотя бы`,
      isAnswer: true,
      avatar: Noisy,
    },
  ]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
  }, [messages]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (input) {
      setMessages((prev) => [...prev, { isAnswer: false, text: input }]);
    }

    setInput("");
    inputRef.current && inputRef.current.focus();
  };

  return (
    <section className={style.chat}>
      <div className={style.wrapper}>
        <div ref={chatRef} className={style.display}>
          {messages.map((message, i) => (
            <Message {...message} key={i} />
          ))}
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
