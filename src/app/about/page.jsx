import Header from "@/components/header/header";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-zinc-900 h-full">
        <Header title="Sobre Mim" />
        <div className="p-4">
          <div className="flex p-5">
            <div className="flex-1 p-5">
              <h1 className="text-white text-2xl mt-5 mb-5">
                Desenvolvedor Front-end
              </h1>
              <h1 className="text-white">
                Olá! Sou William, tenho 29 anos, atualmente morando em
                Sorocaba-SP. Sou desenvolvedor Front-end focado em React, estou
                estudando programação há 2 anos e meio e nesse período trabalhei
                em duas empresas como Desenvolvedor Front-end Junior ReactJS. No
                momento estou estudando JavaScript, ReactJS e NodeJS, e
                futuramente pretendo ampliar ainda mais meus conhecimentos em
                Tecnologias e Frameworks voltadas para o Back-end, e no momento
                meu principal objetivo é voltar para o mercado de trabalho como
                Desenvolvedor Front-end ReactJS.
              </h1>
            </div>
            <div className="flex-2 text-white p-5">
              <ul>
                <h1 className="text-2xl mt-5 mb-5">Informações Pessoais</h1>
                <li className="mb-2">Nome: William Alves</li>
                <li className="mb-2">Idade: 30</li>
                <li className="mb-2">Endereço: Sorocaba-SP, Brasil</li>
                <li className="mb-2">
                  E-mail: williamcostacardoso94@gmail.com
                </li>
                <li>Telefone: +55 (15) 99778-1428</li>
              </ul>
              <Button
                className="bg-zinc-700 border-0 shadow-lg font-bold w-80 mt-4 hover:bg-zinc-800 hover:text-white"
                variant="outline"
              >
                Baixar CV
              </Button>
            </div>
          </div>
        </div>

        <div className=" text-white bg-zinc-900 ms-14">
          <h1 className="text-2xl">Principais competências</h1>

          <div className="flex mt-2">
            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/react-logo-sf.png"
                alt="React.js Logo"
                className="w-10 object-contain"
              />
              <div className="mt-2 text-sm text-white">React.js</div>
            </div>

            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/js-logo.png"
                alt="Javascript Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Javascript</div>
            </div>

            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/ts-logo.png"
                alt="Typescript Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Typescript</div>
            </div>

            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/nextjs-logo.png"
                alt="Next.js Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Next.js</div>
            </div>

            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/tailwind-logo.png"
                alt="Tailwind Logo"
                className="w-14 rounded-xl object-contain"
              />
              <div className="mt-3 text-sm text-white">Tailwind</div>
            </div>

            <div className="bg-zinc-800 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/nodejs-logo.png"
                alt="React.js Logo"
                className="w-9 object-contain"
              />
              <div className="mt-2 text-sm text-white">Node.js</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
