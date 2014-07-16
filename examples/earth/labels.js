
/**
 * Container class for map labels.
 */
function Labels() {

	var _labels = [];

	var _displayList = [];

	function _projectLabels(projector) {
		for (var li=0; li<_labels.length; li++) {
			var wrapper = _labels[li];
			projector.call(null, wrapper.anchorPos, wrapper.coordWin);
		}
	}

	// Sort labels by depth.
	function _sortLabels() {
		_displayList.length = 0;

		for (var li=0; li<_labels.length; li++) {
			_displayList.push(_labels[li]);
		}

		_displayList.sort( function zOrder(a, b) {
			return a.coordWin[2] - b.coordWin[2];
		} );
	}

	function _color2CSSColor(color) {
		return 'rgb(' + Math.floor(255 * color[0]) + ',' + Math.floor(255 * color[1]) + ',' + Math.floor(255 * color[2]) + ')';
	}

	this.addLabel = function(lat, lon, text, color, font) {
		var labelWrapper = {
			label: {
				lat: lat, 
				lon: lon, 
				text: text, 
				color: [color[0], color[1], color[2]], 
				font: font
			}, 
			anchorPos: latLon2Point(lat, lon), 
			coordWin: new Float32Array(3), 
			fillStyle: _color2CSSColor(color)
		};

		_labels.push(labelWrapper);
	};

	this.getCount = function() {
		return _labels.length;
	};

	this.draw = function(ctx2d, projector, shadow, maxLabelsInView) {
		_projectLabels(projector);

		_sortLabels();

		//TODO: labels whose anchor points are on the back side of the globe should not be displayed.
		//      But how can we detect this?
		//

		ctx2d.save();

		var numOfLabelsToDisplay = (maxLabelsInView != undefined) ? 
									Math.min(maxLabelsInView, _displayList.length) : _displayList.length;
		for (var li=0; li<numOfLabelsToDisplay; li++) {
			var labelWrapper = _displayList[li];

			ctx2d.font = labelWrapper.label.font;
			ctx2d.fillStyle = labelWrapper.fillStyle;
			// set text shadow style
			if (shadow) {
				ctx2d.shadowColor = 'rgba(1, 1, 1, 0.6)';
				ctx2d.shadowOffsetX = 1;
				ctx2d.shadowOffsetY = 1;
			}

			var textWidth = ctx2d.measureText(labelWrapper.label.text).width;
			ctx2d.fillText( labelWrapper.label.text, 
							Math.floor(0.5 + labelWrapper.coordWin[0] - 0.5 * textWidth), Math.floor(0.5 + labelWrapper.coordWin[1]) );
		}

		ctx2d.restore();
	};

}
