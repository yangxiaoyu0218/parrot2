import {Envs} from '../envs'

class Layout {
	// id: string
	// layout: JSON
	constructor(id, layout) {
		this.id = id;
		this.layout = layout ? layout : {};
	}

	getType() {
		let type = this.getOptionValue('type');
		if (type) {
			if (typeof type === 'string') {
				return this.buildDefaultType(type);
			} else {
				return type;
			}
		} else {
			return this.buildDefaultType();
		}
	}
	getTypeAsString() {
		return this.getType().type;
	}
	buildDefaultType(type) {
		type = type ? type : 'Text';
		return {
			type: type,
			label: typeof type.label !== 'undefined' ? type.label : true,
			error: typeof type.error !== 'undefined' ? type.error : true,
			popover: typeof type.popover !== 'undefined' ? type.popover : Envs.COMPONENT_ERROR_POPOVER
		};
	}

	getId() {
		return this.id;
	}
	getDataId() {
		return this.layout.dataId;
	}
	getLabel() {
		return this.layout.label;
	}
	getPosition() {
		let pos = this.layout.pos;
		if (typeof pos === 'undefined' || pos == null) {
			return this.getDefaultPosition();
		} else {
			return this.getDefaultPosition(pos.width, pos.col, pos.row);
		}
	}
	getDefaultPosition(width, columnIndex, rowIndex) {
		return {
			width: width ? width : Envs.CELL_WIDTH,
			col: columnIndex ? columnIndex : 9999,
			row: rowIndex ? rowIndex : 9999
		};
	}
	getStyles() {
		return this.layout.styles ? this.layout.styles : {};
	}
	getStyle(key) {
		return this.getStyles()[key];
	}
	getOptions() {
		return this.layout.comp ? this.layout.comp : {};
	}
	getOptionValue(key) {
		return this.getOptions()[key];
	}

	getAdditionalModel() {
		return this.getOptionValue('additionalModel');
	}

	getEventMonitors() {
		return this.layout.evt ? this.layout.evt : {};
	}
	getEventMonitor(key) {
		return this.getEventMonitors()[key];
	}
}

export {Layout}