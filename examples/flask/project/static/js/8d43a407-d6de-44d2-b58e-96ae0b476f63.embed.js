console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "http://localhost:5006/bokeh/static/";
    if (host!=""){

        staticRootUrl = "//" + host + "/bokehjs/static/";
        var bokehJSUrl = staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}], "id": "2855b3b6-195e-4b57-9ee2-befd763a781a"}, "type": "PlotContext", "id": "2855b3b6-195e-4b57-9ee2-befd763a781a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "31e23ad6-4cf6-4d9e-aa06-be576df472c2"}, "doc": null, "id": "4d6c648d-0882-413a-b7b3-6cf3e1494018", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "4d6c648d-0882-413a-b7b3-6cf3e1494018"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [48, 27, 4, 40, 44, 66, 95, 82, 19, 70, 68, 13, 98, 77, 4, 18, 16, 34, 83, 44, 6, 12, 27, 25, 57, 14, 71, 17, 40, 62, 50, 99, 74, 46, 92, 29, 96, 42, 13, 21, 51, 86, 50, 100, 15, 84, 46, 90, 78, 30, 17, 40, 34, 47, 21, 32, 77, 93, 13, 79, 89, 7, 67, 3, 68, 86, 87, 49, 51, 28, 12, 77, 92, 60, 48, 76, 0, 0, 90, 100, 81, 26, 80, 94, 68, 10, 25, 59, 35, 44, 21, 4, 4, 5, 66, 22, 67, 53, 23, 99], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "31e23ad6-4cf6-4d9e-aa06-be576df472c2"}, "type": "ColumnDataSource", "id": "31e23ad6-4cf6-4d9e-aa06-be576df472c2"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b4174496-9327-4cad-952d-68ce722cf4aa"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "5118ca85-64ce-4bda-beb6-b370e3750ec8"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "b7ab2b86-24f7-4bd3-9cad-2220968d5c2c"}, {"type": "LinearAxis", "id": "4473a7e9-c493-448f-bb07-929e1aa68b0c"}, {"type": "Grid", "id": "dfe524ec-530f-44c6-8ab1-5a0063700258"}, {"type": "Grid", "id": "043a5be0-6da0-46d4-9a05-3e6680fbd79b"}, {"type": "BoxSelection", "id": "5e04f6ae-2469-4142-a3ca-2b17eb77e5b3"}, {"type": "BoxSelection", "id": "3ea3f665-c5b8-4eed-9202-09b25bb32c84"}, {"type": "Glyph", "id": "4d6c648d-0882-413a-b7b3-6cf3e1494018"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63", "tools": [{"type": "PanTool", "id": "c92fdd23-c502-42bd-86fe-d025d0d6c2e3"}, {"type": "WheelZoomTool", "id": "457e5b63-6d1d-4968-a2fc-f43361936b59"}, {"type": "BoxZoomTool", "id": "ed0ade15-2a00-4800-b314-d3fd4e7b45c7"}, {"type": "PreviewSaveTool", "id": "2b6f48e9-6308-48b1-b2bf-d824c2056588"}, {"type": "ResizeTool", "id": "4cab7cca-ccf0-4c54-a14c-c349cbe61108"}, {"type": "BoxSelectTool", "id": "44b85255-f371-48f1-95c6-f2d35208d220"}, {"type": "ResetTool", "id": "39df3562-5b0b-415a-bcb9-29e8df3a28a3"}], "canvas_width": 600}, "type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "31e23ad6-4cf6-4d9e-aa06-be576df472c2"}, "columns": ["x"]}], "id": "b4174496-9327-4cad-952d-68ce722cf4aa", "doc": null}, "type": "DataRange1d", "id": "b4174496-9327-4cad-952d-68ce722cf4aa"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "31e23ad6-4cf6-4d9e-aa06-be576df472c2"}, "columns": ["y"]}], "id": "5118ca85-64ce-4bda-beb6-b370e3750ec8", "doc": null}, "type": "DataRange1d", "id": "5118ca85-64ce-4bda-beb6-b370e3750ec8"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "location": "min", "bounds": "auto", "doc": null, "id": "b7ab2b86-24f7-4bd3-9cad-2220968d5c2c", "dimension": 0}, "type": "LinearAxis", "id": "b7ab2b86-24f7-4bd3-9cad-2220968d5c2c"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "location": "min", "bounds": "auto", "doc": null, "id": "4473a7e9-c493-448f-bb07-929e1aa68b0c", "dimension": 1}, "type": "LinearAxis", "id": "4473a7e9-c493-448f-bb07-929e1aa68b0c"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "dfe524ec-530f-44c6-8ab1-5a0063700258"}, "type": "Grid", "id": "dfe524ec-530f-44c6-8ab1-5a0063700258"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "043a5be0-6da0-46d4-9a05-3e6680fbd79b"}, "type": "Grid", "id": "043a5be0-6da0-46d4-9a05-3e6680fbd79b"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "doc": null, "dimensions": ["width", "height"], "id": "c92fdd23-c502-42bd-86fe-d025d0d6c2e3"}, "type": "PanTool", "id": "c92fdd23-c502-42bd-86fe-d025d0d6c2e3"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "doc": null, "dimensions": ["width", "height"], "id": "457e5b63-6d1d-4968-a2fc-f43361936b59"}, "type": "WheelZoomTool", "id": "457e5b63-6d1d-4968-a2fc-f43361936b59"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "id": "ed0ade15-2a00-4800-b314-d3fd4e7b45c7", "doc": null}, "type": "BoxZoomTool", "id": "ed0ade15-2a00-4800-b314-d3fd4e7b45c7"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "ed0ade15-2a00-4800-b314-d3fd4e7b45c7"}, "id": "5e04f6ae-2469-4142-a3ca-2b17eb77e5b3"}, "type": "BoxSelection", "id": "5e04f6ae-2469-4142-a3ca-2b17eb77e5b3"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "dataranges": [], "id": "2b6f48e9-6308-48b1-b2bf-d824c2056588", "doc": null}, "type": "PreviewSaveTool", "id": "2b6f48e9-6308-48b1-b2bf-d824c2056588"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "id": "4cab7cca-ccf0-4c54-a14c-c349cbe61108", "doc": null}, "type": "ResizeTool", "id": "4cab7cca-ccf0-4c54-a14c-c349cbe61108"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "4d6c648d-0882-413a-b7b3-6cf3e1494018"}], "id": "44b85255-f371-48f1-95c6-f2d35208d220"}, "type": "BoxSelectTool", "id": "44b85255-f371-48f1-95c6-f2d35208d220"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "44b85255-f371-48f1-95c6-f2d35208d220"}, "id": "3ea3f665-c5b8-4eed-9202-09b25bb32c84"}, "type": "BoxSelection", "id": "3ea3f665-c5b8-4eed-9202-09b25bb32c84"}, {"attributes": {"plot": {"type": "Plot", "id": "8d43a407-d6de-44d2-b58e-96ae0b476f63"}, "id": "39df3562-5b0b-415a-bcb9-29e8df3a28a3", "doc": null}, "type": "ResetTool", "id": "39df3562-5b0b-415a-bcb9-29e8df3a28a3"}];
    var modeltype = "PlotContext";
    var elementid = "28ec296d-1f57-4091-9b37-3029f68595a0";
    var plotID = "8d43a407-d6de-44d2-b58e-96ae0b476f63";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.injectCss(staticRootUrl);
        Bokeh.HasProperties.prototype.sync = Backbone.sync
        embed_core.search_and_plot(dd);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));