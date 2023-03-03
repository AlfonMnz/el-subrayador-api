class NotesRepository {
	constructor() {
		this.collection = 'notes';
	}

	async save(note) {
		throw new Error('Method not implemented yet');
	}
}

module.exports = NotesRepository;
