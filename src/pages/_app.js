import "@styles/globals.css";
import { Provider } from "src/context/store";
import { ThemeProvider } from "src/context/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <div classname="">
      <Provider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
