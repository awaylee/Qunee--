/**
* This file is part of Qunee for HTML5.
* Copyright (c) 2016 by qunee.com
**/
if(!window.getI18NString){getI18NString = function(s){return s;}}
var graph = new Q.Graph(canvas);
var hello = graph.createNode("Hello", -100, -50);
hello.image = Q.Graphs.server;
var qunee = graph.createNode("Qunee", 100, 50);
var edge = graph.createEdge("Hello\nQunee", hello, qunee);

edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
edge.setStyle(Q.Styles.LABEL_BORDER, 1);
edge.setStyle(Q.Styles.LABEL_POINTER, true);
edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_VERTICAL);