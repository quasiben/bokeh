'use strict';

# Controllers 

bretVictorApp = angular.module('bretVictorApp', [])
bretVictorApp.config(($interpolateProvider) ->
     $interpolateProvider.startSymbol('[[');
     $interpolateProvider.endSymbol(']]');
);

bretVictorApp.controller('PhoneListCtrl', ($scope) ->
  $scope.end_angle = 1.25;
  $scope.colors = [{displayVal:"'red'", actualVal:'red'},  {displayVal:"'blue'", actualVal:'blue'}
    {displayVal:"'green'", actualVal:'green'}
  ]
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
      size:          .2
      inner_radius:  .1
      outer_radius:  .20
      start_angle:   .5
      end_angle:   1.25
      line_alpha: 1
      fill_color: '#0F0FF0'
      #line_color: 'color'
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
    # $scope.phones = [
    #   {name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.'},
    #   {name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.'},
    #   {name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.'}
    # ]

    annular_wedge = plot.resolve_ref(plot.get('renderers')[0])
    update_glyphspec = (update_params) ->
      g_spec = annular_wedge.get('glyphspec')
      # g_spec.outer_radus = .8
      # g_spec.fill_color = 'red'
      new_glyphspec =  _.extend({}, g_spec, update_params)
      console.log('setting new glyphspec', new_glyphspec)
      annular_wedge.set('glyphspec', new_glyphspec)

    $scope.$watch('fill_color', (varName, varVal, c) ->
      update_glyphspec({fill_color:$scope.fill_color.actualVal})
      plot.set('title_standoff', plot.get('title_standoff') + 1)
    )
    update_glyphspec({fill_color:$scope.fill_color.actualVal})
    #plot.request_render()
    console.log("plot", plot);

  ) 
)
