from project import app
from flask import render_template
from plots import build_plot


# Define our URLs and pages.
@app.route('/')
def render_plot():
    plot_snippet = build_plot()

    return render_template('base.html', snippet=plot_snippet)
