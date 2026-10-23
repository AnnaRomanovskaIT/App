import { getDb } from "../db/mongo.js";

const COLLECTION_NAME = "weather";

export async function save(weather) {
    const db = getDb();

    const { id, ...document } = weather;

    const result = await db
        .collection(COLLECTION_NAME)
        .insertOne(document);

    return {
        ...document,
        id: result.insertedId.toString(),
    };
}