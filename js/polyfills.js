(function (w, d, n) {

  /**
   * URL
   */
  w.URL = (w.URL || w.webkitURL);

  /**
   * window.requestAnimationFrame
   */
  w.requestAnimationFrame = (w.requestAnimationFrame ||
                             w.mozRequestAnimationFrame ||
                             w.msRequestAnimationFrame ||
                             w.oRequestAnimationFrame ||
                             w.webkitRequestAnimationFrame ||
                             function (callback) { return w.setTimeout(callback, 1000 / 60); });

  /**
   * navigator.getUserMedia
   */
  n.getUserMedia = (n.getUserMedia ||
                    n.mozGetUserMedia ||
                    n.msGetUserMedia ||
                    n.webkitGetUserMedia);

})(window, document, navigator);
