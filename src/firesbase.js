import moment from "moment";
import database from "./Utils/firebaseConnection";
import { guidGenerator } from "./Utils/globalHelpers";

export const initFBListener = (collection, document, callBack) => {
  return database         
    .collection(collection)
    .doc(document)
    .onSnapshot(callBack);
};

// LIKES
export const getLikes = (organization, event) => {
  return database
    .collection(`organization/${organization}/event/${event}/likes`)
    .get()
};

export const setLike = (organization, event) => {
  const newGuid = guidGenerator();
  return database
  .collection(`organization/${organization}/event/${event}/likes`)
  .doc(newGuid)
  .set({ "like": "true" });
};

export const likesListener = (organization, event, callBack) => {
  return database         
    .collection(`organization/${organization}/event/${event}/likes`)
    .onSnapshot(callBack);
};

// VIEWERS
export const getViewers = (organization, event) => {
  const aMinuteAgoInMillis = moment().subtract(1, 'minutes').valueOf();
  return database
    .collection(`organization/${organization}/event/${event}/viewers`)
    .where("timeStamp", ">", aMinuteAgoInMillis)
    .get()
};

export const addViewer = (organization, event) => {
  const newGuid = guidGenerator();
  const nowInMillis = moment().valueOf();
  return database
  .collection(`organization/${organization}/event/${event}/viewers`)
  .doc(newGuid)
  .set({ "timeStamp":  nowInMillis });
};

// FEATURED
export const getFeatured = (organization, event) => {
  return database
    .collection(`organization/${organization}/event/${event}/featured`)
    .get()
};

// CHAT
export const getChat = (organization, event) => {
  return database
    .collection(`organization/${organization}/event/${event}/chats`)
    .get()
};

export const sendChat = (organization, event, message, name) => {
  const newGuid = guidGenerator();
  const newGuid2 = guidGenerator();
  return database
    .collection(`organization/${organization}/event/${event}/chats`)
    .doc(newGuid)
    .set({
      "id": newGuid2,
      "reply_of": null,
      "name": name,
      "message": message,
      "created": moment().toDate(),
    });
};

export const chatListener = (organization, event, callBack) => {
  return database         
    .collection(`organization/${organization}/event/${event}/chats`)
    .onSnapshot(callBack);
};