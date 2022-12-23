import logoPizza from './images/logoPizza.png';
import imgPizza from './images/imgPizza.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className='h-screen divMain'>
        <img
          className='top-10 left-10 absolute'
          src={logoPizza}
          draggable={false}
        />
        <div className='absolute'>
          <h1>Welcome to Mark’s Pizza!</h1>
          <p>
            We are a locally-owned and operated pizzeria, dedicated to serving
            the best pizza in town. Our pizzas are made with only the freshest,
            highest-quality ingredients and cooked to perfection in our
            wood-fired oven. We offer a variety of toppings to choose from, as
            well as gluten-free and vegetarian options.
          </p>
          <p>
            In addition to pizza, we also offer a selection of salads,
            sandwiches, and appetisers to enjoy. And don't forget to save room
            for one of our delicious desserts!
          </p>
        </div>
        <img className='object-cover h-full float-right' src={imgPizza} draggable={false} />
      </div>
      <div class='h-screen'></div>
    </div>
  );
}

export default App;
