import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";

export default function ExperiencesPage() {
  return (
    <Layout>
      <div>
        <Header title="Experiências" />
        <div className="border-t-yellow-400">
          <div>
            <h1>Desenvolvedor Front-end ReactJS Na PlugWin Sistemas</h1>
            <span>Meruoca, Ceará, Brasil</span>
            <p>
              Desenvolvi o Front-end do projeto utilizando HMTL, CSS e Bootstrap
              5.
            </p>
          </div>
          <div className="mt-5">
            <h1>
              Desenvolvedor Front-end Júnior ReactJS Na Bacic Commerce Serviços
              de Informações da Internet LTDA.
            </h1>
            <span>São Paulo, Brasil</span>
            <p>
              Desenvolvi as telas de interfaces do usuário, Requisição http e
              integração com API REST
            </p>
          </div>
          <div className="mt-5">
            <h1>
              Desenvolvedor Front-end Júnior ReactJS Na Bihands Tecnologia e
              Soluções RFID
            </h1>
          </div>
          <span>Sorocaba, São Paulo, Brasil</span>
          <p>
            Requisição HTTP, Integração com API usando Axios, e algumas
            alterações e correções no código do projeto.
          </p>
        </div>
      </div>
    </Layout>
  );
}
