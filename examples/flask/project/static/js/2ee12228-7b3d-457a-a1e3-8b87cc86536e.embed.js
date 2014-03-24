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

    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0578116d-69d3-48d4-99e9-2b1663cca56b"}, "doc": null, "id": "b47a27af-3e26-407f-bb57-8543f5e4e849", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "b47a27af-3e26-407f-bb57-8543f5e4e849"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "id": "aee72785-794b-4f17-aaaf-cce256116f68", "doc": null}, "type": "ResizeTool", "id": "aee72785-794b-4f17-aaaf-cce256116f68"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "b47a27af-3e26-407f-bb57-8543f5e4e849"}], "id": "6fb608e5-99d7-4992-ad1c-b560069518c0"}, "type": "BoxSelectTool", "id": "6fb608e5-99d7-4992-ad1c-b560069518c0"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [41, 22, 47, 29, 44, 6, 22, 70, 72, 66, 33, 49, 70, 90, 96, 66, 97, 33, 17, 3, 49, 18, 52, 0, 92, 41, 80, 86, 94, 4, 70, 83, 30, 35, 67, 13, 50, 57, 36, 28, 18, 51, 71, 14, 67, 75, 11, 60, 87, 94, 55, 86, 67, 13, 35, 33, 20, 56, 46, 3, 73, 69, 93, 39, 16, 87, 64, 70, 80, 8, 29, 53, 51, 14, 40, 14, 1, 26, 12, 23, 59, 7, 67, 40, 6, 14, 87, 17, 94, 34, 97, 55, 44, 53, 91, 65, 15, 43, 95, 37], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "0578116d-69d3-48d4-99e9-2b1663cca56b"}, "type": "ColumnDataSource", "id": "0578116d-69d3-48d4-99e9-2b1663cca56b"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "6fb608e5-99d7-4992-ad1c-b560069518c0"}, "id": "0565ab5a-4ff6-494e-a8f3-fcfc4fac2cb0"}, "type": "BoxSelection", "id": "0565ab5a-4ff6-494e-a8f3-fcfc4fac2cb0"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "545018b9-f2e3-4ff0-b509-0d7f3c34a1d4"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "b73e7dda-5d39-433f-8c5a-1f07fe0742f1"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "2d513233-35d5-47fe-b21d-dda1a1718871"}, {"type": "LinearAxis", "id": "60110b2c-63f3-4465-965c-7f7b4dfdc9bd"}, {"type": "Grid", "id": "98507ae4-23b5-4b02-b91e-4476b10ac564"}, {"type": "Grid", "id": "02a670b0-44ba-44d3-b99b-a5817ee72d29"}, {"type": "BoxSelection", "id": "26090116-e126-4a30-a313-8cd3cfd84f43"}, {"type": "BoxSelection", "id": "0565ab5a-4ff6-494e-a8f3-fcfc4fac2cb0"}, {"type": "Glyph", "id": "b47a27af-3e26-407f-bb57-8543f5e4e849"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e", "tools": [{"type": "PanTool", "id": "67ad1e42-10be-4394-8817-b51e7f515c59"}, {"type": "WheelZoomTool", "id": "220b5377-82fb-4dca-8086-47f55cfa1c0c"}, {"type": "BoxZoomTool", "id": "ce370cc3-bd85-4269-be34-a9590eee5234"}, {"type": "PreviewSaveTool", "id": "2661ddfb-a4bc-45f0-8989-00968e3d1ec1"}, {"type": "ResizeTool", "id": "aee72785-794b-4f17-aaaf-cce256116f68"}, {"type": "BoxSelectTool", "id": "6fb608e5-99d7-4992-ad1c-b560069518c0"}, {"type": "ResetTool", "id": "71147490-1a73-44b0-85de-e17a704da4f6"}], "canvas_width": 600}, "type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "location": "min", "bounds": "auto", "doc": null, "id": "60110b2c-63f3-4465-965c-7f7b4dfdc9bd", "dimension": 1}, "type": "LinearAxis", "id": "60110b2c-63f3-4465-965c-7f7b4dfdc9bd"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0578116d-69d3-48d4-99e9-2b1663cca56b"}, "columns": ["y"]}], "id": "b73e7dda-5d39-433f-8c5a-1f07fe0742f1", "doc": null}, "type": "DataRange1d", "id": "b73e7dda-5d39-433f-8c5a-1f07fe0742f1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0578116d-69d3-48d4-99e9-2b1663cca56b"}, "columns": ["x"]}], "id": "545018b9-f2e3-4ff0-b509-0d7f3c34a1d4", "doc": null}, "type": "DataRange1d", "id": "545018b9-f2e3-4ff0-b509-0d7f3c34a1d4"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "location": "min", "bounds": "auto", "doc": null, "id": "2d513233-35d5-47fe-b21d-dda1a1718871", "dimension": 0}, "type": "LinearAxis", "id": "2d513233-35d5-47fe-b21d-dda1a1718871"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "02a670b0-44ba-44d3-b99b-a5817ee72d29"}, "type": "Grid", "id": "02a670b0-44ba-44d3-b99b-a5817ee72d29"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "98507ae4-23b5-4b02-b91e-4476b10ac564"}, "type": "Grid", "id": "98507ae4-23b5-4b02-b91e-4476b10ac564"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}], "id": "cbd677df-c288-4f6c-8743-72e617945703"}, "type": "PlotContext", "id": "cbd677df-c288-4f6c-8743-72e617945703"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "doc": null, "dimensions": ["width", "height"], "id": "220b5377-82fb-4dca-8086-47f55cfa1c0c"}, "type": "WheelZoomTool", "id": "220b5377-82fb-4dca-8086-47f55cfa1c0c"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "doc": null, "dimensions": ["width", "height"], "id": "67ad1e42-10be-4394-8817-b51e7f515c59"}, "type": "PanTool", "id": "67ad1e42-10be-4394-8817-b51e7f515c59"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "ce370cc3-bd85-4269-be34-a9590eee5234"}, "id": "26090116-e126-4a30-a313-8cd3cfd84f43"}, "type": "BoxSelection", "id": "26090116-e126-4a30-a313-8cd3cfd84f43"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "id": "ce370cc3-bd85-4269-be34-a9590eee5234", "doc": null}, "type": "BoxZoomTool", "id": "ce370cc3-bd85-4269-be34-a9590eee5234"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "dataranges": [], "id": "2661ddfb-a4bc-45f0-8989-00968e3d1ec1", "doc": null}, "type": "PreviewSaveTool", "id": "2661ddfb-a4bc-45f0-8989-00968e3d1ec1"}, {"attributes": {"plot": {"type": "Plot", "id": "2ee12228-7b3d-457a-a1e3-8b87cc86536e"}, "id": "71147490-1a73-44b0-85de-e17a704da4f6", "doc": null}, "type": "ResetTool", "id": "71147490-1a73-44b0-85de-e17a704da4f6"}];
    var modeltype = "PlotContext";
    var elementid = "3df50234-8299-4703-bd19-52371e3cdec3";
    var plotID = "2ee12228-7b3d-457a-a1e3-8b87cc86536e";
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