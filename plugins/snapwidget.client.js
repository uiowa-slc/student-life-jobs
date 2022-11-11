export default () => {
  // manually add the script to the DOM
  const script = document.createElement("script");
  script.src = "https://snapwidget.com/js/snapwidget.js";
  document.head.appendChild(script);
};
