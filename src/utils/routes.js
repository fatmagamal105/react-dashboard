import App from "../App";
import AdminLayout from "../Layouts/AdminLayout";
import RootLayout from "../Layouts/RootLayout";
import AddProduct from "../pages/AddProduct";
import ListProducts from "../pages/ListProducts";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct"

export const routes = [
  {
    path: "/",
    errorElement: <h1>Error Loading This Route</h1>,
    element: <RootLayout  />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <h1>about PAge</h1>,
      },
      {
        path: "contact",
        element: <h1>contact PAge</h1>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
        {
            path: '',
            element: <h1>admin panel to edit website content</h1>
        },
        {
            path: 'products',
            element: <ListProducts />
        },
        {
            path: 'add-product',
            element: <AddProduct />
        },
        {
          path:'update-product/:productId',
          element: <UpdateProduct />
        }
    ]
  },
];
