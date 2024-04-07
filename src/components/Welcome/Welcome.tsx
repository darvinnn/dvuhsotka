import { NAVIGATION } from "../../constants/constants";
import Button from "../../UI/Button/Button";
import style from "./Welcome.module.css";

interface Props {
  setCurrentNav: (nav: keyof typeof NAVIGATION) => void;
}

const Welcome = ({ setCurrentNav }: Props) => {
  return (
    <section className={style.welcome}>
      <p className={style.title}>Добро пожаловать!</p>
      <p className={style.caption}>Ольга Александровна, рады вас видеть!</p>

      <p className={style.note}>
        На ваше имя пришло большое количество сообщений и жалоб от пользователей нашего сервиса. Пожалуйста, разберитесь с ними. <br /> <br /> Мы немедленно соединим вас с первым клиентом, оставившим
        обращение. Как только вы с ним закончите и он останется доволен, сервис тут же подключит следующего клиента
      </p>
      <Button className={style.button} type="button" onClick={() => setCurrentNav(NAVIGATION.CHAT)}>
        Войти в систему
      </Button>
    </section>
  );
};

export default Welcome;
