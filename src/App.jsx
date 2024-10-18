import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";

import Card from "./Card";

import Button from "./Button";

import Student from "./Student";

import UserGreeting from "./UserGreeting.jsx";

import List from "./List";

import Button1 from "./Button1.jsx";

import MyComponent from "./MyComponent";

import Counter from "./Counter";

import OnChange from "./OnChange";

import ObjectChange from "./ObjectChange";

import ArrayState from "./ArrayState";

import ArrObject from "./ArrObject";

import ColorPicker from "./ColorPicker";

import ToDoList from "./ToDoList";

import UseEffectHook from "./UseEffectHook";

import DigitalClock from "./DigitalClock";

import ComponentA from "./ComponentA";

import UseRefStateEffect from "./UseRefStateEffect";

import StopWatch from "./StopWatch";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 13 },
    { id: 2, name: "orange", calories: 12 },
    { id: 3, name: "banana", calories: 13 },
    { id: 4, name: "coconut", calories: 23 },
    { id: 5, name: "pineapple", calories: 2 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Footer />
      <Header />
      <Food />
      <hr style={{ border: "2px solid red" }} />

      <Card />
      <Card />
      <hr style={{ border: "2px solid red" }} />

      <Button />
      <hr style={{ border: "2px solid red" }} />

      <Student name="Gogo" age={30} isStudent={true} />
      <Student name="Dream" age={12} isStudent={false} />
      <Student name="Goal" age={67} isStudent={true} />
      <Student />
      <hr style={{ border: "2px solid red" }} />

      <UserGreeting isLoggedIn={false} />
      <UserGreeting isLoggedIn={true} username="Gogo" />
      <hr style={{ border: "2px solid red" }} />

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      <hr style={{ border: "2px solid red" }} />

      <Button1 />
      <hr style={{ border: "2px solid red" }} />

      <MyComponent />
      <hr style={{ border: "2px solid red" }} />

      <Counter />
      <hr style={{ border: "2px solid red" }} />

      <OnChange />
      <hr style={{ border: "2px solid red" }} />

      <ObjectChange />
      <hr style={{ border: "2px solid red" }} />

      <ArrayState />
      <hr style={{ border: "2px solid red" }} />

      <ArrObject />
      <hr style={{ border: "2px solid red" }} />

      <ColorPicker />
      <hr style={{ border: "2px solid red" }} />

      <ToDoList />
      <hr style={{ border: "2px solid red" }} />

      <UseEffectHook />
      <hr style={{ border: "2px solid red" }} />

      <DigitalClock />
      <hr style={{ border: "2px solid red" }} />

      <ComponentA />
      <hr style={{ border: "2px solid red" }} />

      <UseRefStateEffect />
      <hr style={{ border: "2px solid red" }} />

      <StopWatch />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
