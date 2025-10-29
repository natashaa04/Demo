"use client"
import "./globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
        <ThemeProvider>
              <Header />
        {children}
        </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
