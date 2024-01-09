import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as PostaLoader } from "./pages/Admin/DashBoard";
import DashBoard from "./pages/Admin/DashBoard";
import DashBoardLayout from "./pages/Admin/DashBoardLayout";
import UsersPage from "./pages/Admin/UsersPage";
import LoginPage from "./pages/Auth/LoginPage";
import Products from "./pages/Admin/Products";
import { Suspense, lazy, useEffect, useState } from "react";
import PageLoading from "./helper/PageLoading";
import LoadingSpinner from "./helper/Spinner";
import RegisterPage from "./pages/Auth/RegisterPage";
import RootLayout from "./pages/RootLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const BrandPage = lazy(() => import("./pages/BrandPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <PageLoading />;
  }
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
          element: <Suspense fallback={<LoadingSpinner/>}>
            <HomePage />
          </Suspense>,
        },
        {
          path: "/products",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductPage />
            </Suspense>
          ),
        },
        {
          path: "/category",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <CategoryPage />
            </Suspense>
          ),
        },
        {
          path: "/brand",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <BrandPage />
            </Suspense>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <CartPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <p>There is nothing here: 404!</p>,
    },
  ]);
  return (
    <div className="bg-main-Color dark:bg-gray-800    dark:border-gray-700 min-h-screen    ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
