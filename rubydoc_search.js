var API_KEY = "AIzaSyCPQGZImN1P6OZ_szYe7oWpSQgG0Rie9Ns";

var currentQueryString;
var resultCache = {};

chrome.omnibox.onInputChanged.addListener(_.debounce(function (queryText,
  suggestCallback) {
  console.log("Changed:", queryText);

  // Prepend preferred version to query if it exists
  preferredVersion = localStorage.getItem("rdoc_preferred_version");
  if (preferredVersion) {
    queryText = preferredVersion + " " + queryText;
  }

  currentQueryString = queryText;

  if (!queryText) return;

  function dataHandler(data) {
    if (currentQueryString !== queryText) {
      // We went past this query, but cache it anyway
      resultCache[queryText] = data;
      return;
    }

    var itemCountToConsider;

    _(data.items).
    chain().
    tap(function (arr) {
      itemCountToConsider = arr.length < 5 ? arr.length : 5
    }).
    first(itemCountToConsider).
    map(function (item) {
      var title = item.htmlTitle.replace(/<b>/gi, "").replace(/<\/b>/gi, "");
      title = title.replace(/(.*)\((Ruby [0-9\.]*)\)[ ]*- Ruby-Doc/gi,
        "$2 - <match>$1</match>");
      var description = "<dim>" + title + "</dim> - <url>" + item.htmlFormattedUrl +
        "</url>";
      return {
        content: item.link,
        description: description
      };
    }).
    tap(suggestCallback);
  }

  // Check if we cached results for this query
  if (resultCache[queryText]) {
    dataHandler(resultCache[queryText]);
    return;
  }

  getResults(queryText);

  function getResults(queryText) {
    $.getJSON("https://www.googleapis.com/customsearch/v1?callback=?", {
      key: API_KEY,
      alt: "json",
      q: queryText,
      num: 5,
      lr: "lang_en",
      cx: "008550084672749702097:2xvl9fhluys",
      fields: "items(formattedUrl,htmlFormattedUrl,htmlTitle,link,title)"
    },
      dataHandler);
  }

}, 250));



chrome.omnibox.onInputEntered.addListener(function (queryText) {
  // Navigate user to selected page or the search page
  console.log("Entered:", queryText);

  var url;

  if (queryText.indexOf("http://") === -1 && queryText.indexOf("https://") === -
    1) {
    url =
      "http://ruby-doc.com/search.html?cx=011815814100681837392%3Awnccv6st5qk&q=" +
      encodeURIComponent(queryText);
  } else {
    url = queryText;
  }

  chrome.tabs.update({
    url: url
  });
});

chrome.omnibox.onInputStarted.addListener(function () {
  console.log("Started");
});

chrome.omnibox.onInputCancelled.addListener(function () {
  currentQueryString = "";
  console.log("Cancelled");
});