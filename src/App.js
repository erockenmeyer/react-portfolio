import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

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
  const renderCat = () => {
    if (currentCategory === 'About Me') {
      return 
    } else if (currentCategory === 'Portfolio') {
      return
    } else if (currentCategory === 'Contact') {
      return
    } else if (currentCategory === 'Resume') {
      return
    }
  }

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
