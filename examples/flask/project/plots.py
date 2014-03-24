from bokeh.plotting import *

import numpy as np


# Define a function that will return an HTML snippet.
def build_plot():

    # Set the output for our plot.

    output_file('plot.html', title='Plot')

    # Create some data for our plot.

    x_data = np.arange(1, 101)
    y_data = np.random.randint(0, 101, 100)

    # Create a line plot from our data.

    line(x_data, y_data)

    # Create an HTML snippet of our plot.

    snippet = curplot().create_html_snippet(embed_base_url='static/js/', embed_save_loc='app/static/js')
    print snippet
    # Return the snippet we want to place in our page.

    return snippet



import pandas.io.data as web
from bokeh.plotting import *
import pandas as pd
import numpy as np
import datetime as dt

from bokeh.objects import HoverTool,ColumnDataSource
from collections import OrderedDict

start = dt.datetime(2010, 1, 1)
end = dt.datetime(2013, 01, 27)
f=web.DataReader(['IBM','AAPL','MSFT'], 'google', start, end)

df = f.minor_xs('AAPL')
cols = [col.lower() for col in df.columns]
df.columns = cols

df.replace('-',np.nan,inplace=True)
df.dropna(inplace=True)

df = df.apply(lambda x: x.astype('float64'))
df['date'] = pd.to_datetime(df.index)


inc = df.close > df.open
dec = df.open > df.close
mids = (df.open + df.close)/2
spans = abs(df.close-df.open)
w = 12*60*60*1000 # half day in ms

output_file("plots.html", title="Finance Hover Tool example")

source = ColumnDataSource(
    data=dict(
        date=[i.to_datetime().strftime('%Y-%m-%d') for i in df.index],
        open=list(df.open.values),
        high=list(df.high.values),
        low=list(df.low.values),
        close=list(df.close.values),
        vol=list(df.volume.values),
        name=['aapl']*len(df.volume),
    )
)


TOOLS = "pan,wheel_zoom,hover,resize,reset,previewsave"
figure(x_axis_type = "datetime", tools=TOOLS,
       height=500,width=2000, name="candlestick")

hold()
segment(df.date, df.high, df.date, df.low, color='black')
rect(df.date[inc], mids[inc], w, spans[inc], fill_color="#D5E1DD", line_color="black",source=source)
rect(df.date[dec], mids[dec], w, spans[dec], fill_color="#F2583E", line_color="black",source=source)

curplot().title = "MSFT Candlestick"
xaxis().major_label_orientation = np.pi/4
grid().grid_line_alpha=0.3
hover = [t for t in curplot().tools if isinstance(t, HoverTool)][0]
hover.tooltips = OrderedDict([
    ('name', '@name'),
    ('open', '@open'),
    ('high', '@high'),
    ('low', '@low'),
    ('close', '@close'),
    ('vol', '@vol'),
    ('date','@date')
])


show()  # open a browser



