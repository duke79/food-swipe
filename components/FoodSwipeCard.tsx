import * as ReactDOM from 'react-dom';
import * as React from 'react';
import TinderCard from 'react-tinder-card';
import './FoodSwipeCard.style.css';

interface Recipe {
  name: string;
  imageUrl: string;
  description: string;
}

const recipesData = [
  // Array of recipes to be populated from API or static data
  {
    name: 'Bhindi',
    imageUrl:
      'https://i.ndtvimg.com/i/2018-02/bhindi_650x400_61517569900.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
    description: 'Indian Curry',
  },
  {
    name: 'Dal Makhani',
    description:
      "Let's begin the list with everyone's favourite - Dal Makhani. The combination of rajma and urad dal with butter tadka and super buttery and creamy gravy, this recipe is sure to enhance the taste buds in no time. Pair it up with garlic naan, mint chutney, onion rings and savour.",
    imageUrl:
      'https://i.ndtvimg.com/i/2018-05/dal-makhani_650x400_51525766005.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Paneer Butter Masala',
    description:
      'Soft and juicy paneer chunks dunked in rich and creamy tomato-onion gravy - paneer butter masala spells indulgence in every bite. Team it up with jeera rice, naan or even simple chapati, this creamy dish elevates your meal experience instantly.',
    imageUrl:
      'https://c.ndtvimg.com/2021-04/9mih5a7_paneer-makhanwala_625x300_26_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Aloo Gobhi',
    description:
      "The north Indian menu is surely incomplete without this particular recipe. Isn't it? Loved by all, aloo gobhi is so quick, easy to make and filling. All you need is some potatoes, cauliflower, a few spices and it's done.",
    imageUrl:
      'https://i.ndtvimg.com/i/2018-04/aloo-gobhi_650x400_71523274760.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Shahi Paneer',
    description:
      'Creamy, spicy, and eclectic, a bowlful of shahi paneer is one of the most preferred vegetarian delicacies around the country. You go to any Indian restaurant overseas; this recipe is sure to be on their menu list.',
    imageUrl:
      'https://c.ndtvimg.com/2019-09/tlps304o_paneer_625x300_24_September_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Dum Aloo',
    description:
      'This Punjabi-style dum aloo needs no out-of-the-ordinary ingredients; you can make it any time you feel like treating yourself with scrumptious Indian spread. Crispy, tiny and deep-fried potatoes dipped in masaledar onion-tomato gravy, this recipe offers a burst of flavours on the taste buds.',
    imageUrl:
      'https://i.ndtvimg.com/i/2018-04/banarasi-dum-aloo_620x350_51525092993.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Palak Paneer',
    description:
      'Palak Paneer is one evergreen dish which we cannot get enough of. Cubed paneer dipped into the gravy of pureed spinach, this north Indian recipe is a combination of both health and taste. If you want to have a piquant flavour of garlic in your usual palak paneer recipe, try lehsuni palak paneer.',
    imageUrl:
      'https://c.ndtvimg.com/2019-09/iiidjkl8_palak-paneer_625x300_18_September_19.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  },
  {
    name: 'Amritsari Chole',
    description:
      'Popularly paired with kulche, this dish is a hit among both kids and adults alike. It is thick, luscious and all things indulgent.',
    imageUrl:
      'https://c.ndtvimg.com/2020-03/5j2pva48_chole_625x300_30_March_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  },
  // Add more recipes...
];

const FoodSwipeCard: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>(recipesData);

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
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default FoodSwipeCard;
