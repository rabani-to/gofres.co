import styles from "./FrescoHome.module.css"
import Logo from "./Logo"

export default function FrescoHome() {
  return (
    <main className={styles.container}>
      <Logo />
      <p className={styles.description}>
        A wagmi component libray for Ethereum
      </p>
    </main>
  )
}
