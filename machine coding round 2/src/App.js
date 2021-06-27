import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductContextProvider from "./state/ProductContext";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <ProductContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </ProductContextProvider>
    </div>
  );
}
