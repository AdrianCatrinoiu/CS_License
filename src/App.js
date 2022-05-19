import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FormPage from "./pages/FormPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MontserratLight from "./assets/fonts/Montserrat/static/Montserrat-Light.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "MontserratLight",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'MontserratLight';
          src: local('MontserratLight'), local('Montserrat-Light'), url(${MontserratLight}) format('tff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App font-MontserratLight bg-[#F9F5F2]">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
