import Link from 'next/link';
import { FaHome, FaSearch, FaUser} from "react-icons/fa";
import styles from '../layout.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <FaHome /> Home
      </Link>
      <Link href="/pesquisar" className={styles.link}>
        <FaSearch/> Pesquisar
      </Link>
      <Link href="/perfil" className={styles.link}>
        <FaUser /> Perfil
      </Link>
      
    </nav>
  );
}
