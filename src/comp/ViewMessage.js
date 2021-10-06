import email from './DisplaySimple.js';

export default function ViewMessage(selectFunc){
    //need to add method to select component by ID may need to rework DisplaySimple to be clickable to add an event.

    return(
        <li onClick=(() => {selectFunc(id)})> {email[id]} </li>
    )

}