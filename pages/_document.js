import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/vercel.svg"></link>
          <meta name="theme-color" content="#17141d" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Mina:wght@700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@900&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}