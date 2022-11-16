import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.application}>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
