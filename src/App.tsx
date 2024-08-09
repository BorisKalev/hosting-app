import Header from "./components/Header";
import Companies from "./components/Companies";
import Why from "./components/Why";
import Roadmap from "./components/Roadmap";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Companies />
      <Why />
      <Roadmap />
      <Reviews />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
