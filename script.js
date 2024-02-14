(function () {

    'use strict';

    /*---------------*/

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
                   window.mozRequestAnimationFrame ||
                   window.oRequestAnimationFrame ||
                   window.msRequestAnimationFrame ||
                   function(callback, element) {
                       window.setTimeout(callback, 1000 / 60);
                   };
        })();
    }

    // from http://stackoverflow.com/a/6466243/2011404
    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    function css(element, property) {
        var _property = window.getComputedStyle(element, null).getPropertyValue(property);
        if (_property.indexOf('px') != -1) { return parseInt(_property); }
        else { return _property; }
    }

    function Slice(elements) {
        return Array.prototype.slice.call(elements);
    }

    TweenLite.defaultEase = Expo.easeOut;

    /*---------------*/

    function TSlider() {
        console.log('fine!');
        this._init();
    }

    TSlider.prototype = {

        _init: function() {
            this.isFF = !!navigator.userAgent.match(/firefox/i);
            this.evttype = 'click';
            this.Slider = document.getElementById('slider');
            this.imagesCount = new Slice(this.Slider.querySelectorAll('img')).length;
            this.sldInterval = 6000;
            this.isAnimating = false;
            this.current = 0;
            this.minScale = 0.7;

            this._createSlider();
        },

        _createSlider: function() {
            var self = this;

            // Remaining code for creating the slider (same as before)

            window.addEventListener('keydown', function(e) {
                if (e.keyCode === 39) { // Right arrow key
                    self.current = self.current < self.imagesCount - 1 ? ++self.current : 0;
                    self._startSlider();
                } else if (e.keyCode === 37) { // Left arrow key
                    self.current = self.current > 0 ? --self.current : self.imagesCount - 1;
                    self._startSlider();
                }
            });

            document.getElementById('nextBtn').addEventListener('click', function() {
                self.current = self.current < self.imagesCount - 1 ? ++self.current : 0;
                self._startSlider();
            });

            document.getElementById('prevBtn').addEventListener('click', function() {
                self.current = self.current > 0 ? --self.current : self.imagesCount - 1;
                self._startSlider();
            });
        },

        // Remaining methods for the slider (same as before)
    };

    var s = new TSlider();

})();
