import { Realm, createRealmContext } from "@realm/react";
export class Action extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  actionType: string;
  description: string;
  encounterDate: string;
  followupDate: string;
  location: string;
  method: string;
  // person: string;
  status: boolean;
  // team: string;
  userId: string;

  static generate(
    actionType: string,
    description: string,
    encounterDate: string,
    followupDate: string,
    location: string,
    method: string,
    // person: string,
    status: boolean,
    // team: string,
    userId: string
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      actionType,
      description,
      encounterDate,
      followupDate,
      location,
      method,
      // person,
      status,
      // team,
      userId,
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: "Action",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      actionType: "string",
      description: "string",
      encounterDate: "string",
      followupDate: "string",
      location: "string",
      method: "string",
      // person: "string",
      status: { type: "bool", default: false },
      // team: "string",
      userId: "string",
    },
  };
}

export default createRealmContext({
  schema: [Action],
  deleteRealmIfMigrationNeeded: true,
});
