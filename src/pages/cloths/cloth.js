import {SendCloth} from '../../components/sendCloth'

export default function Cloth() {
  return <div>
    <main>
      <h1 className="title">
        Add a cloth
      </h1>
      <SendCloth></SendCloth>
    </main>

    <footer>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer">
          <img src="/clothes.svg" alt="tailor Logo" className="logo" />
        </a>
    </footer>

    <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
  </div>
}