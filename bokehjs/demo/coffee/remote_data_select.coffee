'''
require(['main'], (Bokeh) ->
  xs = ((x/50) for x in _.range(630))
  ys1 = (Math.sin(x) for x in xs)

  source = Bokeh.Collections('RemoteDataSource').create(
    api_endpoint: "http://localhost:5000/"
    data:
      x: xs
      y1: ys1)

  xdr = Bokeh.Collections('DataRange1d').create(
    sources: [{ref: source.ref(), columns: ['x']}])

  ydr1 = Bokeh.Collections('DataRange1d').create(
    sources: [{ref: source.ref(), columns: ['y1']}])

  options = {
    title: "Scatter Demo"
    dims: [600, 600]
    xrange: xdr
    xaxes: "datetime"
    yaxes: "min"
    legend: true}

  plot1 = Bokeh.Plotting.make_plot(
    [],
    source, _.extend({title: "Plot 1", yrange: ydr1}, options))

  remote_data_select_tool = Bokeh.Collections('RemoteDataSelectTool').create(
    api_endpoint: "http://localhost:5000/", 
    control_el:"#selector_div"
    title: "trader1 Agriculture"
    columns:  [
     "trader1____largeTradeSizeWithTrendingNetExposureAgriculture.similarity",
     "trader1____AgricultureAvgTradeSizeAnomalySeverity",
     "trader1____AgricultureMaxQtyAnomalySeverity",
     "trader1____AgricultureRunningNetAnomalySeverity"],
    tools: '',  data_source:source)

  existing_tools =   plot1.get_obj('tools')
  existing_tools.push(remote_data_select_tool)
  plot1.set_obj('tools', existing_tools)
  Bokeh.Plotting.show(plot1, $("#plot_target")))
'''
render_trader_plot = (Bokeh, api_endpoint, plot_title, plot_div, selector_div,
    columns, selector_title) ->
  xs = ((x/50) for x in _.range(630))
  ys1 = (Math.sin(x) for x in xs)

  source = Bokeh.Collections('RemoteDataSource').create(
    api_endpoint: api_endpoint
    data:
      x: xs
      y1: ys1)

  xdr = Bokeh.Collections('DataRange1d').create(
    sources: [{ref: source.ref(), columns: ['x']}])

  ydr1 = Bokeh.Collections('DataRange1d').create(
    sources: [{ref: source.ref(), columns: ['y1']}])

  options = {
    dims: [600, 600], xrange: xdr, yrange: ydr1, title: plot_title
    xaxes: "datetime", yaxes: "min",legend: true}

  plot1 = Bokeh.Plotting.make_plot([], source, options)

  remote_data_select_tool = Bokeh.Collections('RemoteDataSelectTool').create(
    control_el:selector_div,
    title: selector_title,
    columns: columns,
    tools: '',  data_source:source)

  existing_tools =   plot1.get_obj('tools')
  existing_tools.push(remote_data_select_tool)
  plot1.set_obj('tools', existing_tools)
  Bokeh.Plotting.show(plot1, $(plot_div))

require(['main'], (Bokeh) ->
  render_trader_plot(Bokeh, "http://localhost:5000/", "Trader1 metrics", "#plot_target",
    "#selector_div",
    ["trader1____largeTradeSizeWithTrendingNetExposureAgriculture.similarity",
     "trader1____AgricultureAvgTradeSizeAnomalySeverity",
     "trader1____AgricultureMaxQtyAnomalySeverity",
     "trader1____AgricultureRunningNetAnomalySeverity"],
    "Chose metrics"))
    




