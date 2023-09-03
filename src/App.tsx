import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking";

function App() {
  // const [count, setCount] = useState(0)

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
