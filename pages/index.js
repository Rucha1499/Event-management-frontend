import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Event Management</a>
        </h1>

        <p className={styles.description}>
          Get started by checking out the events you can manange on your own! {''}
          {/* <code className={styles.code}></code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Birthday Party &rarr;</h3>
            <p>Find yourself the best cakes and on point decorations to make your special day more special!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Reunion &rarr;</h3>
            <p>Want your reunion to rock? Arrange for delicious snacks, drinks and decorations now!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Reception &rarr;</h3>
            <p>Discover range of services to make your reception the most memorable one!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Award function &rarr;</h3>
            <p>
              Confused on the arrangements? No worries we are here to help you always!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
        Contact us for the queries 📞
        </a>
      </footer>
    </div>
  )
}
