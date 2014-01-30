angular.module('imageupload', [])
  .directive('image', function() {
    'use strict';

    var URL = window.URL || window.webkitURL;

    var getResizeArea = function () {
      var resizeAreaId = 'fileupload-resize-area',
        resizeArea = document.getElementById(resizeAreaId);

      if (!resizeArea) {
        resizeArea = document.createElement('canvas');
        resizeArea.id = resizeAreaId;
        resizeArea.style.visibility = 'hidden';
        document.body.appendChild(resizeArea);
      }

      return resizeArea;
    };

    var resizeImage = function (origImage, options, imageResult) {
      var width = options.resizeWidth || 300,
        height = options.resizeHeight || 300,
        canvas = getResizeArea(),
        orientation = imageResult.exif.Orientation || 1;

      //draw image on canvas
      new window.MegaPixImage(origImage).render(canvas, {
        maxWidth: width,
        maxHeight: height,
        orientation: orientation
      });

      // get the data from canvas as 70% jpg
      return canvas.toDataURL('image/jpg', 0.7);
    };

    return {
      restrict: 'A',
      scope: {
        image: '=',
        resizeHeight: '@?',
        resizeWidth: '@?',
      },
      link: function postLink(scope, element) {
        var applyScope = function(imageResult) {
          scope.$apply(function() {
            scope.image = imageResult;
          });
        };

        element.bind('change', function (evt) {
          var file = evt.target.files[0];

          window.EXIF.getData(file, function() {
            var exifData = this.exifdata,
              imageResult = {
                file: file,
                url: URL.createObjectURL(file),
                exif: exifData
              },
              image = new Image();

            image.onload = function() {
              var dataURL = resizeImage(image, scope, imageResult);
              imageResult.resized = {
                dataURL: dataURL,
                type: dataURL.match(/:(.+\/.+);/)[1],
                exif: exifData
              };
              applyScope(imageResult);
            };

            image.src = imageResult.url;
          });
        });
      }
    };
  });
