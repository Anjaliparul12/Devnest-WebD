const Card = (props) =>{
    return(
 <div className="container">
  <div class="Card">
  <h2 className="title">{props.title}</h2>
  <p>you have consumed {props.amount} cals today</p>
  </div>
  </div>
);
}

export default Card;