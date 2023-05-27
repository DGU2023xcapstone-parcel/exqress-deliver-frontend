import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./routes/AppRouter";
import { theme } from "./style/theme";
import GlobalStyle from "./style/globalStyle";
import { queryClient } from "./react-query/queryClient";
import Navigation from "./components/common/navigation";
import Loading from "./components/common/loading";
import ModalPortal from "./components/common/modal-portal";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <BrowserRouter>
            <Loading />
            <AppRouter />
            <Navigation />
            <ModalPortal />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
