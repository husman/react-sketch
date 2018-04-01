'use strict';

import FabricCanvasTool from './fabrictool'

const fabric = require('fabric').fabric;

class Text extends FabricCanvasTool {

    configureCanvas(props) {
        this._canvas.isDrawingMode = false;
        this._canvas.selection = false;
        this._canvas.forEachObject(o => o.selectable = o.evented = false);

        this._width = props.lineWidth;
        this._color = props.lineColor;
        this._fill = props.fillColor;
    }

    doMouseUp(o) {
        const {
            text
        } = o.target || {};

        if (typeof text === 'string') {
            return;
        }

        const pointer = this._canvas.getPointer(o.e);
        this.text = new fabric.IText('', {
            left: pointer.x,
            top: pointer.y
        });
        this.text.id = new Date().getTime();
        this._canvas.add(this.text);
        this._canvas.setActiveObject(this.text);
        this.text.enterEditing();
    }
}

export default Text;
