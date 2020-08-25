import { EvolveClient } from '../Client/EvolveClient';
import { Payload } from '../Interfaces/Interfaces';
import { EVENTS } from '../Constants/Events';

export default class {
	constructor(client: EvolveClient, payload: Payload, shards: Array<number>) {
		client.emit(EVENTS.USER_UPDATE, (payload.d, shards));
	}
}
