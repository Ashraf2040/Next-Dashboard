import NavBar from "../ui/dashboard/NavBar";
import Sidebar from "../ui/dashboard/Sidebar";
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/footer/Footer";

const Dashboardayout = ({children}) => {
  return (
    <div className={styles.container}>
          <div className={styles.menu}>
              <Sidebar />
          </div>
          <div className={styles.content}>
              <NavBar />
        {children}
        <Footer />
          </div>
    </div>
  )
};

export default Dashboardayout
