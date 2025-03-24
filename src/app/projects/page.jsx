import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";
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
      <div className="h-screen bg-zinc-200 overflow-hidden">
        <Header title="Projetos" />

        <div className="h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-14 place-items-center">
            <Card className="w-[300px] bg-zinc-700 shadow-lg">
              <CardHeader className="p-2">
                <Image
                  src="/images/capa.jpg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
                />
                <CardTitle>Titulo do projeto</CardTitle>
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

            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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

            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
            <Card className="shadow-lg w-[300px]">
              <CardHeader className="p-2">
                <Image
                  src="/images/akaza.jpeg" // Caminho da sua imagem
                  alt="Descrição da imagem"
                  width={300}
                  height={200}
                  className="rounded-t-lg" // Classes de estilo para bordas arredondadas
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
