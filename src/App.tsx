import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./style/theme";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./style/globalStyle";
import Navigation from "./components/common/navigation";
import Loading from "./components/common/loading";

const queryClient = new QueryClient();
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
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
