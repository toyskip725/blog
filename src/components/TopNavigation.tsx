import { WebsiteTitle } from "../utils/constants";
import "./TopNavigation.css";

const TopNavigation = () => {
  return (
    <header class="top-navigation">
      <a class="top-navigation-text" href={import.meta.env.BASE_URL}>{WebsiteTitle}</a>
    </header>
  );
};

export default TopNavigation;