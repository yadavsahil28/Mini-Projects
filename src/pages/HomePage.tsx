import { NavLink } from "react-router-dom";
import { routes } from "../routes/config";
import Header from "../components/Common/Header";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Mini Projects" />

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
        {routes.map((route) => (
          <NavLink
            key={route.id}
            to={`/${route.id}`}
            className="block"
          >
            {({ isActive }) => (
              <div
                className={`p-5 rounded-2xl shadow-md border transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 hover:shadow-lg hover:scale-105"
                }`}
              >
                <h2 className="text-lg font-semibold text-center">
                  {route.title}
                </h2>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};