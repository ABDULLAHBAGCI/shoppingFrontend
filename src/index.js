import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./components/pages/CartPage.jsx";
import CategoryPage from "./components/pages/CategoryPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import { CookiesProvider } from "react-cookie";
import PaymentPage from "./components/pages/PaymentPage.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProfilePage from "./components/pages/ProfilePage.jsx";
import ContactDeliveryInfo_Page from "./components/pages/ContactDeliveryInfo_Page.jsx";
import AdminHomePage from "./components/pages/AdminHomePage.jsx";
import AdminAddProductPage from "./components/pages/AdminAddProductPage.jsx";
import AdminProductListPage from "./components/pages/AdminProductListPage.jsx";
import AdminCategoriesPage from "./components/pages/AdminCategoriesPage.jsx";
import AdminCommentListPage from "./components/pages/AdminCommentListPage.jsx";
import AdminUserListPage from "./components/pages/AdminUserListPage.jsx";
import AdminOrderListPage from "./components/pages/AdminOrderListPage.jsx";
import AdminLoginPage from "./components/pages/AdminLoginPage.jsx";
import AdminEditProductPage from "./components/pages/AdminEditProductPage.jsx";
const promise = loadStripe(
  "pk_test_51INGWaEKIejjwtwZG64KMynkwBQHXzXXuBvTugXlCaLAYMz54K17DfnT0jpAcxbQ5KJonZua4ryZn88QKozYhUV100zYmIoFNH"
);

ReactDOM.render(
  <CookiesProvider>
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/product/:id">
        <ProductPage />
      </Route>
      <Route path="/category/:category_url">
        <CategoryPage />
      </Route>
      <Route path="/basket">
        <CartPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/payment">
        <Elements stripe={promise}>
          <PaymentPage />
        </Elements>
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/shipping-information">
        <ContactDeliveryInfo_Page />
      </Route>
      <Route path="/admin/login"></Route>
      <Route path="/admin/home">
        <AdminHomePage />
      </Route>
      <Route path="/admin/products">
        <AdminProductListPage />
      </Route>
      <Route path="/admin/add-product">
        <AdminAddProductPage />
      </Route>
      <Route path="/admin/orders">
        <AdminOrderListPage />
      </Route>
      <Route path="/admin/login">
        <AdminLoginPage />
      </Route>
      <Route path="/admin/edit-orders"></Route>
      <Route path="/admin/comments">
        <AdminCommentListPage />
      </Route>
      <Route path="/admin/categories">
        <AdminCategoriesPage />
      </Route>
      <Route path="/admin/users">
        <AdminUserListPage />
      </Route>
      <Route path="/admin/edit-product">
        <AdminEditProductPage />
      </Route>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);
