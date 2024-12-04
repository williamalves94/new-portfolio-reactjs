import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-zinc-950 h-full">
        <Header title="Sobre" />
        <div className="p-4 border-2 border-blue-700">
          <div className="flex p-5 border-2 border-blue-50">
            <div className="flex-1 border-2 border-red-600 p-5">
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
            <div className="flex-1 text-white border-2 border-red-300 p-5">
              <ul>
                <h1 className="text-2xl mt-5 mb-5">Informações Pessoais</h1>
                <li>Nome: William Alves</li>
                <li>Idade: 30</li>
                <li>Endereço: Sorocaba-SP, Brasil</li>
                <li>E-mail: williamcostacardoso94@gmail.com</li>
                <li>Telefone: +55 (15) 99778-1428</li>
              </ul>
              <Button
                className="bg-yellow-400 font-bold w-80 mt-4"
                variant="outline"
              >
                Baixa CV
              </Button>
            </div>
          </div>
        </div>

        <div className=" text-white bg-zinc-950 p-3">
          <h1 className="text-2xl">Principais competências</h1>

          <div className="flex">
            <div className="flex-col justify-center items-center text-center w-20 h-20 border-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 800 800"
                className="w-full h-full transform translate3d-0 content-visible"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <clipPath id="__lottie_element_1367">
                    <rect width="800" height="800" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_1367)">
                  <g
                    transform="matrix(1.04627,0,0,1.08478,407,397)"
                    opacity="1"
                    className="block"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.89823,0,0,0.86077,-7.277,-10.078)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(4,165,208)"
                        strokeOpacity="1"
                        strokeWidth="24"
                        d="M-182.528,66.49 C-223.603,49.022 -248.723,25.657 -248.723,0 C-248.722,-54.043 -137.27,-97.922 0,-97.922 C0,-97.922 0,-97.922 0,-97.922 C137.27,-97.922 248.723,-54.043 248.723,0 C248.723,54.043 137.27,97.922 0,97.922 C-72.102,97.922 -137.082,85.816 -182.528,66.49"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.52408,-0.90555,0.93888,0.54337,413,385)"
                    opacity="1"
                    className="block"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.89823,0,0,0.86077,-7.277,-10.078)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(4,165,208)"
                        strokeOpacity="1"
                        strokeWidth="24"
                        d="M-180.423,-67.374 C-135.086,-86.185 -70.996,-97.922 0,-97.922 C0,-97.922 0,-97.922 0,-97.922 C137.27,-97.922 248.723,-54.043 248.723,0 C248.723,54.043 137.27,97.922 0,97.922 C-137.27,97.922 -248.723,54.043 -248.723,0 C-248.723,-26.092 -222.743,-49.815 -180.423,-67.374"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(-0.5317,-0.9011,0.93426,-0.55127,406,375)"
                    opacity="1"
                    className="block"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.89823,0,0,0.86077,-6.277,-10.078)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(4,165,208)"
                        strokeOpacity="1"
                        strokeWidth="24"
                        d="M-107.942,-88.23 C-75.286,-94.44 -38.667,-97.922 0,-97.922 C0,-97.922 0,-97.922 0,-97.922 C137.27,-97.922 248.723,-54.043 248.723,0 C248.723,54.043 137.27,97.922 0,97.922 C-137.27,97.922 -248.723,54.043 -248.723,0 C-248.723,-38.82 -191.216,-72.395 -107.942,-88.23"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1.1972,0,0,1.1972,416.639,416.368)"
                    opacity="1"
                    className="block"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1.000003,0,0,1.000003,-14.328,-25.328)"
                    >
                      <path
                        fill="rgb(4,165,208)"
                        fillOpacity="1"
                        d="M0,-38.672 C21.343,-38.672 38.672,-21.343 38.672,0 C38.672,21.343 21.343,38.672 0,38.672 C-21.343,38.672 -38.672,21.343 -38.672,0 C-38.672,-21.343 -21.343,-38.672 0,-38.672z"
                      ></path>
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(228,56,52)"
                        strokeOpacity="1"
                        strokeWidth="0"
                        d="M0,-38.672 C21.343,-38.672 38.672,-21.343 38.672,0 C38.672,21.343 21.343,38.672 0,38.672 C-21.343,38.672 -38.672,21.343 -38.672,0 C-38.672,-21.343 -21.343,-38.672 0,-38.672z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div>React</div>
            </div>

            <div className="flex-col justify-center items-center">
              <div
                title=""
                role="button"
                aria-label="animation"
                tabIndex={0}
                style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  margin: "0 auto",
                  outline: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 33 33"
                  width="33"
                  height="33"
                  preserveAspectRatio="xMidYMid slice"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_1486">
                      <rect width="33" height="33" x="0" y="0" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_1486)">
                    <g transform="matrix(1,0,0,1,4.12,4.12)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,214,0)"
                            fillOpacity="1"
                            d="M24.75,12.38 C24.75,19.22 19.22,24.75 12.38,24.75 C5.54,24.75 0,19.22 0,12.38 C0,5.54 5.54,0 12.38,0 C19.22,0 24.75,5.54 24.75,12.38"
                          />
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity="1"
                            d="M7.78,13.91 C8.05,14.39 8.47,14.76 9.06,14.76 C9.63,14.76 9.95,14.54 9.95,13.68 C9.95,13.68 9.95,8.05 9.95,8.05 C9.95,8.05 11.74,8.05 11.74,8.05 C11.74,8.05 11.74,13.95 11.74,13.95 C11.74,15.74 10.69,16.55 9.16,16.55 C7.78,16.55 6.79,15.62 6.38,14.76 C6.38,14.76 7.78,13.91 7.78,13.91z M13.99,13.86 C14.36,14.46 14.76,15.04 15.62,15.04 C16.34,15.04 16.71,14.68 16.71,14.19 C16.71,13.6 16.32,13.4 15.53,13.06 C15.53,13.06 15.1,12.88 15.1,12.88 C13.85,12.36 13.02,11.69 13.02,10.3 C13.02,9.02 14.01,8.05 15.55,8.05 C16.65,8.05 17.45,8.42 18.02,9.41 C18.02,9.41 16.67,10.27 16.67,10.27 C16.37,9.75 16.05,9.54 15.55,9.54 C15.04,9.54 14.73,9.86 14.73,10.27 C14.73,10.78 15.05,10.98 15.79,11.3 C15.79,11.3 16.22,11.49 16.22,11.49 C17.69,12.11 18.52,12.74 18.52,14.17 C18.52,15.71 17.3,16.55 15.66,16.55 C14.05,16.55 13.14,15.75 12.63,14.76 C12.63,14.76 13.99,13.86 13.99,13.86z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div>Javascript</div>
            </div>

            <div class="flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="text-[#3178c6] w-20 h-20"
              >
                <path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z" />
              </svg>
              <div>Typescript</div>
            </div>

            <div className="flex flex-col justify-center items-center text-center w-20 h-20 border-blue-50">
              <img
                src="/images/next.png"
                alt="Next.js Logo"
                className="w-full rounded-full h-full object-contain"
              />
              <div>Next.js</div>
            </div>

            <div className="flex flex-col justify-center items-center text-center w-20 h-20 border-blue-50">
              <img
                src="/images/tailwind-logo.png"
                alt="Next.js Logo"
                className="w-full h-full object-contain"
              />
              <div>Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
