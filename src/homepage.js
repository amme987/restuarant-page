import Food from "./homepage.jpg";

const initialLoad = () => {
  const content = document.getElementById("content");

  const main = document.createElement("main");
  content.appendChild(main);
  const img = new Image();
  img.src = Food;
  //   main.appendChild(img);
  const aside = document.createElement("aside");
  main.appendChild(aside).textContent = "Fast, fresh, and forkable";
  const p = document.createElement("p");
  main.appendChild(p).textContent =
    "The Hungry Fork is a convenient and affordable restaurant that offers a variety of dishes that can be eaten with a fork. Whether you want a salad, a pasta, a stir-fry, or a pie, you will find it at The Hungry Fork. Our food is made with fresh and quality ingredients and prepared in minutes. No matter how busy you are, you can always grab a delicious and satisfying meal at The Hungry Fork.";
};
export default initialLoad;
