'use strict';

# Controllers 

bretVictorApp = angular.module('bretVictorApp', [])
bretVictorApp.config(($interpolateProvider) ->
     $interpolateProvider.startSymbol('[[');
     $interpolateProvider.endSymbol(']]');
);

bretVictorApp.controller('PhoneListCtrl', ($scope) ->
  $scope.colors = [{displayVal:"'red'", actualVal:'red'},  {displayVal:"'blue'", actualVal:'blue'}
    {displayVal:"'green'", actualVal:'green'}
  ]

  $scope.size = .1
  $scope.inner_radius = .1
  $scope.outer_radius = .5

  $scope.start_angle = .25;
  $scope.end_angle = 1.25;

  $scope.stroke_alpha = .5
  $scope.fill_alpha = .5
  $scope.fill_color = $scope.colors[0];
  $scope.line_color = $scope.colors[1];


  require(['main', 'underscore'], (Bokeh, _) ->
    N= 630
    N= 10
    r = new Bokeh.Random(123456789)


    xs = ( (x/50) for x in _.range(N) )
    ys = (Math.sin(x) for x in xs)
    color = ("rgb(#{ Math.floor(155+100*val) }, #{ Math.floor(100+50*val) }, #{ Math.floor(150-50*val) })" for val in ys)
    xs = (r.randf()*2 for i in _.range(N))
    ys = (r.randf()*2 for i in _.range(N))

    data = {
      x: xs
      y: ys
      color: color
    }

    rects = {
      type: 'annular_wedge',
      x: 'x'
      y: 'y'
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
      # g_spec.outer_radus = .8
      # g_spec.fill_color = 'red'
      new_glyphspec =  _.extend({}, g_spec, update_params)
      console.log('setting new glyphspec', new_glyphspec)
      annular_wedge.set('glyphspec', new_glyphspec)

    $scope.$watch('size',  -> update_glyphspec({size:parseFloat($scope.size)}))
    $scope.$watch('inner_radius',  -> update_glyphspec({inner_radius:parseFloat($scope.inner_radius)}))
    $scope.$watch('outer_radius',  -> update_glyphspec({outer_radius:parseFloat($scope.outer_radius)}))

    $scope.$watch('start_angle',  -> update_glyphspec({start_angle:parseFloat($scope.start_angle)}))
    $scope.$watch('end_angle',  -> update_glyphspec({end_angle:parseFloat($scope.end_angle)}))

    $scope.$watch('stroke_alpha',  -> update_glyphspec({stroke_alpha:parseFloat($scope.stroke_alpha)}))
    $scope.$watch('fill_alpha',  -> update_glyphspec({fill_alpha:parseFloat($scope.fill_alpha)}))
    
    $scope.$watch('fill_color',  -> update_glyphspec({fill_color:$scope.fill_color.actualVal}))
    $scope.$watch('line_color',  -> update_glyphspec({line_color:$scope.line_color.actualVal}))



    console.log("plot", plot);

  ) 
)
