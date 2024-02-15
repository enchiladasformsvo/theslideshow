(function () {
    'use strict';

    // Polyfill for requestAnimationFrame
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

    // Utility function to pad numbers with zeros
    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    // Get computed CSS property value
    function css(element, property) {
        var _property = window.getComputedStyle(element, null).getPropertyValue(property);
        if (_property.indexOf('px') !== -1) {
            return parseInt(_property);
        } else {
            return _property;
        }
    }

    // Convert NodeList to an array
    function Slice(elements) {
        return Array.prototype.slice.call(elements);
    }

    // Set default easing for TweenLite
    TweenLite.defaultEase = Expo.easeOut;

    /* TSlider constructor */
    function TSlider() {
        console.log('TSlider initialized!');
        this._init();
    }

    TSlider.prototype = {
        _init: function() {
            // Check if user agent is Firefox
            this.isFF = !!navigator.userAgent.match(/firefox/i);
            this.evttype = 'click'; // Event type (you can customize this)
            this.Slider = document.getElementById('slider'); // Slider container element
            this.imagesCount = new Slice(this.Slider.querySelectorAll('img')).length; // Number of images
            this.sldInterval = 6000; // Interval for automatic slide change
            this.isAnimating = false; // Flag to prevent multiple animations
            this.current = 0; // Current slide index
            this.minScale = 0.7; // Minimum scale for images

            this._createSlider();
        },

        _createSlider: function() {
            var self = this;

            // Remaining code for creating the slider (same as before)

            // Example: Add event listener for right arrow key (key code 39)
            window.addEventListener('keydown', function(e) {
                if (e.keyCode === 39) {
                    // Handle right arrow key press
                    // Example: self.current++;
                    // Add your logic here
                }
            });
        },

        // Other methods for slide transitions, scaling, etc.
        // ...

    };

    // Initialize TSlider
    var mySlider = new TSlider();

    // Additional code related to 'overlayBtn'
    // ...

})();
