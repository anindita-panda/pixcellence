import {Document, Schema, model, models} from "mongoose";

export interface IImage extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureUrl: string | URL;
	width?: number;
	height?: number;
	config?: object;
	transformationUrl?: string | URL;
	aspectRatio?: string;
	color?: string;
	prompt?: string;
	author?: {_id: String; firstName: String; lastName: String};
	createdAt?: Date;
	updatedAt?: Date;
}

const ImageSchema = new Schema({
	title: {type: String, required: true},
	transformationType: {type: String, required: true},
	publicId: {type: String, required: true},
	secureUrl: {type: URL, required: true},
	width: {type: Number},
	height: {type: Number},
	config: {type: Object},
	transformationUrl: {type: URL},
	aspectRatio: {type: String},
	color: {type: String},
	prompt: {type: String},
	author: {type: Schema.Types.ObjectId, ref: "User"},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
});

// Schema defines the structure of documents within a collection, specifying the fields and their types.
// Model provides an interface for interacting with a MongoDB collection, based on the schema definition. It allows you to perform operations such as creating, reading, updating, and deleting documents in the collection.

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
