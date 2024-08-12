import LoginRegisterCard from "../../components/LoginRegisterCard/LoginRegisterCard";
import styles from "./loginRegisterPage.module.css";

function LoginRegisterPage() {
  return (
    <>
      <div className={styles.container}>
        <LoginRegisterCard />
      </div>
    </>
  );
}

export default LoginRegisterPage;
