import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ContainerProps {
  isDark?: boolean;
  children: ReactNode;
  nome: string;
}

interface NewsProps {
  titulo: string;
  tempo: string;
  treding: string;
  texto: string;
  imagem: string;
}

function Container(props: ContainerProps) {
  return (
    <div
      className={clsx("w-90 rounded-xl p-3", {
        "text-black bg-dark-8 ": !props.isDark,
        "text-white bg-dark-2": props.isDark,
      })}
    >
      <div>
        <h2 className="font-bold text-lg mb-2">{props.nome}</h2>
        {props.children}
        <a className="block pt-3 text-xs font-medium text-primary-blue" href="./404">
          Show more
        </a>
      </div>
    </div>
  );
}

function News(props: NewsProps) {
  return (
    <div className="border-y border-solid border-dark-7 font-medium py-4">
      <div className="text-dark-5 text-xss font-medium">
        <span className="mr-2">{props.titulo}</span>
        <span>{props.tempo}</span>
      </div>
      <div className="flex ">
        <p className="text-xs font-bold mr-3">{props.texto}</p>
        <img
          className="relative bottom-3 w-24 rounded-lg"
          src={props.imagem}
          alt="Imagem Noticia"
        />
      </div>
      <div className="text-dark-5 text-xss font-medium">
        <span className="mr-2">Trending with</span>
        <span className=" text-primary-blue">{props.treding}</span>
      </div>
    </div>
  );
}

export const NewsItems = {
  root: Container,
  news: News,
};
