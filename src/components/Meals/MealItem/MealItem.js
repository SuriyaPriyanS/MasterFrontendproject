import classes from './MealItem.module.css';
import MealItemForm
 from './MealItemForm';
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
        <section>
        <div>
            <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{ props.description }</div>
        <div className={classes.price}>{price}</div>
        
        </section>
        <div><MealItemForm /></div>
    </li>
  );
};

export default MealItem;
