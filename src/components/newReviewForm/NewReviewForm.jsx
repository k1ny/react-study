import { useReducer } from "react";
import { MyButton } from "../../ui/MyButton";
import { useRef } from "react";
import { useEffect } from "react";

const initialState = {
  name: "",
  text: "",
  rating: "",
};

const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.setName:
      return { ...state, name: action.payload.name };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload.text };
    case FORM_ACTIONS.setRating:
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setName = (name) => {
    dispatch({ type: FORM_ACTIONS.setName, payload: { name } });
  };

  const setText = (text) => {
    dispatch({ type: FORM_ACTIONS.setText, payload: { text } });
  };

  const setRating = (rating) => {
    dispatch({ type: FORM_ACTIONS.setRating, payload: { rating } });
  };

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form>
      <label>
        Name:
        <input type="text" onChange={setName} ref={ref} />
      </label>

      <label>
        Text:
        <input type="text" onChange={setText} ref={ref} />
      </label>

      <label>
        Rating:
        <input type="number" max={10} onChange={setRating} ref={ref} />
      </label>
      <MyButton>send</MyButton>
    </form>
  );
};
