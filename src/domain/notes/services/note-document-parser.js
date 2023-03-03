const Note = require('../Note');

const mongoNoteParser = ({muuid}) => {
	return {
		toDomain: ({
			_id,
			content,
			url,
		}) => {
			const id = (muuid.from(_id)).toString();
			return new Note({id, content, url});
		},
		toDocument: ({
			id,
			content,
			url,
		}) => {
			const _id = muuid.from(id);
			return {
				_id,
				content,
				url,
			};
		},
	};
};

/* const Movie = require('../Movie');

const mongoMovieParser = ({muuid}) => {
	return {
		toDomain: ({
					   _id,
					   omdb_id,
					   adult,
					   backrop_path,
					   belongs_to_collection,
					   budget,
					   genres,
					   homepage,
					   imdb_id,
					   original_language,
					   original_title,
					   overview,
					   popularity,
					   poster_path,
					   production_companies,
					   production_countries,
					   release_date,
					   revenue,
					   runtime,
					   spoken_languages,
					   status,
					   tagline,
					   title,
					   video,
					   vote_average,
					   vote_count,
				   }) => {
			const id = (muuid.from(_id)).toString();
			return new Movie({
				id,
				omdb_id,
				adult,
				backrop_path,
				belongs_to_collection,
				budget,
				genres,
				homepage,
				imdb_id,
				original_language,
				original_title,
				overview,
				popularity,
				poster_path,
				production_companies,
				production_countries,
				release_date,
				revenue,
				runtime,
				spoken_languages,
				status,
				tagline,
				title,
				video,
				vote_average,
				vote_count,
			});
		},
		toDocument: ({
						 id,
						 omdb_id,
						 adult,
						 backrop_path,
						 belongs_to_collection,
						 budget,
						 genres,
						 homepage,
						 imdb_id,
						 original_language,
						 original_title,
						 overview,
						 popularity,
						 poster_path,
						 production_companies,
						 production_countries,
						 release_date,
						 revenue,
						 runtime,
						 spoken_languages,
						 status,
						 tagline,
						 title,
						 video,
						 vote_average,
						 vote_count,
					 }) => {
			// Saving like UUID better
			const _id = muuid.from(id);
			return {
				_id,
				omdb_id,
				adult,
				backrop_path,
				belongs_to_collection,
				budget,
				genres,
				homepage,
				imdb_id,
				original_language,
				original_title,
				overview,
				popularity,
				poster_path,
				production_companies,
				production_countries,
				release_date,
				revenue,
				runtime,
				spoken_languages,
				status,
				tagline,
				title,
				video,
				vote_average,
				vote_count,
			};
		},

	};
};

module.exports = mongoMovieParser;*/