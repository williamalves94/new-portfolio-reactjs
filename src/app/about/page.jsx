import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-zinc-950 h-full">
        <Header title="Sobre" />
        <div className="p-4 border-2 border-blue-700">
          <div className="flex p-3 border-2 border-blue-50">
            <div className="border-2 border-red-600">
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
            <div className=" text-white border-2 border-red-300">
              <ul>
                <h1 className="text-2xl mt-5 mb-5">Informações Pessoais</h1>
                <li>Nome: William Alves</li>
                <li>Idade: 30</li>
                <li>Endereço: Sorocaba-SP, Brasil</li>
                <li>E-mail: williamcostacardoso94@gmail.com</li>
                <li>Telefone: +55 (15) 99778-1428</li>
              </ul>
              <Button
                className="bg-zinc-500 font-bold w-full"
                variant="outline"
              >
                Baixa CV
              </Button>
            </div>
          </div>
        </div>

        <div className="text-white bg-zinc-950 p-3">
          <h1 className="text-2xl">Principais competências</h1>
          <div>Javascript</div>
          <div>ReactJS</div>
          <div>NextJS</div>
          <div>Tailwind</div>
        </div>
      </div>
    </Layout>
  );
}
