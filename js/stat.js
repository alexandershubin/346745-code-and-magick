'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var FONT = '16px PT Mono';
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var maxTime = getMaxElement(times);

//var renderText = function(ctx, x, y, color) {
//  ctx.fillStyle = color;
//  ctx.textBaseline = 'hanging';
//  ctx.fillText(x, y);
//};

window.renderStatistics = function(ctx, names, , times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

//  renderText(ctx, 'Ура! Вы победили!', '#000000', 130, 30);
//  renderText(ctx, 'Список результатов:', '#000000', 130, 50);

  ctx.fillStyle = '#000000';
  ctx.fillText('Ура! Вы победили!', 130, 30);
  ctx.fillText('список результатов:', 130, 50);

  var playerIndex = 0;
  var playerName = 'Вы';

  var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, BAR_HEIGHT);
  }

  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH + FONT_GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP, BAR_GAP + BAR_WIDTH, BAR_HEIGHT, BAR_HEIGHT);

  var playerIndex = 2;
  var playerName = 'Кекс';

  ctx.fillText('Кекс', CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + TEXT_WIDTH + FONT_GAP);
  ctx.fillStyle = 'blue';
  ctx.fillRect(160, BAR_GAP + BAR_WIDTH, BAR_HEIGHT, BAR_HEIGHT);

  var playerIndex = 3;
  var playerName = 'Катя';

  ctx.fillText('Катя', CLOUD_X + GAP + TEXT_WIDTH + BAR_GAP, CLOUD_Y + TEXT_WIDTH + FONT_GAP);
  ctx.fillRect(210, BAR_GAP + BAR_WIDTH, BAR_HEIGHT, BAR_HEIGHT);

  var playerIndex = 4;
  var playerName = 'Игорь';

  ctx.fillText('Игорь', CLOUD_X + GAP + TEXT_WIDTH + BAR_GAP + BAR_HEIGHT, CLOUD_Y + TEXT_WIDTH + FONT_GAP);
  ctx.fillRect(260, BAR_GAP + BAR_WIDTH, BAR_HEIGHT, BAR_HEIGHT);
};
