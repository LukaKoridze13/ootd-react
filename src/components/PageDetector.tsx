import HomePage from "../pages/home/HomePage";
import { useSelector } from "react-redux";
import { selectActivePage } from "../redux/page-slice";
import TopPostsPage from "../pages/top-posts/TopPostsPage";
import CreatePage from "../pages/create/CreatePage";
import TopLooksPage from "../pages/top-looks/TopLooksPage";
import MyLooksPage from "../pages/my-posts/MyPostsPage";

export default function PageDetector() {
  const page = useSelector(selectActivePage);

  switch (page) {
    case "home":
      return <HomePage />;
    case "top-posts":
      return <TopPostsPage />;
    case "create":
      return <CreatePage />;
    case "top-looks":
      return <TopLooksPage />;
    case "profile":
      return <MyLooksPage />;
    default:
      return <HomePage />;
  }
}
