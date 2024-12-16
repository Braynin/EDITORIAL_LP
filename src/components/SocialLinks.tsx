import styles from "./SocialLinks.module.css";
import arraySocialLinks from "../assets/SocialLinksOptions";

const createSocialLink = (option: any) => (
  <li className={styles["header-li"]}>
    <a href={option.linkto}>{option.svg}</a>
  </li>
);

export default function SocialLink() {
  return arraySocialLinks.map(createSocialLink);
}
