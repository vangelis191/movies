import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "./pages/dashboard/page";

export default function Home() {
  return (
   <>
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
    <main className={styles.main}>
      <DashboardPage />
    </main>
   </>
   
  );
}
