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

    var all_models = [{"attributes": {"doc": null, "children": [{"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}], "id": "252ad6a3-c6f8-4528-a83b-3bd410864f2d"}, "type": "PlotContext", "id": "252ad6a3-c6f8-4528-a83b-3bd410864f2d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8398929d-b275-4b52-a366-ec3a8d021294"}, "doc": null, "id": "847da7ce-6124-4c8d-beb9-67ce1d5d2781", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "847da7ce-6124-4c8d-beb9-67ce1d5d2781"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [45, 35, 99, 10, 90, 68, 69, 19, 66, 72, 28, 58, 8, 89, 1, 34, 13, 63, 76, 77, 41, 63, 80, 75, 83, 43, 80, 89, 9, 73, 30, 90, 53, 79, 39, 28, 56, 72, 61, 21, 44, 75, 81, 22, 34, 73, 92, 47, 3, 47, 63, 28, 93, 44, 30, 80, 6, 73, 8, 14, 78, 62, 95, 41, 90, 73, 95, 63, 36, 56, 9, 51, 68, 81, 72, 51, 73, 35, 49, 42, 38, 22, 20, 60, 73, 56, 66, 4, 93, 16, 30, 47, 86, 98, 92, 73, 21, 60, 38, 27], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "8398929d-b275-4b52-a366-ec3a8d021294"}, "type": "ColumnDataSource", "id": "8398929d-b275-4b52-a366-ec3a8d021294"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "5eed4a61-39b4-4927-b6a1-e9c39331d2aa"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "cf600321-98a8-456f-b7f3-fcc3172655f2"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "923ff2b4-5d34-48d3-85f7-ad2d2b2f4c57"}, {"type": "LinearAxis", "id": "85e529bb-51dc-4e0e-b76e-a18baf8a9c55"}, {"type": "Grid", "id": "64085cad-941e-42fc-8b22-742987610d23"}, {"type": "Grid", "id": "7940cb6e-8d12-4f3a-b74e-4e83244985c5"}, {"type": "BoxSelection", "id": "39652d7c-8872-4b88-af98-3a5c7cdc825c"}, {"type": "BoxSelection", "id": "eaa234c4-c83c-4e4d-8c64-ccf5a2ea552b"}, {"type": "Glyph", "id": "847da7ce-6124-4c8d-beb9-67ce1d5d2781"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "71dad431-991d-4f3a-8395-1870ea7a3aee", "tools": [{"type": "PanTool", "id": "c1165545-a002-4444-a647-ae5187a23d29"}, {"type": "WheelZoomTool", "id": "c6a08fb7-3e40-47c4-aad5-2a6532022989"}, {"type": "BoxZoomTool", "id": "9a04c94c-ec5f-4640-902c-e684eefefb59"}, {"type": "PreviewSaveTool", "id": "99c1130a-cd53-4f9a-9d2c-c1c19ef9249c"}, {"type": "ResizeTool", "id": "b399f748-df55-47b1-901f-ce1d7729a834"}, {"type": "BoxSelectTool", "id": "a20de7ae-7f23-456d-a62f-e7da8393ba68"}, {"type": "ResetTool", "id": "39ee4cae-3e99-41e1-85a1-380ff4c12331"}], "canvas_width": 600}, "type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8398929d-b275-4b52-a366-ec3a8d021294"}, "columns": ["x"]}], "id": "5eed4a61-39b4-4927-b6a1-e9c39331d2aa", "doc": null}, "type": "DataRange1d", "id": "5eed4a61-39b4-4927-b6a1-e9c39331d2aa"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8398929d-b275-4b52-a366-ec3a8d021294"}, "columns": ["y"]}], "id": "cf600321-98a8-456f-b7f3-fcc3172655f2", "doc": null}, "type": "DataRange1d", "id": "cf600321-98a8-456f-b7f3-fcc3172655f2"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "location": "min", "bounds": "auto", "doc": null, "id": "923ff2b4-5d34-48d3-85f7-ad2d2b2f4c57", "dimension": 0}, "type": "LinearAxis", "id": "923ff2b4-5d34-48d3-85f7-ad2d2b2f4c57"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "location": "min", "bounds": "auto", "doc": null, "id": "85e529bb-51dc-4e0e-b76e-a18baf8a9c55", "dimension": 1}, "type": "LinearAxis", "id": "85e529bb-51dc-4e0e-b76e-a18baf8a9c55"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "64085cad-941e-42fc-8b22-742987610d23"}, "type": "Grid", "id": "64085cad-941e-42fc-8b22-742987610d23"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "7940cb6e-8d12-4f3a-b74e-4e83244985c5"}, "type": "Grid", "id": "7940cb6e-8d12-4f3a-b74e-4e83244985c5"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "doc": null, "dimensions": ["width", "height"], "id": "c1165545-a002-4444-a647-ae5187a23d29"}, "type": "PanTool", "id": "c1165545-a002-4444-a647-ae5187a23d29"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "doc": null, "dimensions": ["width", "height"], "id": "c6a08fb7-3e40-47c4-aad5-2a6532022989"}, "type": "WheelZoomTool", "id": "c6a08fb7-3e40-47c4-aad5-2a6532022989"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "id": "9a04c94c-ec5f-4640-902c-e684eefefb59", "doc": null}, "type": "BoxZoomTool", "id": "9a04c94c-ec5f-4640-902c-e684eefefb59"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "9a04c94c-ec5f-4640-902c-e684eefefb59"}, "id": "39652d7c-8872-4b88-af98-3a5c7cdc825c"}, "type": "BoxSelection", "id": "39652d7c-8872-4b88-af98-3a5c7cdc825c"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "dataranges": [], "id": "99c1130a-cd53-4f9a-9d2c-c1c19ef9249c", "doc": null}, "type": "PreviewSaveTool", "id": "99c1130a-cd53-4f9a-9d2c-c1c19ef9249c"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "id": "b399f748-df55-47b1-901f-ce1d7729a834", "doc": null}, "type": "ResizeTool", "id": "b399f748-df55-47b1-901f-ce1d7729a834"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "847da7ce-6124-4c8d-beb9-67ce1d5d2781"}], "id": "a20de7ae-7f23-456d-a62f-e7da8393ba68"}, "type": "BoxSelectTool", "id": "a20de7ae-7f23-456d-a62f-e7da8393ba68"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "a20de7ae-7f23-456d-a62f-e7da8393ba68"}, "id": "eaa234c4-c83c-4e4d-8c64-ccf5a2ea552b"}, "type": "BoxSelection", "id": "eaa234c4-c83c-4e4d-8c64-ccf5a2ea552b"}, {"attributes": {"plot": {"type": "Plot", "id": "71dad431-991d-4f3a-8395-1870ea7a3aee"}, "id": "39ee4cae-3e99-41e1-85a1-380ff4c12331", "doc": null}, "type": "ResetTool", "id": "39ee4cae-3e99-41e1-85a1-380ff4c12331"}];
    var modeltype = "PlotContext";
    var elementid = "89dec713-7364-48ab-94b1-075e8ee362ae";
    var plotID = "71dad431-991d-4f3a-8395-1870ea7a3aee";
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