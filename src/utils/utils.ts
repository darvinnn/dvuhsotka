import { ADMIN, ADMIN_RIGHT, ADMIN_WRONG, CHAT_OPPONENT, DOLGOV, DOLGOV_FINAL, DOLGOV_RIGHT, MAXIM, MAXIM_ME, MAXIM_RIGHT, MAXIM_WRONG, NOISY_WRONG } from "../constants/constants";
import { IMessage } from "../types/types";
import { NOISY_RIGHT } from "../constants/constants";

interface Props {
  input: string;
  chatStatus: keyof typeof CHAT_OPPONENT;
  setChatStatus: (statatus: CHAT_OPPONENT) => void;
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export const getAnswer = ({ input, chatStatus, setChatStatus, setMessages }: Props) => {
  const answer = (message: IMessage, delay = 500) => setTimeout(() => setMessages((prev) => [...prev, message]), delay);
  const checkWords = (str: string, exp: RegExp) => exp.test(str.toLowerCase());

  switch (chatStatus) {
    case CHAT_OPPONENT.NOISY_GUY:
      if (checkWords(input, /(нахуй|похуй|поебать|ахуел|отъебись|отвянь|на хуй)/)) {
        answer(NOISY_RIGHT);
        answer(DOLGOV, 2000);
        setChatStatus(CHAT_OPPONENT.ARTEM_DOLGOV);
      } else answer(NOISY_WRONG);
      break;
    case CHAT_OPPONENT.ARTEM_DOLGOV:
      answer(DOLGOV_RIGHT);
      setChatStatus(CHAT_OPPONENT.ARTEM_DOLGOV_OK);
      break;
    case CHAT_OPPONENT.ARTEM_DOLGOV_OK:
      answer(DOLGOV_FINAL);
      answer(ADMIN, 1500);
      setChatStatus(CHAT_OPPONENT.ADMIN);
      break;
    case CHAT_OPPONENT.ADMIN:
      if (checkWords(input, /(ахуели|не буду|идите нахуй|пиздец|ахуеть|поахуевали|нахуй идите)/)) {
        answer(ADMIN_RIGHT);
        setChatStatus(CHAT_OPPONENT.MAXIM);
        answer(MAXIM, 2000);
      } else answer(ADMIN_WRONG);
      break;
    case CHAT_OPPONENT.MAXIM:
      if (input.toLocaleLowerCase() === "я" || input.toLocaleLowerCase() === "я)" || input.toLocaleLowerCase() === "я))" || input.toLocaleLowerCase() === "я)))") {
        answer(MAXIM_RIGHT);
        setTimeout(() => setChatStatus(CHAT_OPPONENT.DONE), 500);
      } else if (checkWords(input, /(ты|максим)/)) {
        answer(MAXIM_ME);
      } else answer(MAXIM_WRONG);
      break;
  }
};
