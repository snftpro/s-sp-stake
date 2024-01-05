import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="https://snft.pro" className={styles.link}>
              Home
            </Link>
            <Link href="https://polygonscan.com/address/0x8a5eb4d5098c75a3cd47434b9eaf5af38bd5d06d" className={styles.link}>
              Explorer
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
          <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect Wallet"}
          modalTitle={""}
          modalSize={"wide"}
          welcomeScreen={{
            title: "SNFT  Staking",
            subtitle: "Stake S Tokens and get SP Tokens reward",
            img: {
              src: "https://i.imgur.com/3gbhpck.png",
              width: 150,
              height: 150,
            },
          }}
          modalTitleIconUrl={
            "https://i.imgur.com/3gbhpck.png"
          }
        />
          </div>
          
        </div>
      </nav>
    </div>
  );
}