import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeTags from "./pages/RecipeTags";
import RecipesByTag from "./pages/RecipesByTag";
import RecipesByMeal from "./pages/RecipesByMeal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipestags" element={<RecipeTags />} />
          <Route path="/recipesbytag/:tag" element={<RecipesByTag />} />
          <Route path="/mealType/:meal" element={<RecipesByMeal />} />
          <Route path="/recipedetails/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
