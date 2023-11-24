import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/charts/Chart";
import styles from  "../ui/dashboard/dashboard.module.css"
import RightBar from "../ui/dashboard/rightbar/Rightbar";
import Transaction from "../ui/dashboard/transaction/transaction";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
          <div className={styles.cards}>
   <Card />
   <Card />
   <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    
    </div>
  )
};

export default Dashboard
