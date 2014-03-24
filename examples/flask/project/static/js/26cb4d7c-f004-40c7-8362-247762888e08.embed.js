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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "id": "8702ba65-be8a-44d6-b942-01d1254c6f89", "doc": null}, "type": "ResizeTool", "id": "8702ba65-be8a-44d6-b942-01d1254c6f89"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "052f5507-70c1-491e-9fcc-087b1206a2ab"}], "id": "3156ab35-0ac2-4ddc-92da-77f94b8f0b0d"}, "type": "BoxSelectTool", "id": "3156ab35-0ac2-4ddc-92da-77f94b8f0b0d"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "3156ab35-0ac2-4ddc-92da-77f94b8f0b0d"}, "id": "d593f91e-3143-48f1-a961-a664c84528ae"}, "type": "BoxSelection", "id": "d593f91e-3143-48f1-a961-a664c84528ae"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "id": "29bf9545-977d-4d74-b77f-dc71010633f7", "doc": null}, "type": "ResetTool", "id": "29bf9545-977d-4d74-b77f-dc71010633f7"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0a1ab642-a48c-4342-877a-a8f03bdf6f6d"}, "doc": null, "id": "052f5507-70c1-491e-9fcc-087b1206a2ab", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "052f5507-70c1-491e-9fcc-087b1206a2ab"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "ebac91b5-ccf9-497e-96ab-6d08775ec6f6"}, "type": "Grid", "id": "ebac91b5-ccf9-497e-96ab-6d08775ec6f6"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "db348378-2ff9-4856-9e03-1ec31f182156"}, "id": "28b4d8c7-673d-49af-b3b1-354c69e5d44a"}, "type": "BoxSelection", "id": "28b4d8c7-673d-49af-b3b1-354c69e5d44a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0a1ab642-a48c-4342-877a-a8f03bdf6f6d"}, "columns": ["x"]}], "id": "188c0582-c0f4-4e4e-8d50-4568df16afbd", "doc": null}, "type": "DataRange1d", "id": "188c0582-c0f4-4e4e-8d50-4568df16afbd"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "doc": null, "dimensions": ["width", "height"], "id": "b1d01675-8ab1-40cc-9c6d-fe23ecccc316"}, "type": "WheelZoomTool", "id": "b1d01675-8ab1-40cc-9c6d-fe23ecccc316"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "b1379143-d01c-4980-88a7-6272e548ef04"}, "type": "Grid", "id": "b1379143-d01c-4980-88a7-6272e548ef04"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "location": "min", "bounds": "auto", "doc": null, "id": "717e10c1-c406-496e-97b8-a553cf3a2968", "dimension": 0}, "type": "LinearAxis", "id": "717e10c1-c406-496e-97b8-a553cf3a2968"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [28, 9, 37, 58, 98, 47, 43, 56, 73, 91, 25, 27, 24, 6, 87, 11, 72, 47, 5, 5, 96, 17, 68, 5, 90, 94, 63, 23, 87, 84, 18, 16, 20, 73, 50, 34, 57, 73, 70, 17, 81, 16, 4, 75, 60, 41, 31, 96, 6, 98, 68, 76, 63, 17, 24, 15, 39, 68, 94, 4, 81, 46, 91, 3, 51, 99, 52, 62, 46, 9, 75, 12, 88, 23, 52, 100, 18, 3, 0, 54, 59, 48, 30, 16, 17, 95, 18, 88, 62, 11, 3, 76, 52, 86, 62, 87, 10, 63, 26, 34], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "0a1ab642-a48c-4342-877a-a8f03bdf6f6d"}, "type": "ColumnDataSource", "id": "0a1ab642-a48c-4342-877a-a8f03bdf6f6d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "188c0582-c0f4-4e4e-8d50-4568df16afbd"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "258d767c-a9c9-426b-b272-1d4745609d69"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "717e10c1-c406-496e-97b8-a553cf3a2968"}, {"type": "LinearAxis", "id": "ccc7fcd9-21bc-43c5-bee7-b58a8e766de7"}, {"type": "Grid", "id": "ebac91b5-ccf9-497e-96ab-6d08775ec6f6"}, {"type": "Grid", "id": "b1379143-d01c-4980-88a7-6272e548ef04"}, {"type": "BoxSelection", "id": "28b4d8c7-673d-49af-b3b1-354c69e5d44a"}, {"type": "BoxSelection", "id": "d593f91e-3143-48f1-a961-a664c84528ae"}, {"type": "Glyph", "id": "052f5507-70c1-491e-9fcc-087b1206a2ab"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "26cb4d7c-f004-40c7-8362-247762888e08", "tools": [{"type": "PanTool", "id": "b426eacf-d9af-4cfa-a81f-07a5802b03bf"}, {"type": "WheelZoomTool", "id": "b1d01675-8ab1-40cc-9c6d-fe23ecccc316"}, {"type": "BoxZoomTool", "id": "db348378-2ff9-4856-9e03-1ec31f182156"}, {"type": "PreviewSaveTool", "id": "56824c87-8eba-47a3-bc89-32702b91ff44"}, {"type": "ResizeTool", "id": "8702ba65-be8a-44d6-b942-01d1254c6f89"}, {"type": "BoxSelectTool", "id": "3156ab35-0ac2-4ddc-92da-77f94b8f0b0d"}, {"type": "ResetTool", "id": "29bf9545-977d-4d74-b77f-dc71010633f7"}], "canvas_width": 600}, "type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}], "id": "b7379f07-c53c-42b4-b7c3-649ebb048506"}, "type": "PlotContext", "id": "b7379f07-c53c-42b4-b7c3-649ebb048506"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0a1ab642-a48c-4342-877a-a8f03bdf6f6d"}, "columns": ["y"]}], "id": "258d767c-a9c9-426b-b272-1d4745609d69", "doc": null}, "type": "DataRange1d", "id": "258d767c-a9c9-426b-b272-1d4745609d69"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "id": "db348378-2ff9-4856-9e03-1ec31f182156", "doc": null}, "type": "BoxZoomTool", "id": "db348378-2ff9-4856-9e03-1ec31f182156"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "location": "min", "bounds": "auto", "doc": null, "id": "ccc7fcd9-21bc-43c5-bee7-b58a8e766de7", "dimension": 1}, "type": "LinearAxis", "id": "ccc7fcd9-21bc-43c5-bee7-b58a8e766de7"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "doc": null, "dimensions": ["width", "height"], "id": "b426eacf-d9af-4cfa-a81f-07a5802b03bf"}, "type": "PanTool", "id": "b426eacf-d9af-4cfa-a81f-07a5802b03bf"}, {"attributes": {"plot": {"type": "Plot", "id": "26cb4d7c-f004-40c7-8362-247762888e08"}, "dataranges": [], "id": "56824c87-8eba-47a3-bc89-32702b91ff44", "doc": null}, "type": "PreviewSaveTool", "id": "56824c87-8eba-47a3-bc89-32702b91ff44"}];
    var modeltype = "PlotContext";
    var elementid = "784a8391-3efb-4255-8cc9-ec4ac5db6484";
    var plotID = "26cb4d7c-f004-40c7-8362-247762888e08";
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