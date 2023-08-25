import { Footer, Navbar } from "./components";
import { About, Contact, Header, Proposal, Testimonials } from "./pages/home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Proposal />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
