import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// tan stack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./Context/ThemeProvider";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);
