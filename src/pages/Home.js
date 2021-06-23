import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="imagem simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Logo Letmeask"></img>
          <button>
            <img src={googleIconImg} alt="Logo Google"></img>
            Crie sua sala com o Google
          </button>
          <div>
            <form>
              <input 
              type="text"
              placeholder="Digite o código da sala"
              >
              </input>
              <button>Submit</button>
            </form>

          </div>
        </div>

      </main>
      <div>

      </div>
    </div>
  )
}