import styles from "./SocialLinks.module.css";
import arraySocialLinks from "../assets/SocialLinksOptions";

interface SocialLink {
  linkto: string;
  svg: JSX.Element;
}
const createSocialLink = (option: SocialLink) => (
  <li className={styles["header-li"]}>
    <a target="_blank" rel="noopener noreferrer" href={option.linkto}>
      {option.svg}
    </a>
  </li>
);

export default function SocialLink() {
  return arraySocialLinks.map(createSocialLink);
}
