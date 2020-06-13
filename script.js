"use strict";

(function() {

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE

  /**
   * Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   * Download my resume when the "Resume" buttom is clicked.
   */
  function init() {
    qs("button").addEventListener("click", download);
  }

  /**
   * Downloads the certain file with the given href and filename
   * Creates an unvisable link linked to the resume file and removes it after
   * conducting demands of clicking the link
   * @param {void} void - without parameter
   * @return {void} - without return values
   */
  function download() {
    const link = gen("a");

    document.body.appendChild(link);
    link.href = "yihanlin-Resume.pdf";
    link.download = "Yihan Lin Resume";
    link.click();
    document.body.removeChild(link);
  }

  /** ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();
