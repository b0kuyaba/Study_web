import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

const App1 = () => {
  const name = "이정환";
  const location = "대구";

  return (
    <>
      <Header />
      <Body name={name} location={location} />
      <Footer />
    </>
  );
};

export default App1;
