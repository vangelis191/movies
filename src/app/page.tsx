import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "./pages/dashboard/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <DashboardPage />
    </main>
  );
}
