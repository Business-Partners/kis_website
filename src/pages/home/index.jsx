import Header from "../../components/header";
import About from "../../views/about";
import Banner from "../../views/banner";
import Contacts from "../../views/contacts";
import Prices from "../../views/prices";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Prices />
      <Contacts />
    </>
  );
}

export default Home;
