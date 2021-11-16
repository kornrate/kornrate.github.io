import "./bootstrap1.css";
import ScrollBooster from "scrollbooster";
// go ahead and change some library source code!
// import ScrollBooster from "../libs/scrollbooster";

// CSS Powered Content Scroll
  new ScrollBooster({
    viewport: document.querySelector(".viewport"),
    content: document.querySelector(".content"),
    scrollMode: "transform"
  });


    $(document).ready(function() {
      alert("Hello World");
    });
  </script>