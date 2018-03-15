'use strict';

angular.module('tutorialApp', [])
  .controller('ArticlesCtrl', function($scope){
    $scope.articles = [
      { id: 1, name: 'It was a dark', price: 100 },
      { id: 2, name: 'and stormy night', price: 250 },
      { id: 3, name: 'the rain fell in torrents', price: 160 },
      { id: 4, name: 'except at occasional intervals', price: 330 },
      { id: 5, name: 'when it was checked by a violent gust', price: 255 },
      { id: 6, name: 'of wind', price: 116 },
      { id: 7, name: 'which swept up the streets', price: 156 },
      { id: 8, name: '(for it is in London that our scene lies)', price: 200 },
      { id: 9, name: ' rattling along the housetops', price: 430 },
      { id: 10, name: 'and fiercely agitating the scanty', price: 120 },
      { id: 11, name: 'flame of the lamps', price: 140 },
      { id: 12, name: 'that struggled against', price: 120 },
      { id: 13, name: 'the darkness', price: 100 }
    ];
  });
