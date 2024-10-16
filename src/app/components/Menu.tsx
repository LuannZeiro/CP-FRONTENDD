import Link from 'next/link';
import { FaHome, FaSearch, FaSignInAlt, FaUser } from "react-icons/fa";
import styles from '../layout.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <FaHome /> Home
      </Link>
      <Link href="/buscar" className={styles.link}>
        <FaSearch /> Buscar
      </Link>
      <Link href="/perfil" className={styles.link}>
        <FaUser /> Perfil
      </Link>
      <Link href="/login" className={styles.link}>
        <FaSignInAlt /> Login
      </Link>
      
    </nav>
  );
}
