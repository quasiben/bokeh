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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "location": "min", "bounds": "auto", "doc": null, "id": "d9524d3f-010f-47ca-aef0-21b12b7d9ed5", "dimension": 0}, "type": "LinearAxis", "id": "d9524d3f-010f-47ca-aef0-21b12b7d9ed5"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d7a26e48-7a8a-4ab6-997c-5435cf6cbe1a"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "896b6718-d26f-4bcd-a7f7-157dbc019b86"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "d9524d3f-010f-47ca-aef0-21b12b7d9ed5"}, {"type": "LinearAxis", "id": "c750ff75-8548-4359-a5f0-7e499df7aa67"}, {"type": "Grid", "id": "259ac0bc-029f-4d27-a6a4-26cfb69e0dda"}, {"type": "Grid", "id": "55af67d8-b88a-44c2-952a-37a683f702c0"}, {"type": "BoxSelection", "id": "7fb013be-79bf-4c32-87d9-c523b01b8c9a"}, {"type": "BoxSelection", "id": "0a5e8538-44ea-4fea-9a8b-4c3931a7dc08"}, {"type": "Glyph", "id": "ccbc5c92-564a-4055-a135-28b9121b1186"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "272b999d-cd64-419e-972d-5af2607c1096", "tools": [{"type": "PanTool", "id": "9a1c0ca8-ad1a-497e-84de-0c52a5599539"}, {"type": "WheelZoomTool", "id": "d76787ab-4fca-4222-b806-dc0007340ff4"}, {"type": "BoxZoomTool", "id": "dc82d095-a45e-4a46-9670-973ba8a17aa8"}, {"type": "PreviewSaveTool", "id": "55c58577-1e16-4b7c-9347-940871d6b00d"}, {"type": "ResizeTool", "id": "b6971777-eb13-4e4f-8924-dde916a27167"}, {"type": "BoxSelectTool", "id": "5ed73817-2147-4350-b8d6-d7eeb0ac0b3f"}, {"type": "ResetTool", "id": "a84a3f4e-c6bb-4522-b422-bc10e3626a49"}], "canvas_width": 600}, "type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}], "id": "a2ff2b79-3f71-4f1a-a5cc-a2fec8cc4ad8"}, "type": "PlotContext", "id": "a2ff2b79-3f71-4f1a-a5cc-a2fec8cc4ad8"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "location": "min", "bounds": "auto", "doc": null, "id": "c750ff75-8548-4359-a5f0-7e499df7aa67", "dimension": 1}, "type": "LinearAxis", "id": "c750ff75-8548-4359-a5f0-7e499df7aa67"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52fcac17-f243-48a8-baeb-9cddd6f1dfc2"}, "columns": ["x"]}], "id": "d7a26e48-7a8a-4ab6-997c-5435cf6cbe1a", "doc": null}, "type": "DataRange1d", "id": "d7a26e48-7a8a-4ab6-997c-5435cf6cbe1a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52fcac17-f243-48a8-baeb-9cddd6f1dfc2"}, "columns": ["y"]}], "id": "896b6718-d26f-4bcd-a7f7-157dbc019b86", "doc": null}, "type": "DataRange1d", "id": "896b6718-d26f-4bcd-a7f7-157dbc019b86"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "259ac0bc-029f-4d27-a6a4-26cfb69e0dda"}, "type": "Grid", "id": "259ac0bc-029f-4d27-a6a4-26cfb69e0dda"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "55af67d8-b88a-44c2-952a-37a683f702c0"}, "type": "Grid", "id": "55af67d8-b88a-44c2-952a-37a683f702c0"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "52fcac17-f243-48a8-baeb-9cddd6f1dfc2"}, "doc": null, "id": "ccbc5c92-564a-4055-a135-28b9121b1186", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "ccbc5c92-564a-4055-a135-28b9121b1186"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "doc": null, "dimensions": ["width", "height"], "id": "9a1c0ca8-ad1a-497e-84de-0c52a5599539"}, "type": "PanTool", "id": "9a1c0ca8-ad1a-497e-84de-0c52a5599539"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "doc": null, "dimensions": ["width", "height"], "id": "d76787ab-4fca-4222-b806-dc0007340ff4"}, "type": "WheelZoomTool", "id": "d76787ab-4fca-4222-b806-dc0007340ff4"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "id": "dc82d095-a45e-4a46-9670-973ba8a17aa8", "doc": null}, "type": "BoxZoomTool", "id": "dc82d095-a45e-4a46-9670-973ba8a17aa8"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "dc82d095-a45e-4a46-9670-973ba8a17aa8"}, "id": "7fb013be-79bf-4c32-87d9-c523b01b8c9a"}, "type": "BoxSelection", "id": "7fb013be-79bf-4c32-87d9-c523b01b8c9a"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "dataranges": [], "id": "55c58577-1e16-4b7c-9347-940871d6b00d", "doc": null}, "type": "PreviewSaveTool", "id": "55c58577-1e16-4b7c-9347-940871d6b00d"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "id": "b6971777-eb13-4e4f-8924-dde916a27167", "doc": null}, "type": "ResizeTool", "id": "b6971777-eb13-4e4f-8924-dde916a27167"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "ccbc5c92-564a-4055-a135-28b9121b1186"}], "id": "5ed73817-2147-4350-b8d6-d7eeb0ac0b3f"}, "type": "BoxSelectTool", "id": "5ed73817-2147-4350-b8d6-d7eeb0ac0b3f"}, {"attributes": {"plot": {"type": "Plot", "id": "272b999d-cd64-419e-972d-5af2607c1096"}, "id": "a84a3f4e-c6bb-4522-b422-bc10e3626a49", "doc": null}, "type": "ResetTool", "id": "a84a3f4e-c6bb-4522-b422-bc10e3626a49"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [38, 50, 62, 8, 69, 93, 45, 80, 16, 35, 47, 38, 35, 31, 23, 61, 3, 98, 63, 45, 32, 75, 34, 20, 27, 27, 74, 97, 49, 78, 22, 42, 9, 45, 28, 56, 78, 6, 79, 67, 91, 56, 49, 26, 61, 25, 13, 59, 15, 36, 81, 8, 34, 58, 100, 42, 5, 98, 3, 6, 78, 21, 49, 21, 55, 80, 61, 100, 62, 46, 87, 95, 19, 45, 75, 30, 75, 71, 67, 64, 73, 1, 50, 32, 3, 76, 72, 6, 9, 15, 16, 35, 91, 89, 3, 79, 34, 8, 9, 41], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "52fcac17-f243-48a8-baeb-9cddd6f1dfc2"}, "type": "ColumnDataSource", "id": "52fcac17-f243-48a8-baeb-9cddd6f1dfc2"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "5ed73817-2147-4350-b8d6-d7eeb0ac0b3f"}, "id": "0a5e8538-44ea-4fea-9a8b-4c3931a7dc08"}, "type": "BoxSelection", "id": "0a5e8538-44ea-4fea-9a8b-4c3931a7dc08"}];
    var modeltype = "PlotContext";
    var elementid = "6f1d2bdc-faf2-4dc9-9e18-e11913912303";
    var plotID = "272b999d-cd64-419e-972d-5af2607c1096";
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