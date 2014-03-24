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

    var all_models = [{"attributes": {"doc": null, "children": [{"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}], "id": "361e2de1-bd81-4614-8f59-3d51bbba1e7c"}, "type": "PlotContext", "id": "361e2de1-bd81-4614-8f59-3d51bbba1e7c"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "a6c1ff95-a64e-4861-a344-f7f1f5061114"}, "type": "Grid", "id": "a6c1ff95-a64e-4861-a344-f7f1f5061114"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [42, 94, 78, 34, 39, 28, 84, 33, 60, 36, 29, 1, 91, 42, 73, 43, 86, 68, 20, 27, 44, 36, 11, 46, 55, 57, 42, 68, 39, 54, 73, 10, 44, 27, 74, 87, 75, 40, 4, 22, 50, 15, 19, 66, 3, 100, 61, 90, 60, 60, 21, 81, 32, 95, 65, 41, 53, 85, 64, 5, 69, 25, 82, 33, 52, 99, 11, 47, 51, 8, 61, 45, 33, 65, 48, 77, 56, 74, 24, 87, 16, 29, 57, 47, 93, 85, 85, 0, 85, 30, 23, 82, 35, 44, 91, 3, 22, 61, 66, 46], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "b5450b0c-19e2-424d-857c-69713f7fe4d1"}, "type": "ColumnDataSource", "id": "b5450b0c-19e2-424d-857c-69713f7fe4d1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b06ee33a-fe50-48b4-a0ff-325970b9438f"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "c3c1441d-2f8b-4845-8d88-9ba29e4f83b9"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "c6ec350f-3f1c-422a-819c-b6465950f346"}, {"type": "LinearAxis", "id": "bf9015a8-44ab-4cfa-b60d-df2b708a1392"}, {"type": "Grid", "id": "babfb8d2-a1f5-48e1-9c94-c98e5ccd9a97"}, {"type": "Grid", "id": "a6c1ff95-a64e-4861-a344-f7f1f5061114"}, {"type": "BoxSelection", "id": "4f351d7c-0263-45d6-a4a2-21dd15b32209"}, {"type": "BoxSelection", "id": "323835d6-a92e-4006-9c23-098591a22c0a"}, {"type": "Glyph", "id": "6b07fd12-5bf0-45aa-99c1-27348e8a30c6"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec", "tools": [{"type": "PanTool", "id": "72581d58-b4c5-47d9-ba50-8f17cb1863ea"}, {"type": "WheelZoomTool", "id": "fd30d2b5-a77c-4186-ab12-81e7c470e44e"}, {"type": "BoxZoomTool", "id": "69ed9f45-fa6a-4134-8034-9dc10f96b4d1"}, {"type": "PreviewSaveTool", "id": "f88f8d9f-3da7-4468-861a-b57a7422f621"}, {"type": "ResizeTool", "id": "3590892f-6e42-4779-bbdc-b3a690a2a3e4"}, {"type": "BoxSelectTool", "id": "a7104143-432f-4d5d-a82f-29ceb4510bb4"}, {"type": "ResetTool", "id": "8d7eefc6-5707-4eb7-9812-284262d705d5"}], "canvas_width": 600}, "type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b5450b0c-19e2-424d-857c-69713f7fe4d1"}, "columns": ["x"]}], "id": "b06ee33a-fe50-48b4-a0ff-325970b9438f", "doc": null}, "type": "DataRange1d", "id": "b06ee33a-fe50-48b4-a0ff-325970b9438f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b5450b0c-19e2-424d-857c-69713f7fe4d1"}, "columns": ["y"]}], "id": "c3c1441d-2f8b-4845-8d88-9ba29e4f83b9", "doc": null}, "type": "DataRange1d", "id": "c3c1441d-2f8b-4845-8d88-9ba29e4f83b9"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "location": "min", "bounds": "auto", "doc": null, "id": "c6ec350f-3f1c-422a-819c-b6465950f346", "dimension": 0}, "type": "LinearAxis", "id": "c6ec350f-3f1c-422a-819c-b6465950f346"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "location": "min", "bounds": "auto", "doc": null, "id": "bf9015a8-44ab-4cfa-b60d-df2b708a1392", "dimension": 1}, "type": "LinearAxis", "id": "bf9015a8-44ab-4cfa-b60d-df2b708a1392"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "babfb8d2-a1f5-48e1-9c94-c98e5ccd9a97"}, "type": "Grid", "id": "babfb8d2-a1f5-48e1-9c94-c98e5ccd9a97"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b5450b0c-19e2-424d-857c-69713f7fe4d1"}, "doc": null, "id": "6b07fd12-5bf0-45aa-99c1-27348e8a30c6", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6b07fd12-5bf0-45aa-99c1-27348e8a30c6"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "doc": null, "dimensions": ["width", "height"], "id": "72581d58-b4c5-47d9-ba50-8f17cb1863ea"}, "type": "PanTool", "id": "72581d58-b4c5-47d9-ba50-8f17cb1863ea"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "doc": null, "dimensions": ["width", "height"], "id": "fd30d2b5-a77c-4186-ab12-81e7c470e44e"}, "type": "WheelZoomTool", "id": "fd30d2b5-a77c-4186-ab12-81e7c470e44e"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "id": "69ed9f45-fa6a-4134-8034-9dc10f96b4d1", "doc": null}, "type": "BoxZoomTool", "id": "69ed9f45-fa6a-4134-8034-9dc10f96b4d1"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "69ed9f45-fa6a-4134-8034-9dc10f96b4d1"}, "id": "4f351d7c-0263-45d6-a4a2-21dd15b32209"}, "type": "BoxSelection", "id": "4f351d7c-0263-45d6-a4a2-21dd15b32209"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "dataranges": [], "id": "f88f8d9f-3da7-4468-861a-b57a7422f621", "doc": null}, "type": "PreviewSaveTool", "id": "f88f8d9f-3da7-4468-861a-b57a7422f621"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "id": "3590892f-6e42-4779-bbdc-b3a690a2a3e4", "doc": null}, "type": "ResizeTool", "id": "3590892f-6e42-4779-bbdc-b3a690a2a3e4"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "6b07fd12-5bf0-45aa-99c1-27348e8a30c6"}], "id": "a7104143-432f-4d5d-a82f-29ceb4510bb4"}, "type": "BoxSelectTool", "id": "a7104143-432f-4d5d-a82f-29ceb4510bb4"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "a7104143-432f-4d5d-a82f-29ceb4510bb4"}, "id": "323835d6-a92e-4006-9c23-098591a22c0a"}, "type": "BoxSelection", "id": "323835d6-a92e-4006-9c23-098591a22c0a"}, {"attributes": {"plot": {"type": "Plot", "id": "cbd38be0-a0a7-4d47-8b57-7b79c949daec"}, "id": "8d7eefc6-5707-4eb7-9812-284262d705d5", "doc": null}, "type": "ResetTool", "id": "8d7eefc6-5707-4eb7-9812-284262d705d5"}];
    var modeltype = "PlotContext";
    var elementid = "fd5cb66e-ebe4-4822-a7eb-91b21c73ade7";
    var plotID = "cbd38be0-a0a7-4d47-8b57-7b79c949daec";
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