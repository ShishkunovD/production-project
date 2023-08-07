import { useState } from "react"
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    return (
      <div>
        <h1>{count}</h1>
        <button className={classes.button} onClick={increase}>increase</button>
    </div>);
}