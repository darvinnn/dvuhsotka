import { ChangeEvent, KeyboardEvent, useState } from "react";
import style from "./Login.module.css";
import { NAVIGATION } from "../../constants/constants";
import Button from "../../UI/Button/Button";

interface Props {
  setCurrentNav: (nav: keyof typeof NAVIGATION) => void;
}

const Login = ({ setCurrentNav }: Props) => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "0" || e.key === "1") {
      setInput((prev) => prev + e.key);
    }
    if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, prev.length - 1));
    }
    if (e.key === "Delete") {
      setInput("");
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === "111100110011") {
      setCurrentNav(NAVIGATION.WELCOME);
    } else {
      setIsError(true);
    }
  };

  return (
    <section className={style.login}>
      <p className={style.title}>Здравствуйте!</p>
      <p className={style.caption}>Чтобы войти в личный кабинет, пожалуйста, введите уникальный код доступа преподавателя</p>

      <form onSubmit={handleSubmit}>
        <input className={style.input} value={input} onKeyDown={handleChange} onFocus={() => setIsError(false)} />
        <Button type="submit">Отправить</Button>
      </form>
      <p className={style.note}>*для повышения безопасности поле не принимает неправильные символы</p>
      {isError && <p className={`${style.error} ${style.note}`}>Код введен неверно. Попробуйте еще раз</p>}
    </section>
  );
};

export default Login;
