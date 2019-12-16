if (window.location.hostname != "localhost")
  window.Tooltip||function(t,e){var o={
  url:"https://cdn.tooltip.io/static/player.js",
  key:"189f262e-7c0e-4a30-b1dd-1e425f03fe5e",
  async:true
  };
  window.Tooltip={cs:[],_apiKey:o.key};for(
  var r=["identify","goal","updateUserData","start","stop","refresh","show","hide","on"],
  i={},n=0;n<r.length;n++){var a=r[n];i[a]=function(t){return function(){var e=Array.prototype.slice.call(arguments);
  window.Tooltip.cs.push({method:t,args:e})}}(a)}window.Tooltip.API=i;var n=t.createElement(e),s=t.getElementsByTagName(e)[0];
  n.type="text/javascript",n.async=o.async,s.parentNode.insertBefore(n,s),n.src=o.url}(document,"script");
