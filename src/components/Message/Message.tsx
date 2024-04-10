import { IMessage } from "../../types/types";
import style from "./Message.module.css";

const Message = ({ name, text, isAnswer, avatar }: IMessage) => {
  return (
    <div className={`${style.container} ${!isAnswer ? style.container_self : ""}`}>
      {isAnswer && <img src={avatar} className={style.avatar} />}
      <div className={style.box}>
        <p className={style.name}>{!isAnswer ? "Ольга Александровна" : name}</p>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
