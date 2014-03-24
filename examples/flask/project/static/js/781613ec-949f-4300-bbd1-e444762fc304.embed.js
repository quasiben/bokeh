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

    var all_models = [{"attributes": {"doc": null, "children": [{"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}], "id": "a90a1fde-1ce7-47a5-a8e4-2ea9760ab325"}, "type": "PlotContext", "id": "a90a1fde-1ce7-47a5-a8e4-2ea9760ab325"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d20cdf49-b180-4fd8-a0fe-7968ed7144f0"}, "doc": null, "id": "6a21ac43-700e-40e3-aa34-bf9f7c8d64ad", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6a21ac43-700e-40e3-aa34-bf9f7c8d64ad"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [27, 80, 51, 56, 88, 69, 81, 93, 68, 13, 84, 62, 50, 62, 97, 69, 50, 41, 78, 2, 74, 51, 50, 85, 5, 9, 41, 10, 30, 59, 83, 24, 48, 75, 68, 71, 26, 31, 60, 17, 37, 87, 42, 77, 7, 84, 44, 49, 67, 65, 64, 27, 38, 5, 21, 88, 63, 80, 17, 90, 83, 27, 34, 84, 55, 52, 39, 56, 48, 51, 2, 22, 42, 58, 70, 79, 100, 14, 37, 56, 26, 42, 20, 87, 54, 89, 24, 62, 10, 98, 28, 95, 50, 14, 88, 42, 52, 93, 42, 39], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "d20cdf49-b180-4fd8-a0fe-7968ed7144f0"}, "type": "ColumnDataSource", "id": "d20cdf49-b180-4fd8-a0fe-7968ed7144f0"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d4f094c4-0349-468f-a09f-4f010c45af5b"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "12734e75-f53b-410a-8e55-3624bd030912"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "ded86c94-6650-46ad-9f36-858aba1585ac"}, {"type": "LinearAxis", "id": "9c448c7a-7dff-410e-9ad9-d14c2ba8d655"}, {"type": "Grid", "id": "3980b80f-e6a8-4962-9a2d-e8c24c849ec5"}, {"type": "Grid", "id": "79c54db7-af14-4b48-9a64-06d810c4fa8b"}, {"type": "BoxSelection", "id": "636c5550-b1b9-4d08-8526-c1530848495f"}, {"type": "BoxSelection", "id": "4884c1be-d8ff-4d54-be73-e7d023f17b75"}, {"type": "Glyph", "id": "6a21ac43-700e-40e3-aa34-bf9f7c8d64ad"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "781613ec-949f-4300-bbd1-e444762fc304", "tools": [{"type": "PanTool", "id": "6325b98b-c4f7-4e85-8a79-eb8f0a73ab39"}, {"type": "WheelZoomTool", "id": "6ee68ad0-27b1-4242-9fd2-1c2656380fd6"}, {"type": "BoxZoomTool", "id": "2a19b75d-7cf9-4035-a73a-105c16e74a0b"}, {"type": "PreviewSaveTool", "id": "e23159f8-3dc3-447a-a544-46123fde2bd3"}, {"type": "ResizeTool", "id": "1fbb681a-d04b-492f-853a-9ff56d90fc58"}, {"type": "BoxSelectTool", "id": "a2a62f51-1360-4b0a-8461-e4fc023e551a"}, {"type": "ResetTool", "id": "16419a4f-44d0-4238-93c0-5f3ac089abd9"}], "canvas_width": 600}, "type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d20cdf49-b180-4fd8-a0fe-7968ed7144f0"}, "columns": ["x"]}], "id": "d4f094c4-0349-468f-a09f-4f010c45af5b", "doc": null}, "type": "DataRange1d", "id": "d4f094c4-0349-468f-a09f-4f010c45af5b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d20cdf49-b180-4fd8-a0fe-7968ed7144f0"}, "columns": ["y"]}], "id": "12734e75-f53b-410a-8e55-3624bd030912", "doc": null}, "type": "DataRange1d", "id": "12734e75-f53b-410a-8e55-3624bd030912"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "location": "min", "bounds": "auto", "doc": null, "id": "ded86c94-6650-46ad-9f36-858aba1585ac", "dimension": 0}, "type": "LinearAxis", "id": "ded86c94-6650-46ad-9f36-858aba1585ac"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "location": "min", "bounds": "auto", "doc": null, "id": "9c448c7a-7dff-410e-9ad9-d14c2ba8d655", "dimension": 1}, "type": "LinearAxis", "id": "9c448c7a-7dff-410e-9ad9-d14c2ba8d655"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "3980b80f-e6a8-4962-9a2d-e8c24c849ec5"}, "type": "Grid", "id": "3980b80f-e6a8-4962-9a2d-e8c24c849ec5"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "79c54db7-af14-4b48-9a64-06d810c4fa8b"}, "type": "Grid", "id": "79c54db7-af14-4b48-9a64-06d810c4fa8b"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "doc": null, "dimensions": ["width", "height"], "id": "6325b98b-c4f7-4e85-8a79-eb8f0a73ab39"}, "type": "PanTool", "id": "6325b98b-c4f7-4e85-8a79-eb8f0a73ab39"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "doc": null, "dimensions": ["width", "height"], "id": "6ee68ad0-27b1-4242-9fd2-1c2656380fd6"}, "type": "WheelZoomTool", "id": "6ee68ad0-27b1-4242-9fd2-1c2656380fd6"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "id": "2a19b75d-7cf9-4035-a73a-105c16e74a0b", "doc": null}, "type": "BoxZoomTool", "id": "2a19b75d-7cf9-4035-a73a-105c16e74a0b"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "2a19b75d-7cf9-4035-a73a-105c16e74a0b"}, "id": "636c5550-b1b9-4d08-8526-c1530848495f"}, "type": "BoxSelection", "id": "636c5550-b1b9-4d08-8526-c1530848495f"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "dataranges": [], "id": "e23159f8-3dc3-447a-a544-46123fde2bd3", "doc": null}, "type": "PreviewSaveTool", "id": "e23159f8-3dc3-447a-a544-46123fde2bd3"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "id": "1fbb681a-d04b-492f-853a-9ff56d90fc58", "doc": null}, "type": "ResizeTool", "id": "1fbb681a-d04b-492f-853a-9ff56d90fc58"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "6a21ac43-700e-40e3-aa34-bf9f7c8d64ad"}], "id": "a2a62f51-1360-4b0a-8461-e4fc023e551a"}, "type": "BoxSelectTool", "id": "a2a62f51-1360-4b0a-8461-e4fc023e551a"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "a2a62f51-1360-4b0a-8461-e4fc023e551a"}, "id": "4884c1be-d8ff-4d54-be73-e7d023f17b75"}, "type": "BoxSelection", "id": "4884c1be-d8ff-4d54-be73-e7d023f17b75"}, {"attributes": {"plot": {"type": "Plot", "id": "781613ec-949f-4300-bbd1-e444762fc304"}, "id": "16419a4f-44d0-4238-93c0-5f3ac089abd9", "doc": null}, "type": "ResetTool", "id": "16419a4f-44d0-4238-93c0-5f3ac089abd9"}];
    var modeltype = "PlotContext";
    var elementid = "fd91ee46-ec3a-4e16-918c-b8ff0048500a";
    var plotID = "781613ec-949f-4300-bbd1-e444762fc304";
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