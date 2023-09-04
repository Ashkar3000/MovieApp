import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }]
});

export default model('User', userSchema);
