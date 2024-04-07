import { ChangeEvent } from "react";
import { NAVIGATION } from "../../constants/constants";
import Button from "../../UI/Button/Button";
import style from "./Chat.module.css";

interface Props {
  setCurrentNav: (nav: keyof typeof NAVIGATION) => void;
}

const Chat = ({ setCurrentNav }: Props) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={style.chat}>
      <div className={style.display}></div>

      <form className={style.buttons} onSubmit={handleSubmit}>
        <input className={style.input} placeholder="Сообщение..." />
        <Button className={style.button} type="submit">
          Отправить сообщение
        </Button>
      </form>
    </section>
  );
};

export default Chat;
