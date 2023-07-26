import Image from "next/image";
import Link from "next/link";
import Logo from "#/public/logo.png";
import HomePhones from "#/public/home-phones.png";
import screenshot1 from "#/public/screenshot1.png";
import Facebook from "#/public/facebook.svg";
import Gplay from "#/public/gplay.svg";
import Apple from "#/public/apple.svg";

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center min-[850px]:grid min-[850px]:grid-cols-2 mt-2">
        {/* phones */}
        <div className="max-[850px]:hidden flex items-center justify-center relative">
          <Image src={HomePhones} alt="Home Phones" width={420} />
          <div className="absolute ml-20 mb-10 -mr-2">
            <Image src={screenshot1} alt="screenshot1" width={230} />
          </div>
        </div>

        <div className="flex w-full justify-center max-w-[350px] flex-col">
          <div className="flex flex-col w-full items-center p-2 max-[450px]:border-0 border border-gray-300 min-[450px]:mt-12">
            <Image src={Logo} alt="Instagram" width={180} height={180} />
            <div className="flex flex-col w-full items-center space-y-2 mt-4 px-12 max-[450px]:px-2">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Telefone, nome de usuário ou e-mail"
                className="w-full bg-gray-100 p-3 border-[1px] rounded-sm text-xs text-slate-800"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                className="w-full bg-gray-100 p-3 border-[1px] rounded-sm text-xs text-slate-800"
              />
              <div className="flex items-center w-full space-x-2 p-2 text-xs">
                <input type="checkbox" name="remember" id="remember" />
                <span>Salvar informações de login</span>
              </div>
              <button className="bg-sky-400 text-white py-2 px-4 rounded-md font-semibold w-full text-sm">
                Entrar
              </button>
            </div>

            <div className="flex justify-evenly space-x-2 w-64 py-4 text-xs">
              <span className="bg-gray-300 h-px flex-grow mt-2"></span>
              <span>OU</span>
              <span className="bg-gray-300 h-px flex-grow mt-2"></span>
            </div>

            <div className="text-center text-blue-900 space-y-6">
              <Link
                href={""}
                className="flex items-center font-bold text-sm gap-1 mt-2"
              >
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
                Entrar com Facebook
              </Link>
              <p className="text-xs">Esqueceu a senha?</p>
            </div>
          </div>

          <div className="flex text-sm text-center w-full max-w-[350px] justify-center items-center py-5 my-4 max-[450px]:border-0 border border-gray-300">
            <span>
              Não tem uma conta?{" "}
              <a className="text-blue-500 font-semibold">Cadastra-se</a>
            </span>
          </div>
          <div className="text-sm text-center space-y-4">
            <p>Obtenha o aplicativo.</p>
            <div className="flex justify-center space-x-2">
              <Image width={130} src={Apple} alt="" />
              <Image width={130} src={Gplay} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-xs text-gray-500 space-y-4 my-14">
        <div>
          <ul className="flex flex-wrap [&>li]:px-2 justify-center px-3 leading-6">
            <li>
              <Link href={"Meta"} />
              Meta
            </li>
            <li>
              <Link href={"Sobre"} />
              Sobre
            </li>
            <li>
              <Link href={"Blog"} />
              Blog
            </li>
            <li>
              <Link href={"Carreiras"} />
              Carreiras
            </li>
            <li>
              <Link href={"Ajuda"} />
              Ajuda
            </li>
            <li>
              <Link href={"API"} />
              API
            </li>
            <li>
              <Link href={"Privacidade"} />
              Privacidade
            </li>
            <li>
              <Link href={"Termos"} />
              Termos
            </li>
            <li>
              <Link href={"Principais contas"} />
              Principais contas
            </li>
            <li>
              <Link href={"Localizações"} />
              Localizações
            </li>
            <li>
              <Link href={"Instagram Lite"} />
              Instagram Lite
            </li>
            <li>
              <Link href={"Threads"} />
              Threads
            </li>
            <li>
              <Link href={"Carregamento de contatos e não usuários"} />
              Carregamento de contatos e não usuários
            </li>
            <li>
              <Link href={"Meta Verified"} />
              Meta Verified
            </li>
          </ul>
        </div>
        <div className="flex [&>select]:bg-white space-x-4">
          <select name="" id="">
            <option value="Português">Português</option>
          </select>
          <p>© 2023 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}
