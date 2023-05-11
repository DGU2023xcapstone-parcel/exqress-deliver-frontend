import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { theme } from "./style/theme";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./style/globalStyle";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <AppRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
