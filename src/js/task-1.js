import { createBookMarkMarkup } from "./renderLinks";
import * as storage from "../helpers/storage.js";

const STORAGE_BOOKMARK_KEY = "bookmarks";
const linkList = storage.load(STORAGE_BOOKMARK_KEY) || [];

const bookMarksContainer = document.querySelector("#bookMarksContainer");
const form = document.querySelector("#form");

const renderBookMarks = (container, data) => {
  const markUp = createBookMarkMarkup(data);
  container.innerHTML = markUp;
};

renderBookMarks(bookMarksContainer, linkList)

const handleAddLinks = (event) => {
  event.preventDefault();
  const target = event.target;
  const link = target.bookMarkLink.value;
  if (link) {
    const linkObj = {
      link,
      id: crypto.randomUUID(),
    };
    linkList.push(linkObj);
    renderBookMarks(bookMarksContainer, linkList);
    storage.save(STORAGE_BOOKMARK_KEY, linkList);
  }
};

const handleLinkRemove = (event) => {
  const target = event.target;
  const link = target.closest("[data-id]");
  if (link) {
    const id = link.dataset.id;
    const indexToRemove = linkList.findIndex((link) => link.id === id);
    linkList.splice(indexToRemove, 1);
    renderBookMarks(bookMarksContainer, linkList);
    storage.save(STORAGE_BOOKMARK_KEY, linkList);
  }
};

bookMarksContainer.addEventListener("click", handleLinkRemove)
form.addEventListener("submit", handleAddLinks);
