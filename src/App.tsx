import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./routes/AppRouter";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { queryClient } from "./react-query/queryClient";
import Navigation from "./components/common/navigation";
import Loading from "./components/common/loading";
import ModalPortal from "./components/common/modal-portal";
import InstallPrompt from "./components/common/install-prompt";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <BrowserRouter>
            <ToastContainer />
            <Loading />
            <AppRouter />
            <Navigation />
            <InstallPrompt />
            <ModalPortal />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
