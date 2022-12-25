import { connect } from 'mongoose';
import { MONGO_URI } from '../config/index';

// "Singleton" MongoConnection

export class MongoConnection {
  private static connected = false;

  private constructor() {}

  public static async connect(): Promise<boolean> {
    if (!MongoConnection.connected) {
      try {
        await connect(MONGO_URI || '');
        MongoConnection.connected = true;
        console.log('Connected to Mongo successfully');
        return true;
      } catch (error) {
        console.log("Couldn't connect to Mongo");
        return false;
      }
    }
    return false;
  }
}
