from ..app import bokeh_app
from ..models import user
from . import test_utils
import requests
import tempfile
from ...serverconfig import Server
from os.path import dirname, join

import requests
datadir = join(dirname(dirname(dirname(dirname(__file__)))), 'remotedata')
class RemoteDataTestCase(test_utils.BokehServerTestCase):
    options = {'data_directory' : datadir}
    def test_list(self):
        url = "http://localhost:5006/bokeh/data/defaultuser"
        session = requests.session()
        sources = requests.get(url).json()
        result = set(['/defaultuser/GOOG.hdf5', 
                      '/defaultuser/FB.hdf5', 
                      '/defaultuser/MSFT.hdf5', 
                      '/defaultuser/AAPL.hdf5'])
        assert result == set(sources['sources'])
