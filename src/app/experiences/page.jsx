import Header from "@/components/header/header";
import Layout from "@/components/layout/Layout";

export default function ExperiencesPage() {
  return (
    <Layout>
      <div className="bg-zinc-800 h-full">
        <Header title="Experiências" />
        <div className="pr-12 pl-12 pb-12">
          <div className="flex flex-col text-white mt-14 rounded-lg p-6 shadow-lg bg-zinc-700">
            <div className="flex ms-40">
              <div className="flex flex-col justify-between h-100 me-10 border-r-2 border-gray-600 pr-6">
                <span className="text-sm">10/2024</span>
                <span className="text-sm">07/2024</span>
              </div>
              <div>
                <h1 className="font-bold">
                  Desenvolvedor Front-end Na PlugWin Sistemas
                </h1>
                <span className="text-sm text-gray-300">
                  Meruoca, Ceará, Brasil
                </span>
                <p className="mt-1 text-sm">
                  Desenvolvi o front-end do projeto utilizando HTML, CSS e
                  Bootstrap 5,
                  <br /> implementando layouts responsivos e componentes
                  reutilizáveis, <br /> como menus interativos e formulários
                  otimizados para uma experiência de usuário fluida.
                </p>
              </div>
            </div>

            <div className="flex ms-40 mt-8">
              <div className="flex flex-col justify-between h-100 me-10 border-r-2 border-gray-600 pr-6">
                <span className="text-sm">07/2023</span>
                <span className="text-sm">08/2022</span>
              </div>
              <div>
                <h1 className="font-bold">
                  Desenvolvedor Front-end Júnior ReactJS Na Bacic Commerce
                  Serviços de Informações da Internet LTDA.
                </h1>
                <span className="text-sm text-gray-300">São Paulo, Brasil</span>
                <p className="text-sm">
                  Desenvolvi interfaces de usuário responsivas e dinâmicas,{" "}
                  <br />
                  implementei requisições HTTP e integrei APIs RESTful, <br />
                  garantindo uma comunicação eficiente entre o front end e o
                  back-end.
                </p>
              </div>
            </div>

            <div className="flex ms-40 mt-8">
              <div className="flex flex-col justify-between h-100 me-10 border-r-2 border-gray-600 pr-6">
                <span className="text-sm">06/2022</span>
                <span className="text-sm">01/2022</span>
              </div>
              <div>
                <h1 className="font-bold">
                  Desenvolvedor Front-end ReactJS Na PlugWin Sistemas
                </h1>
                <span className="text-sm text-gray-300">
                  Sorocaba, São Paulo, Brasil
                </span>
                <p className="text-sm">
                  Implementei requisições HTTP e integrei APIs REST com Axios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
