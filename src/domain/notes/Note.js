class Note {
	constructor({
		id,
		content,
		url,
	}) {
		this._id = id;
		this._content = content;
		this._url = url;
	}
	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get content() {
		return this._content;
	}

	set content(value) {
		this._content = value;
	}

	get url() {
		return this._url;
	}

	set url(value) {
		this._url = value;
	}
}

module.exports = Note;
