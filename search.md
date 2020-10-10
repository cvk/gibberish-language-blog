---
layout: page
title: Search
permalink: /search
navworthy: false
---
<div id="search-container">
<input type="text" id="search-input" placeholder="keyword, date...">
<p>
<ul id="results-container"></ul>
</p>
</div>
[![cc](/images/cc-icons/cc.svg "Attribution-NonCommercial-NoDerivatives 4.0 International"){:height="36px" width="36px"}](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode "by-nc-nd")
[![by](/images/cc-icons/by.svg "Attribution-NonCommercial-NoDerivatives 4.0 International"){:height="36px" width="36px"}](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode "by-nc-nd")
[![nc](/images/cc-icons/nc.svg "Attribution-NonCommercial-NoDerivatives 4.0 International"){:height="36px" width="36px"}](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode "by-nc-nd")
[![nd](/images/cc-icons/nd.svg "Attribution-NonCommercial-NoDerivatives 4.0 International"){:height="36px" width="36px"}](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode "by-nc-nd")

_Remix licenses are free by request._

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