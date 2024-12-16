import { Link } from "react-router-dom";
import styles from "./FooterSection.module.css";
import arrayFooterOptions from "../assets/FooterOptions";

const createFooterSection = (option: any) => (
  <div className={styles["footer-section"]}>
    <h4 className={styles["footer-title"]}>{option.title}</h4>
    <ul className={styles["footer-options"]}>
      <li>
        <Link className={styles["footer-option"]} to={option.option1[1]}>
          {option.option1[0]}
        </Link>
      </li>
      <li>
        <Link className={styles["footer-option"]} to={option.option2[1]}>
          {option.option2[0]}
        </Link>
      </li>
      <li>
        <Link className={styles["footer-option"]} to={option.option3[1]}>
          {option.option3[0]}
        </Link>
      </li>
      <li>
        <Link className={styles["footer-option"]} to={option.option4[1]}>
          {option.option4[0]}
        </Link>
      </li>
      <li>
        <Link className={styles["footer-option"]} to={option.option5[1]}>
          {option.option5[0]}
        </Link>
      </li>
    </ul>
   
    
  </div>
);

export default function SocialLink() {
  return arrayFooterOptions.map(createFooterSection);
}
