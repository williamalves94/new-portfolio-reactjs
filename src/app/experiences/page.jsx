import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";

export default function ExperiencesPage() {
  return (
    <Layout>
      <div className="bg-zinc-800 h-full">
        <Header title="Experiências" />
        <div className="border-yellow-400 border-2 flex flex-col text-white mt-10">
          <div className="flex ms-40">
            <div className="flex flex-col">
              <span>Outubro/2024</span>
              <span>Julho/2024</span>
            </div>
            <div>
              <h1>Desenvolvedor Front-end ReactJS Na PlugWin Sistemas</h1>
              <span>Meruoca, Ceará, Brasil</span>
              <p>
                Desenvolvi o Front-end do projeto utilizando HMTL, CSS e
                Bootstrap 5.
              </p>
            </div>
          </div>
          <div className="flex ms-40">
            <div className="flex flex-col">
              <span>Outubro/2024</span>
              <span>Julho/2024</span>
            </div>
            <div>
              <h1>
                Desenvolvedor Front-end Júnior ReactJS Na Bacic Commerce
                Serviços de Informações da Internet LTDA.
              </h1>
              <span>Meruoca, Ceará, Brasil</span>
              <p>
                Desenvolvi o Front-end do projeto utilizando HMTL, CSS e
                Bootstrap 5.
              </p>
            </div>
          </div>
          <div className="flex ms-40">
            <div className="flex flex-col">
              <span>Outubro/2024</span>
              <span>Julho/2024</span>
            </div>
            <div>
              <h1>Desenvolvedor Front-end ReactJS Na PlugWin Sistemas</h1>
              <span>Meruoca, Ceará, Brasil</span>
              <p>
                Desenvolvi o Front-end do projeto utilizando HMTL, CSS e
                Bootstrap 5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
