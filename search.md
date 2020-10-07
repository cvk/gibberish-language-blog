---
layout: page
title: Search
permalink: /search
navworthy: false
---

<!-- Html Elements for Search -->
<br>
<div id="search-container">
<input type="text" id="search-input" placeholder="search...">
<hr>
<ul id="results-container"></ul>
</div>
<br>

<!-- Script pointing to search-script.js -->
<script src="/js/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>