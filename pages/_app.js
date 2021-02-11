import React from "react";
import { ThemeProvider, Global } from "@emotion/react";

const theme = {
  colors: {
    primary: "#030047",
  },
  padding: "10px",
  bg: "transparent",
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: "border-box",
          },
          body: {
            background: "transparent",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
          },
        })}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
