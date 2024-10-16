import Link from 'next/link';
import { FaHome, FaPizzaSlice, FaSignInAlt, FaUser } from "react-icons/fa";
import styles from '../layout.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <FaHome /> Home
      </Link>
      <Link href="/produtos" className={styles.link}>
        <FaPizzaSlice /> Produtos
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
