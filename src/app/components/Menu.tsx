import Link from 'next/link';
import { FaHome, FaSearch, FaSignInAlt, FaUser } from "react-icons/fa";
import styles from '../layout.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/home" className={styles.link}>
        <FaHome /> Home
      </Link>
      <Link href="/search" className={styles.link}>
        <FaSearch /> Search
      </Link>
      <Link href="/login" className={styles.link}>
        <FaSignInAlt /> Login
      </Link>
      <Link href="/about" className={styles.link}>
        <FaUser /> Perfil
      </Link>
    </nav>
  );
}
