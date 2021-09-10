import moment from "moment";
import { isEmpty, sumBy } from "lodash";
import { readObject, setObject } from "./localStorage";

const onResize = () => {
    if (window.screen.width > 650) {
      alert("Desktop mode not implemented yet");
      localStorage.removeItem("video");
      window.location.reload();
    };
};

export const checkForResizing = () => window.addEventListener('resize', onResize);

export const extractEvent = () => {
  const path = window.location.pathname;
  const hashToExtract = "/event/";
  return path.slice(hashToExtract.length)
};

export const eventNotStarted = date => moment().isBefore(date);

export const eventFinished = date => moment().isAfter(date);

export const dateDiff = date => {
  const diffOnMS = moment().diff(date);
  return moment.duration(diffOnMS);
};

export const deletMinus = string => string.replace("-", "");

export const isLogged = () => readObject("user").token;

export const guidGenerator = () => {
  const S4 = () => {
    return (((1 + Math.random()) *0x10000) | 0)
    .toString(16)
    .substring(1)
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() +"-" + S4() + S4() + S4());
};

export const getRandomString = length => {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) 
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  return result;
};

const productPrice = product => {
  const amountOrOne = amount => !amount ? 1 : amount;
  return product.price * amountOrOne(product.amount);
};

export const calculatetotal = () => {
  const cart = !isEmpty(readObject("cart")) || [];
  return sumBy(cart, product => productPrice(product)) || 0;
};

export const addOneMoreOf = product => {
  const cart = !isEmpty(readObject("cart")) || [];
  cart.forEach(prod => {
    if (prod.id === product.id) {
      if (prod.amount) prod.amount = prod.amount + 1
      else prod.amount = 1;
    }
  });
  setObject("cart", cart);
};

export const deleteOneOf = product => {
  const cart = !isEmpty(readObject("cart")) || [];
  cart.forEach(prod => {
    if (prod.id === product.id) {
      if (prod.amount) prod.amount = prod.amount - 1
      else prod.amount = 0;
    }
  });
  setObject("cart", cart);
};