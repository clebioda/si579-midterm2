import { useState } from 'react';

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

 let COUNT_KEY = 'count';
 let count = 0;
 const savedCount = localStorage.getItem(COUNT_KEY);
 if(savedCount !== null) {
     const parsedCount = JSON.parse(savedCount);
     count = parsedCount;
 }

export function Problem () {
    const [currentCount, setCount] = useState(count);

    function updateCount() {
        const updatedCount = currentCount + 1;
        setCount(updatedCount);
        const countString = JSON.stringify(updatedCount);
        localStorage.setItem(COUNT_KEY, countString);
    }

    function resetCount() {
        setCount(0);
        localStorage.setItem(COUNT_KEY, '0');
    }
    
    return <div className="btn-group">
            <button className="btn btn-primary" onClick={updateCount} >Clicked {currentCount} time{currentCount !== 1 && 's'}</button>
            <button className="btn btn-secondary" onClick={resetCount}>Reset</button>
        </div>;
    ;
}