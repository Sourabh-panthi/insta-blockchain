import Auth from "../components/Auth";
import Feed from "../components/Feed";

const HomePage = () => {
  return true ? <Feed /> : <Auth />;
};

export default HomePage;
