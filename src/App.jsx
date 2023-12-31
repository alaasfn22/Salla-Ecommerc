import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import { loader as PostaLoader } from "./pages/Admin/DashBoard";
import DashBoard from "./pages/Admin/DashBoard";
import DashBoardLayout from "./pages/Admin/DashBoardLayout";
import UsersPage from "./pages/Admin/UsersPage";
import LoginPage from "./pages/Auth/LoginPage";
import Products from "./pages/Admin/Products";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashBoardLayout />,
      children: [
        {
          index: true,
          element: <DashBoard />,
          loader: async () => {
            const response = await PostaLoader();
            return response;
          },
          errorElement: <p>Something went wrong</p>,
        },
        {
          path: "dashboard/users",
          element: <UsersPage />,
        },
        {
          path: "/dashboard/Products",
          element: <Products />,
        },
      ],
    },

    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/category",
          element: <CategoryPage />,
        },
        {
          path: "/brand",
          element: <BrandPage />,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <p>There is nothing here: 404!</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
