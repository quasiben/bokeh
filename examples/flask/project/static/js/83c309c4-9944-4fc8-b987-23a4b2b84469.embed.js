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

    var all_models = [{"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "43323240-a51e-408c-a493-7df96a2ce363"}, "id": "dd2a8b93-89ec-4217-97cd-aceda3c7e798"}, "type": "BoxSelection", "id": "dd2a8b93-89ec-4217-97cd-aceda3c7e798"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "id": "5bfa5233-a5e5-43dd-8932-84e23b21d81a", "doc": null}, "type": "ResetTool", "id": "5bfa5233-a5e5-43dd-8932-84e23b21d81a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "52f13d1b-beef-418e-9421-a81859d7c7c1"}, "doc": null, "id": "767e7e6c-0f47-4f96-ad79-38213d621341", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": "#1f77b4", "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": 1.0, "text_alpha": 1.0, "text_color": "black", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": {"units": "data", "value": 0.1}, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "767e7e6c-0f47-4f96-ad79-38213d621341"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "dataranges": [], "id": "0b92d8dd-a8eb-4fe2-9e1e-6e4b536dafb9", "doc": null}, "type": "PreviewSaveTool", "id": "0b92d8dd-a8eb-4fe2-9e1e-6e4b536dafb9"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "4e7347ea-dbea-47a1-92c1-d79071d0a122"}, "id": "6c35b134-724c-4a80-b850-a420861feb6c"}, "type": "BoxSelection", "id": "6c35b134-724c-4a80-b850-a420861feb6c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}], "id": "78ac24dd-248f-4aa6-8255-d404c04c7c65"}, "type": "PlotContext", "id": "78ac24dd-248f-4aa6-8255-d404c04c7c65"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "767e7e6c-0f47-4f96-ad79-38213d621341"}], "id": "43323240-a51e-408c-a493-7df96a2ce363"}, "type": "BoxSelectTool", "id": "43323240-a51e-408c-a493-7df96a2ce363"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [94, 71, 61, 58, 90, 83, 93, 32, 86, 64, 37, 100, 57, 33, 75, 98, 95, 29, 98, 38, 62, 60, 77, 75, 35, 71, 43, 97, 75, 30, 8, 47, 73, 20, 9, 32, 30, 43, 25, 47, 66, 33, 6, 84, 73, 28, 46, 85, 73, 71, 32, 96, 25, 9, 3, 56, 5, 46, 65, 20, 67, 26, 32, 39, 22, 25, 20, 48, 63, 81, 7, 45, 30, 68, 80, 33, 59, 0, 27, 69, 59, 31, 79, 70, 55, 56, 76, 71, 62, 56, 31, 87, 48, 49, 49, 46, 44, 83, 17, 35], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "52f13d1b-beef-418e-9421-a81859d7c7c1"}, "type": "ColumnDataSource", "id": "52f13d1b-beef-418e-9421-a81859d7c7c1"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "doc": null, "is_datetime": false, "dimension": 1, "id": "1621f709-b5bc-4357-829f-b1ac860d5b20"}, "type": "Grid", "id": "1621f709-b5bc-4357-829f-b1ac860d5b20"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52f13d1b-beef-418e-9421-a81859d7c7c1"}, "columns": ["y"]}], "id": "0c45849c-190d-4a2f-9815-1d5b427d5ee2", "doc": null}, "type": "DataRange1d", "id": "0c45849c-190d-4a2f-9815-1d5b427d5ee2"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "doc": null, "dimensions": ["width", "height"], "id": "8c320238-d591-4c52-8f11-e274a9a2ba5a"}, "type": "PanTool", "id": "8c320238-d591-4c52-8f11-e274a9a2ba5a"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "location": "min", "bounds": "auto", "doc": null, "id": "90751039-35fc-4364-b3ee-0eda6e5f8db4", "dimension": 1}, "type": "LinearAxis", "id": "90751039-35fc-4364-b3ee-0eda6e5f8db4"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "0fd65832-fe2d-4f98-a576-35d9415e85ec"}, "type": "Grid", "id": "0fd65832-fe2d-4f98-a576-35d9415e85ec"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "location": "min", "bounds": "auto", "doc": null, "id": "9c928150-9985-4f97-b310-7a41188c58f4", "dimension": 0}, "type": "LinearAxis", "id": "9c928150-9985-4f97-b310-7a41188c58f4"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "doc": null, "dimensions": ["width", "height"], "id": "993ac655-24ff-4938-9341-1e1d87aa0980"}, "type": "WheelZoomTool", "id": "993ac655-24ff-4938-9341-1e1d87aa0980"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c8f5ee3b-36da-42ed-9019-eed6a4e523e1"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "0c45849c-190d-4a2f-9815-1d5b427d5ee2"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "9c928150-9985-4f97-b310-7a41188c58f4"}, {"type": "LinearAxis", "id": "90751039-35fc-4364-b3ee-0eda6e5f8db4"}, {"type": "Grid", "id": "0fd65832-fe2d-4f98-a576-35d9415e85ec"}, {"type": "Grid", "id": "1621f709-b5bc-4357-829f-b1ac860d5b20"}, {"type": "BoxSelection", "id": "6c35b134-724c-4a80-b850-a420861feb6c"}, {"type": "BoxSelection", "id": "dd2a8b93-89ec-4217-97cd-aceda3c7e798"}, {"type": "Glyph", "id": "767e7e6c-0f47-4f96-ad79-38213d621341"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "83c309c4-9944-4fc8-b987-23a4b2b84469", "tools": [{"type": "PanTool", "id": "8c320238-d591-4c52-8f11-e274a9a2ba5a"}, {"type": "WheelZoomTool", "id": "993ac655-24ff-4938-9341-1e1d87aa0980"}, {"type": "BoxZoomTool", "id": "4e7347ea-dbea-47a1-92c1-d79071d0a122"}, {"type": "PreviewSaveTool", "id": "0b92d8dd-a8eb-4fe2-9e1e-6e4b536dafb9"}, {"type": "ResizeTool", "id": "701803e2-cecf-4e0b-a40e-dde756f23795"}, {"type": "BoxSelectTool", "id": "43323240-a51e-408c-a493-7df96a2ce363"}, {"type": "ResetTool", "id": "5bfa5233-a5e5-43dd-8932-84e23b21d81a"}], "canvas_width": 600}, "type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "id": "4e7347ea-dbea-47a1-92c1-d79071d0a122", "doc": null}, "type": "BoxZoomTool", "id": "4e7347ea-dbea-47a1-92c1-d79071d0a122"}, {"attributes": {"plot": {"type": "Plot", "id": "83c309c4-9944-4fc8-b987-23a4b2b84469"}, "id": "701803e2-cecf-4e0b-a40e-dde756f23795", "doc": null}, "type": "ResizeTool", "id": "701803e2-cecf-4e0b-a40e-dde756f23795"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "52f13d1b-beef-418e-9421-a81859d7c7c1"}, "columns": ["x"]}], "id": "c8f5ee3b-36da-42ed-9019-eed6a4e523e1", "doc": null}, "type": "DataRange1d", "id": "c8f5ee3b-36da-42ed-9019-eed6a4e523e1"}];
    var modeltype = "PlotContext";
    var elementid = "96167de4-6a4c-4627-b51d-1514aa0974fc";
    var plotID = "83c309c4-9944-4fc8-b987-23a4b2b84469";
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