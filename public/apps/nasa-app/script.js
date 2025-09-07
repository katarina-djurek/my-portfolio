(function () {
  "use strict";

  const mainEl = document.querySelector("main");
  const nextButtonEl = document.querySelector(".next-button");
  const prevButtonEl = document.querySelector(".prev-button");
  const articlesEndpoint = "https://api.spaceflightnewsapi.net/v4/articles";
  let nextUrl = "";
  let prevUrl = "";

  addEventListeners();

  const fetchArticles = async (articlesEndpoint) => {
    const request = await fetch(articlesEndpoint);
    const parsedData = await request.json();
    const results = parsedData.results;
    nextUrl = parsedData.next;
    prevUrl = parsedData.previous;

    for (let i = 0; i < results.length; i++) {
      const article = results[i];
      const title = article.title;
      const imageUrl = article.image_url;
      const summary = article.summary;

      const divArticleEl = createArticleElement(title, imageUrl, summary);

      mainEl.appendChild(divArticleEl);
      updateNavButtonStates();
    }
  };

  fetchArticles(articlesEndpoint);

  function createArticleElement(title, imageUrl, summary) {
    const divArticleEl = document.createElement("div");
    divArticleEl.classList.add("article-container");

    const titleEl = createTitleElement(title);
    const imageEl = createImageElement(imageUrl);
    const summaryEl = createSummaryElement(summary);
    const articleElements = [titleEl, imageEl, summaryEl];
    attachElements(divArticleEl, articleElements);
    return divArticleEl;
  }

  function createTitleElement(title) {
    const titleEl = document.createElement("h2");
    titleEl.innerText = title;
    return titleEl;
  }

  function createImageElement(imageUrl) {
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", imageUrl);
    imageEl.classList.add("article-image");
    return imageEl;
  }

  function createSummaryElement(summary) {
    const summaryEl = document.createElement("p");
    summaryEl.innerText = summary;
    return summaryEl;
  }

  function attachElements(divArticleEl, articleElements) {
    for (let i = 0; i < articleElements.length; i++) {
      divArticleEl.appendChild(articleElements[i]);
    }
  }

  function addEventListeners() {
    nextButtonEl.onclick = function () {
      mainEl.replaceChildren();
      fetchArticles(nextUrl);
    };

    prevButtonEl.onclick = function () {
      if (prevUrl != null) {
        mainEl.replaceChildren();
        fetchArticles(prevUrl);
      }
    };
  }

  function updateNavButtonStates() {
    if (prevUrl == null) {
      prevButtonEl.disabled = true;
      prevButtonEl.classList.add("disabled-button");
    } else {
      prevButtonEl.disabled = false;
      prevButtonEl.classList.remove("disabled-button");
    }

    if (nextUrl == null) {
      nextButtonEl.disabled = true;
      nextButtonEl.classList.add("disabled-button");
    } else {
      nextButtonEl.disabled = false;
      nextButtonEl.classList.remove("disabled-button");
    }
  }
})();
