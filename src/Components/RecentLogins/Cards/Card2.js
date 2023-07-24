import "./Card2.css";
import add from "./imgs/add-button.png";

function Card2() {
  return (
    <div class="cards">
      <div class="btn">
        <a href="#">
          <img class="plus" src={add}></img>
        </a>
      </div>
      <div class="add">
        <a href="#">Add account</a>
      </div>
    </div>
  );
}
export default Card2;
