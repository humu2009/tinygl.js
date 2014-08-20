/**
 * Author: Ohad Eder-Pressman <ohad@visual-i.com>
 * ported by Humu <humu2009@gmail.com>
 */

/**
 * Loader class for Binary Vector geospatial Data (.bvd) file.
 */
function BVDLoader() {

	function _readBVD(response) {
		var uint32Stream = new Uint32Array(response);
		var float32Stream = new Float32Array(response);
		var offset32 = 0;

		var lat, lon;
		var position = new Float32Array(3);

		var bvd = {
			features: []
		};

		// read number of features in this bvd stream
		var numOfFeatures = uint32Stream[offset32++];

		// read all features
		for (var fi=0; fi<numOfFeatures; fi++) {
			var numOfVertices = uint32Stream[offset32++];
			var feature = {
				latlon: new Float32Array(2 * numOfVertices), 
				vertices: new Float32Array(3 * numOfVertices)
			};

			// read (lat, lon) coordinates of each feature and convert them to vertices on globe
			for (var vi=0; vi<numOfVertices; vi++) {
				lat = float32Stream[offset32++];
				lon = float32Stream[offset32++];
				latLon2Point(lat, lon, position);

				feature.latlon[vi*2    ] = lat;
				feature.latlon[vi*2 + 1] = lon;
				feature.vertices.set(position, vi*3);
			}

			bvd.features.push(feature);
		}

		return bvd;
	}

	this.load = function(url, onload, onerror) {
		var xhr = new XMLHttpRequest;
		xhr.open('GET', encodeURI(url), true);
		xhr.responseType = 'arraybuffer';

		if (onload) {
			xhr.addEventListener('load', function(evt) {
				onload.call(null, _readBVD(evt.target.response));
			} );
		}

		if (onerror) {
			xhr.addEventListener('error', function() {
				onerror.call(null);
			} );
		}

		xhr.send();
	}

}
