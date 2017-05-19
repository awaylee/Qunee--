/**
* This file is part of Qunee for HTML5.
* Copyright (c) 2016 by qunee.com
**/
if(!window.getI18NString){getI18NString = function(s){return s;}}
var graph = new Q.Graph(canvas);
graph.zoomToOverview();

var gradient = new Q.Gradient(Q.Consts.GRADIENT_TYPE_LINEAR, ['#00d4f9', '#1ea6e6'], null, Math.PI/2);
var gradientAlpha = new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, [Q.toColor(0x55DDDDDD), Q.toColor(0x55777777), Q.toColor(0x55C0C0C0), Q.toColor(0x55555555)], [0, 0.6, 0.8, 1]);
gradientAlpha.tx = -20;
gradientAlpha.ty = -30;
var SIZE = 70;
var WIDTH = 900;
var MARGIN_V = SIZE * 1.5;
var MARGIN_H = SIZE * 1.2;
var shapes = Q.Shapes.getAllShapes(-SIZE/2, -SIZE/2, SIZE, SIZE);
var x = 0, y = 0;
for(var name in shapes){
    if(x > WIDTH){
        x = 0;
        y += MARGIN_V;
    }
    var shape = graph.createShapeNode(name, shapes[name], x, y);
    shape.setStyle(Q.Styles.LAYOUT_BY_PATH, false);
    shape.setStyle(Q.Styles.SHAPE_STROKE, 4);
    shape.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#e9e9e9");
    if(name != Q.Consts.SHAPE_ARROW_OPEN){
        shape.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, gradient);
    }else{
        shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, null);
    }
    x += MARGIN_H;
}

x = 0;
y += MARGIN_V;

for(var name in shapes){
    if(x > WIDTH){
        x = 0;
        y += MARGIN_V * 0.7;
    }
    var shape = graph.createShapeNode(name, x, y);
    shape.lineTo(SIZE, 0);
    shape.rotate = Math.PI / 4;
    shape.setStyle(Q.Styles.ARROW_TO, name);
    shape.setStyle(Q.Styles.LAYOUT_BY_PATH, true);
    shape.setStyle(Q.Styles.ARROW_TO_FILL_COLOR, "#000");
    shape.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000");
    if(name != Q.Consts.SHAPE_ARROW_OPEN){
        shape.setStyle(Q.Styles.ARROW_TO_FILL_COLOR, "#000");
        shape.setStyle(Q.Styles.ARROW_TO_LINE_JOIN, 'miter');
    }
    x += MARGIN_H;
}

x = 0;
y += MARGIN_V * 0.7;
var i = 0;
while(i <= 10){
    var shape = graph.createShapeNode(""+(i+3), Q.Shapes.createRegularShape(i + 3, SIZE/2, SIZE/2, SIZE/2), x, y);
    shape.setStyle(Q.Styles.SHAPE_STROKE, 1);
    shape.setStyle(Q.Styles.LAYOUT_BY_PATH, false);
    shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, createColor(i / 10));
    shape.setStyle(Q.Styles.SHAPE_STROKE_STYLE, createColor((10 - i) / 10));
    x += MARGIN_H;
    ++i;
}

function createColor(percent){
//    var r1 = 0xfc, g1 = 0xfb, b1 = 0x9b;
//    var r2 = 0x28, g2 = 0x98, b2 = 0xe0;
    var r2 = 0xfc, g2 = 0xfb, b2 = 0x9b;
    var r1 = 0x28, g1 = 0x98, b1 = 0xe0;
    var r = r1 + (r2 - r1) * percent;
    var g = g1 + (g2 - g1) * percent;
    var b = b1 + (b2 - b1) * percent;
    return "rgb(" + (r|0) + "," + (g|0) + "," + (b|0) + ")";
}