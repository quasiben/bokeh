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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "doc": null, "dimensions": ["width", "height"], "id": "1fa5723e-f273-4f64-8331-b01b042d3a7b"}, "type": "WheelZoomTool", "id": "1fa5723e-f273-4f64-8331-b01b042d3a7b"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "id": "c8c6e161-3f4d-423d-8a06-94c2b27658c0", "doc": null}, "type": "BoxZoomTool", "id": "c8c6e161-3f4d-423d-8a06-94c2b27658c0"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "c8c6e161-3f4d-423d-8a06-94c2b27658c0"}, "id": "601c58be-9b12-4463-8e9a-47e41421c9a1"}, "type": "BoxSelection", "id": "601c58be-9b12-4463-8e9a-47e41421c9a1"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "dataranges": [], "id": "887ffa02-706f-407f-8eec-a3a8046c1999", "doc": null}, "type": "PreviewSaveTool", "id": "887ffa02-706f-407f-8eec-a3a8046c1999"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "id": "eb6ab8bc-fc78-4fe9-95fa-beb87e137e26", "doc": null}, "type": "ResizeTool", "id": "eb6ab8bc-fc78-4fe9-95fa-beb87e137e26"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "12ff89e9-357e-423d-b82e-694efe21e331"}], "id": "bf41d109-f00d-4e6f-9eeb-78c5b4b59a7f"}, "type": "BoxSelectTool", "id": "bf41d109-f00d-4e6f-9eeb-78c5b4b59a7f"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "bf41d109-f00d-4e6f-9eeb-78c5b4b59a7f"}, "id": "b61ae120-9693-4685-a9c0-82e2c6a98623"}, "type": "BoxSelection", "id": "b61ae120-9693-4685-a9c0-82e2c6a98623"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "id": "2a54e10b-e678-4657-a0b7-3ffd6f3e6a46", "doc": null}, "type": "ResetTool", "id": "2a54e10b-e678-4657-a0b7-3ffd6f3e6a46"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}], "id": "4e2775f4-5f5a-420f-ba9e-320892e93bfb"}, "type": "PlotContext", "id": "4e2775f4-5f5a-420f-ba9e-320892e93bfb"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7976f2e8-230c-4944-b5e9-82faa20f452d"}, "doc": null, "id": "12ff89e9-357e-423d-b82e-694efe21e331", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "12ff89e9-357e-423d-b82e-694efe21e331"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7976f2e8-230c-4944-b5e9-82faa20f452d"}, "columns": ["x"]}], "id": "f930cbe5-94f6-48bd-a399-a068632248f3", "doc": null}, "type": "DataRange1d", "id": "f930cbe5-94f6-48bd-a399-a068632248f3"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7976f2e8-230c-4944-b5e9-82faa20f452d"}, "columns": ["y"]}], "id": "c60192c0-6868-4aab-8125-8104c2e6ca83", "doc": null}, "type": "DataRange1d", "id": "c60192c0-6868-4aab-8125-8104c2e6ca83"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "location": "min", "bounds": "auto", "doc": null, "id": "e3d5f1b0-07b1-41a7-a1db-460ea59549b0", "dimension": 0}, "type": "LinearAxis", "id": "e3d5f1b0-07b1-41a7-a1db-460ea59549b0"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "location": "min", "bounds": "auto", "doc": null, "id": "8d336e74-df0e-4491-bf6b-0ae1e5e9c6a1", "dimension": 1}, "type": "LinearAxis", "id": "8d336e74-df0e-4491-bf6b-0ae1e5e9c6a1"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "37e32c21-b7c7-45b9-91ad-83f612e29655"}, "type": "Grid", "id": "37e32c21-b7c7-45b9-91ad-83f612e29655"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "f21fed63-2178-4d1a-93cb-94d463805b5a"}, "type": "Grid", "id": "f21fed63-2178-4d1a-93cb-94d463805b5a"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [73, 82, 25, 10, 97, 14, 21, 35, 23, 81, 21, 95, 85, 35, 36, 98, 90, 67, 51, 55, 13, 64, 6, 62, 56, 42, 52, 64, 69, 87, 16, 87, 22, 25, 58, 94, 64, 80, 41, 5, 88, 38, 55, 15, 21, 97, 48, 42, 18, 35, 91, 6, 84, 97, 93, 37, 22, 39, 84, 73, 9, 78, 85, 70, 14, 58, 5, 57, 50, 46, 2, 96, 19, 14, 82, 62, 100, 83, 70, 54, 2, 46, 11, 21, 15, 89, 11, 95, 66, 9, 62, 45, 96, 14, 25, 29, 21, 37, 14, 25], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "7976f2e8-230c-4944-b5e9-82faa20f452d"}, "type": "ColumnDataSource", "id": "7976f2e8-230c-4944-b5e9-82faa20f452d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "f930cbe5-94f6-48bd-a399-a068632248f3"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "c60192c0-6868-4aab-8125-8104c2e6ca83"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "e3d5f1b0-07b1-41a7-a1db-460ea59549b0"}, {"type": "LinearAxis", "id": "8d336e74-df0e-4491-bf6b-0ae1e5e9c6a1"}, {"type": "Grid", "id": "37e32c21-b7c7-45b9-91ad-83f612e29655"}, {"type": "Grid", "id": "f21fed63-2178-4d1a-93cb-94d463805b5a"}, {"type": "BoxSelection", "id": "601c58be-9b12-4463-8e9a-47e41421c9a1"}, {"type": "BoxSelection", "id": "b61ae120-9693-4685-a9c0-82e2c6a98623"}, {"type": "Glyph", "id": "12ff89e9-357e-423d-b82e-694efe21e331"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15", "tools": [{"type": "PanTool", "id": "149e9ae9-7bb9-4d0e-b58f-20ea9caedf3c"}, {"type": "WheelZoomTool", "id": "1fa5723e-f273-4f64-8331-b01b042d3a7b"}, {"type": "BoxZoomTool", "id": "c8c6e161-3f4d-423d-8a06-94c2b27658c0"}, {"type": "PreviewSaveTool", "id": "887ffa02-706f-407f-8eec-a3a8046c1999"}, {"type": "ResizeTool", "id": "eb6ab8bc-fc78-4fe9-95fa-beb87e137e26"}, {"type": "BoxSelectTool", "id": "bf41d109-f00d-4e6f-9eeb-78c5b4b59a7f"}, {"type": "ResetTool", "id": "2a54e10b-e678-4657-a0b7-3ffd6f3e6a46"}], "canvas_width": 600}, "type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, {"attributes": {"plot": {"type": "Plot", "id": "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15"}, "doc": null, "dimensions": ["width", "height"], "id": "149e9ae9-7bb9-4d0e-b58f-20ea9caedf3c"}, "type": "PanTool", "id": "149e9ae9-7bb9-4d0e-b58f-20ea9caedf3c"}];
    var modeltype = "PlotContext";
    var elementid = "864c34ff-950f-4b2a-b55c-e2c44b6e9fdf";
    var plotID = "cf12c636-ec5d-4ee4-a4cf-1274de2d4f15";
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