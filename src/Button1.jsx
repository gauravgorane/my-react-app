function Button1() {
  const handleCLick = () => {
    console.log("Ouchh.....!!!!!!");
  };
  const handleCLick2 = (name) => {
    console.log(`${name} stop clicking me`);
  };

  let count = 0;

  const handleCLick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you click me ${count} time's`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };

  const handleCLick4 = (e) => (e.target.textContent = "Ouch......!!!!");

  return <button onClick={(e) => handleCLick4(e)}>Click Button 😊</button>;
}

export default Button1;
