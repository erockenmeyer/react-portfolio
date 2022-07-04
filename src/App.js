import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";

function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderCat = () => {
    if (currentCategory.name === 'About Me') {
      return <About />
    } else if (currentCategory.name === 'Portfolio') {
      return <Portfolio />
    } else if (currentCategory.name === 'Contact') {
      return <Contact />
    } else if (currentCategory.name === 'Resume') {
      return <div></div>
    }
  }

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <div>{renderCat()}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
