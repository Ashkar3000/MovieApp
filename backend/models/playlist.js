import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const playlistSchema = new Schema({
    title: String,
    isPublic: Boolean,
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

export default model('Playlist', playlistSchema);
