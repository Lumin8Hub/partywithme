import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RegionProvider } from "@/context/RegionContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home.tsx";
import Parties from "./pages/Parties.tsx";
import PartyDetail from "./pages/PartyDetail.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Camp from "./pages/Camp.tsx";
import Events from "./pages/Events.tsx";
import Gallery from "./pages/Gallery.tsx";
import Reviews from "./pages/Reviews.tsx";
import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import Book from "./pages/Book.tsx";
import Privacy from "./pages/Privacy.tsx";
import NotFound from "./pages/NotFound.tsx";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <TooltipProvider>
    <Sonner />
    <RegionProvider>
      <BrowserRouter basename={baseUrl}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/parties/:slug" element={<PartyDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/camp" element={<Camp />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </RegionProvider>
  </TooltipProvider>
);

export default App;
