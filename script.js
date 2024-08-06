// ==UserScript==
// @name         AnimeFlV auto skip
// @namespace    https://grayapps.es/
// @version      0.0.2
// @description  This script will try to autoplay videos and also when its ending the episode, will reproduce next.
// @author       Javiergg
// @match        https://www3.animeflv.net/ver/*
// @icon         https://www3.animeflv.net/favicon.ico
// @grant        none
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function () {
  "use strict";

  // Use Jquery
  var $ = window.jQuery;
  
  // Function to handle received video data
  function handleVideoData(event) {
    if (event.data && event.data.type === "VIDEO_DATA") {
      const videoData = event.data.data;
      if (videoData.currentTime > 0 && videoData.duration > 0) {
        if (videoData.currentTime / videoData.duration > 0.95) {
          console.log("play next!");
          const btn = $(".CapNvNx");
          if (btn.size() > 0) {
            btn[0].click();
          }
        }
      }
    }
  }

  // Listen for messages from other scripts
  window.addEventListener("message", handleVideoData);
})();
