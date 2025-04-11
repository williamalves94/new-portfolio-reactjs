import Header from "@/components/header/header";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-zinc-800 h-full">
        <Header title="Sobre Mim" />
        <div className="p-4">
          <div className="flex p-5">
            <div className="flex-1 p-5">
              <h1 className="text-white text-2xl mt-5 mb-5">
                Desenvolvedor Front-end
              </h1>
              <h1 className="text-white">
                Olá! Me chamo William, tenho 30 anos e sou Desenvolvedor Front-end focado em React,
                atualmente residindo em Sorocaba-SP. Estudo programação há cerca de 3 anos e meio e, nesse período,
                atuei como Desenvolvedor Front-end Júnior em três empresas, trabalhando com ReactJS.

                Tenho conhecimentos sólidos em JavaScript, React.js, Next.js, TypeScript e Tailwind css.
                Estou sempre em busca de evolução e, no momento, estou aprofundando meus conhecimentos em
                tecnologias Front-end e Back-end enquanto curso a formação Full Stack da RocketseatOne, da Rocketseat,
                com foco em desenvolvimento completo de aplicações. Essa jornada tem me proporcionado uma base sólida para,
                em breve, ampliar minha atuação também na área de Back-end.

                Meu principal objetivo no momento é contribuir com projetos como Desenvolvedor Front-end,
                aplicando minhas habilidades para criar interfaces modernas, performáticas e com ótima experiência para o usuário.
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
              <a href="/curriculo.pdf" download>
                <Button
                  className="bg-zinc-700 border-0 shadow-lg font-bold w-80 mt-4 hover:bg-zinc-800 hover:text-white"
                  variant="outline"
                >
                  Baixar CV
                </Button>
              </a>

            </div>
          </div>
        </div>

        <div className=" text-white bg-zinc-800 ms-14">
          <h1 className="text-2xl">Principais competências</h1>

          <div className="flex mt-2">
            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/react-logo-sf.png"
                alt="React.js Logo"
                className="w-10 object-contain"
              />
              <div className="mt-2 text-sm text-white">React.js</div>
            </div>

            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/js-logo.png"
                alt="Javascript Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Javascript</div>
            </div>

            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/ts-logo.png"
                alt="Typescript Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Typescript</div>
            </div>

            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/nextjs-logo.png"
                alt="Next.js Logo"
                className="w-10 rounded-xl object-contain"
              />
              <div className="mt-2 text-sm text-white">Next.js</div>
            </div>

            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/tailwind-logo.png"
                alt="Tailwind Logo"
                className="w-14 rounded-xl object-contain"
              />
              <div className="mt-3 text-sm text-white">Tailwind</div>
            </div>

            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/nodejs-logo.png"
                alt="React.js Logo"
                className="w-9 object-contain"
              />
              <div className="mt-2 text-sm text-white">Node.js</div>
            </div>
            <div className="bg-zinc-700 flex flex-col justify-center items-center text-center w-20 h-20 mt-5 me-5 shadow-lg rounded">
              <img
                src="/images/postgre.png"
                alt="React.js Logo"
                className="w-9 object-contain"
              />
              <div className="mt-2 text-sm text-white">Postgre</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
