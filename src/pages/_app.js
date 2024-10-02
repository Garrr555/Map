import "@styles/globals.css";
import { Provider } from "src/context/store";

function MyApp({ Component, pageProps }) {
  return (
    <div classname="">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
