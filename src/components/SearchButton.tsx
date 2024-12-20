import styles from "./SearchButton.module.css";
import { IconSearch } from "@tabler/icons-react";
interface SearchButtonProps {
  onClick: () => void;
}
const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <span className={styles["search-button"]} onClick={onClick}>
      <IconSearch stroke={3.5} />
    </span>
  );
};

export default SearchButton;
