import Header from "@/components/header/header";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import "./scrollbar-style.css";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="h-screen bg-zinc-800 overflow-hidden">
        <Header title="Projetos" />

        <div className="h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-14 place-items-center">

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa-refund.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle className="">Sistema de Reembolso</CardTitle>
                <CardDescription>
                  <a
                    href="https://github.com/williamalves94/refund-rocketseatone"
                    target="_blank"
                  >
                    Ver Código Fonte
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">
                  <a href=""></a>Saiba mais
                </button>
              </CardFooter>
            </Card>


            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/rick-and-morty-app.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Rick and Morty Web App</CardTitle>
                <CardDescription>
                  <a
                    href="https://github.com/williamalves94/rick-and-morty-web"
                    target="_blank"
                  >
                    Ver Código Fonte
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <a
                  href="https://azs-web-rickandmorty-green.vercel.app/"
                  target="_blank"
                  className="text-blue-500"
                >
                  <button>Saiba mais</button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/lotr-app.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>The Lord of The Rings Web Page</CardTitle>
                <CardDescription>
                  <a
                    href="https://github.com/williamalves94/website-lord-of-the-rings"
                    target="_blank"
                  >
                    Ver Código Fonte
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/first-portfolio.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Meu Primeiro Portfolio</CardTitle>
                <CardDescription>
                  <a
                    href="https://github.com/williamalves94/my-portfolio-react"
                    target="_blank"
                  >
                    Ver Código Fonte
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-xs bg-zinc-700 shadow-lg mx-auto mb-6">
              <CardHeader className="p-1">
                <Image
                  src="/images/capa.jpg"
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover object-center w-full h-[150px]"
                />
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
