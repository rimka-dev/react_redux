import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCatImg } from '../redux/reducers/dataImgReducer';

function Counter() {
  const [cartData, setCartData] = useState(0);
  //const count = useSelector(state => state.count);
  const { cart, count, imgURL } = useSelector(state => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.dataImgReducer
  }));
  console.log(count);
  const dispatch = useDispatch();
  const incrFunc = () => {
    dispatch({
      type: "INCR"
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR"
    });
  };
  
  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData
    })
  };

  useEffect(() => {
    dispatch(getCatImg())
  }, [])

  const updateImage = ()=> dispatch(getCatImg())

  return (
    <div>
      <h2>Je suis le component Counter</h2>
      <p>Ici on récupere le state qui provient du store grâce à useSelector()</p>
      <p>State : {count}</p>

      <p>Ici on utilise useDispatch() pour lancer une action qui va changer le state</p>
      <button onClick={incrFunc}>+1</button>
      <button onClick={decrFunc}>-1</button>
      <br />
      <br />
      <p>Votre panier : {cart}</p>
      <input
        value={cartData}
        onInput={e => setCartData(e.target.value)}
        type="number"
        name=""
        id="" />
      <br />
      <p>Ici on utilise un payload pour dispatcher l'information</p>
      <button onClick={addToCartFunc}>Ajouter au panier</button>
      <br />
      <p>On install redux thunk : npm install redux-thunk</p>
      <p>On utilise un middleware dans le store avec thunk pour gerer les appels asynchrone applyMiddleware(thunk)</p>
      <button onClick={updateImage} style={{margin:"10px"}}>actualiser image</button>
      <div>
      {imgURL && <img width={"50%"} src={imgURL} alt="cat" />}
      </div>
     
    </div>
  )
}

export default Counter;
