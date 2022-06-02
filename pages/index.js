import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const pageTitle = "Goblin to English Translator";

  function translateText(text){
    const parsed = text.normalize('NFD')
    .replace(/[\u2090]/g, 'a')
    .replace(/[\u2091]/g, 'e')
    .replace(/[\u2092]/g, 'o')
    .replace(/[\u1D63]/g, 'r')
    .replace(/[\u1D63]/g, 'r')
    .replace(/[\u1D62]/g, 'i')
    .replace(/[\u1D64]/g, 'u')
    .replace(/[\u209A]/g, 'p')
    .replace(/[\u209C]/g, 't')
    .replace(/[\u2095]/g, 'h')
    .replace(/[\u209B]/g, 's')
    .replace(/[\u2098]/g, 'm')
    .replace(/[\u2097]/g, 'l')
    .replace(/[\u2099]/g, 'n')

    ;
    const toenglish = parsed.normalize("NFD")
    .replace(/dey/g, 'they')
    .replace(/ar/g, 'are')
    .replace(/billdin/g, 'building')
    .replace(/da/g, 'the')
    .replace(/burgrr/g, 'burger')
    .replace(/fwee/g, 'free')
    .replace(/Fur/g, 'for')
    .replace(/GoBlinos/g, 'goblins')
    .replace(/onlee/g, 'online')
    .replace(/onlee/g, 'official')
    .replace(/fry thee/g, 'friday')
    .replace(/nite/g, 'night')
    
    
    return toenglish;
  }

  function editText(event){
    let text = translateText(event.target.value);


    document.getElementById('content').innerHTML = text;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Created by kevinl.eth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Gₒbₗᵢₙ ₜₒ ₑₙgₗᵢₛₕ ₜᵣₐₙₛₗₐₜₒᵣ<br />
          {pageTitle}
          <br />
        </h1>

        <p className={styles.description}>
          just copy and paste into here:
        <textArea
          name="textValue"
          onChange={editText}
          className={styles.translatethis}
        />
        </p>

        <div className={styles.grid}>
          <div id='content'></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/klabianco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by kevinl.eth
        </a>
      </footer>
    </div>
  )
}
