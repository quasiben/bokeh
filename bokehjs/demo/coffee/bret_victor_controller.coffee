'use strict';

# Controllers 

bretVictorApp = angular.module('bretVictorApp', [])
bretVictorApp.config(($interpolateProvider) ->
     $interpolateProvider.startSymbol('[[');
     $interpolateProvider.endSymbol(']]');
);

bretVictorApp.controller('PhoneListCtrl', ($scope) ->
  $scope.colors = [{displayVal:"'red'", actualVal:'red'},  {displayVal:"'blue'", actualVal:'blue'}
    {displayVal:"'green'", actualVal:'green'},     {displayVal:"'color'", actualVal:'color'},
    {displayVal:"'color_random'", actualVal:'color_random'}
  ]

  $scope.glyph_types = ['annular_wedge', 'annulus', 'arc', 'asterisk', 'circle', 'line', 'triangle', 'square_cross']
  $scope.data_columns = [
    {displayVal:"'x_trig'", actualVal:'x_trig'},
    {displayVal:"'y_sin'", actualVal:'y_sin'},
    {displayVal:"'x_random'", actualVal:'x_random'},
    {displayVal:"'y_random'", actualVal:'y_random'},
    {displayVal:"'color'", acutalVal:'color'},
    {displayVal:"'color_random'", acutalVal:'color_random'}]
    



  $scope.xcolumn = $scope.data_columns[2];
  $scope.ycolumn = $scope.data_columns[3];
  
  $scope.glyph_type = $scope.glyph_types[1];

  $scope.size =  10
  $scope.radius =  .5
  $scope.inner_radius = .1
  $scope.outer_radius = .5

  $scope.start_angle = .25;
  $scope.end_angle = 1.25;

  $scope.stroke_alpha = .5
  $scope.fill_alpha = .5
  $scope.fill_color = $scope.colors[0];
  $scope.line_color = $scope.colors[1];

  plot_f = (Bokeh, _)->
    N= 600
    r = new Bokeh.Random(123456789)
    x_trig = ( (x/50) for x in _.range(N) )

    y_sin = (Math.sin(x) for x in x_trig)
    color = ("rgb(#{ Math.floor(155+100*val) }, #{ Math.floor(100+50*val) }, #{ Math.floor(150-50*val) })" for val in y_sin)

    NR = 10
    x_random = (r.randf()*2 for i in _.range(NR))
    y_random = (r.randf()*2 for i in _.range(NR))
    xs = (r.randf()*2 for i in _.range(N))
    ys = (r.randf()*2 for i in _.range(N))
    c_random = (r.randf() for i in _.range(100))
    color_random = ("rgb(#{ Math.floor(255*val) }, #{ Math.floor(255*val) }, #{ Math.floor(255*val) })" for val in c_random)
    data = {
      x_trig: x_trig
      y_sin: y_sin
      x_random: x_random
      y_random: y_random
      color: color
      color_random: color_random
      x: xs
      y: ys
    }

    rects = {
      type: $scope.glyph_type,
      x: $scope.xcolumn.actualVal
      y: $scope.ycolumn.actualVal
      #x: 'x_random'
      #y: 'y_random'
      radius: $scope.radius
      size:          $scope.size
      inner_radius:   $scope.inner_radius
      outer_radius:    $scope.outer_radius
      start_angle:   $scope.start_angle
      end_angle:   $scope.end_angle
      stroke_alpha: $scope.line_alpha
      fill_alpha: $scope.fill_alpha
      fill_color: $scope.fill_color
      line_color: $scope.line_color
      do_fill:true
    }

    options = {
      title: "Annular Wedge Demo"
      dims: [800, 500]
      xaxes: "min"
      yaxes: "min"
      tools: "pan,zoom,resize,preview,select"
      legend: false
    }

    plot = Bokeh.Plotting.make_plot(rects, data, options)
    Bokeh.Plotting.show(plot)
    annular_wedge = plot.resolve_ref(plot.get('renderers')[0])
    update_glyphspec = (update_params) ->
      g_spec = annular_wedge.get('glyphspec')
      new_glyphspec =  _.extend({}, g_spec, update_params)
      console.log('annular_wedge.id', annular_wedge.id)
      annular_wedge.set('glyphspec', new_glyphspec)

    update_glyphtype = () ->
      
      g_spec = annular_wedge.get('glyphspec')
      g_spec.type=$scope.glyph_type
      dsource = annular_wedge.get_obj('data_source')
      new_glyph = Bokeh.Plotting.create_glyphs(plot, g_spec, [dsource], null)[0]
      
      plot.remove_renderer(annular_wedge.ref())
      plot.add_renderers([new_glyph.ref()])
      annular_wedge = new_glyph
    
    $scope.$watch('glyph_type', update_glyphtype)

    $scope.$watch('xcolumn',  ->
      update_glyphspec({x:$scope.xcolumn.actualVal})
      update_glyphtype())

    $scope.$watch('ycolumn',  ->
      update_glyphspec({y:$scope.ycolumn.actualVal})
      update_glyphtype())
    
    $scope.$watch('size',  -> update_glyphspec({size:parseFloat($scope.size)}))
    $scope.$watch('radius',  -> update_glyphspec({radius:parseFloat($scope.radius)}))

    $scope.$watch('inner_radius',  -> update_glyphspec({inner_radius:parseFloat($scope.inner_radius)}))
    $scope.$watch('outer_radius',  -> update_glyphspec({outer_radius:parseFloat($scope.outer_radius)}))

    $scope.$watch('start_angle',  -> update_glyphspec({start_angle:parseFloat($scope.start_angle)}))
    $scope.$watch('end_angle',  -> update_glyphspec({end_angle:parseFloat($scope.end_angle)}))

    $scope.$watch('stroke_alpha',  -> update_glyphspec({stroke_alpha:parseFloat($scope.stroke_alpha)}))
    $scope.$watch('fill_alpha',  -> update_glyphspec({fill_alpha:parseFloat($scope.fill_alpha)}))
    
    $scope.$watch('fill_color',  -> update_glyphspec({fill_color:$scope.fill_color.actualVal}))
    $scope.$watch('line_color',  -> update_glyphspec({line_color:$scope.line_color.actualVal}))
    console.log("plot", plot);

  

  if require?
    require(['main', 'underscore'], plot_f)
  else
    plot_f(Bokeh, _)
  
)
