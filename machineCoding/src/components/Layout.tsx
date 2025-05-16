import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
export default function Layout() {
  type linkDetail = {
    url: string;
    name: string;
  };

  type uiSectionsList = Array<linkDetail>;

  const uiSectionsList = [
    {
      url: "accordian",
      name: "Accordian",
    },
    {
      url: "shimmerUI&infinteScroll",
      name: "Shimmer UI and Infinite Scroll",
    },
    {
      url: "multiLanguageSupport",
      name: "Multi-Language Support",
    },
    {
      url: "pagination",
      name: "Pagination",
    },
  ];

  return (
    <>
      <h3>Click on links to redirect to respective Section</h3>
      <div className="moduleLinks">
        {uiSectionsList.map(({ url, name }) => (
          <p>
            <Link key={url} to={url}>
              {name}
            </Link>
          </p>
        ))}
      </div>
      <Outlet />
    </>
  );
}
