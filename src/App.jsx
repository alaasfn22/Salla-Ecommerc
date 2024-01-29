import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {loader as PostaLoader} from "./pages/Admin/DashBoard";
import DashBoard from "./pages/Admin/DashBoard";
import DashBoardLayout from "./pages/Admin/DashBoardLayout";
import UsersPage from "./pages/Admin/UsersPage";
import LoginPage from "./pages/Auth/LoginPage";
import Products from "./pages/Admin/Products";
import {Suspense, lazy, useEffect, useState} from "react";
import LoadingSpinner from "./helper/Spinner";
import RegisterPage from "./pages/Auth/RegisterPage";
import RootLayout from "./pages/Public/RootLayout";
import UserLayOut from "./pages/User/UserLayOut";
import UserInfoPage from "./pages/User/UserInfoPage";
import ReqauirBack from "./pages/Auth/ReqauirBack";
import PageLoading from "./helper/PageLoading"
const HomePage = lazy(() => import("./pages/Public/HomePage"));
const ProductPage = lazy(() => import("./pages/Public/Product/ProductPage"));
const CategoryPage = lazy(() => import("./pages/Public/Category/CategoryPage"));
const BrandPage = lazy(() => import("./pages/Public/Brand/BrandPage"));
const ProductDetails = lazy(() =>
  import("./pages/Public/Product/ProductDetails")
);
const ProductByCategory = lazy(() =>
  import("./pages/Public/Product/ProductByCategory")
);
const ProductByBrand = lazy(() =>
  import("./pages/Public/Product/ProductByBrand")
);
const CartPage = lazy(() => import("./pages/Public/Cart/CartPage"));
const NotFoundPage = lazy(() => import("./utils/Not_Found_Page"));

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
  console.log(window.navigator.onLine);
  if (window.navigator.onLine === false) {
    return <NotFoundPage />;
  }
  const router = createBrowserRouter([
    {
      path:"",
      element: <ReqauirBack />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },

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
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          ),
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
          path: "/productDetails",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "/products/category",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductByCategory />
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
        {
          path: "/products/brand",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductByBrand />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/profile",
      element: <UserLayOut />,
      children: [
        {
          index: true,
          element: <UserInfoPage />,
        },
      ],
    },
 
    {
      path: "/*",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <NotFoundPage />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<LoadingSpinner />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ]);
  return (
    <div className="bg-main-Color dark:bg-gray-800  dark:border-gray-700 min-h-screen    ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
