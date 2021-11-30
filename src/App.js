
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';




const App = (props) => {
  return (
    <div className="App">
      <Header />
      <RecipeList />
    </div>
  );
}

export default App;
