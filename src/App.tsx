import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages/home";
import Booking from "./pages/Booking";

function App() {
  return (
    <main>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </>
      <Footer />
    </main>
  );
}

export default App;
