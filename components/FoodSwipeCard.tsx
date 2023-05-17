import * as ReactDOM from 'react-dom';
import * as React from 'react';
import TinderCard from 'react-tinder-card';
import './FoodSwipeCard.style.css';

interface Recipe {
  name: string;
  imageUrl: string;
  description: string;
}

const FoodSwipeCard: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([
    // Array of recipes to be populated from API or static data
    {
      name: 'Spaghetti Carbonara',
      imageUrl: 'https://example.com/spaghetti.jpg',
      description: 'Delicious Italian pasta.',
    },
    {
      name: 'Chicken Biryani',
      imageUrl: 'https://example.com/biryani.jpg',
      description: 'Flavourful Indian rice dish.',
    },
    // Add more recipes...
  ]);

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('You swiped: ' + direction + ' on ' + nameToDelete);
    // You can add logic here to handle the swipe direction
    // Like if swiped right, add the recipe to favorites
  };

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="foodSwipeCard">
      {recipes.map((recipe) => (
        <TinderCard
          className="swipe"
          key={recipe.name}
          onSwipe={(dir) => swiped(dir, recipe.name)}
          onCardLeftScreen={() => outOfFrame(recipe.name)}
        >
          <div
            style={{ backgroundImage: 'url(' + recipe.imageUrl + ')' }}
            className="card"
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default FoodSwipeCard;
