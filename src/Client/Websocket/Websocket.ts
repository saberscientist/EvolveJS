import ws from "ws";
import { EvolveBuilder, EvolveLogger, EvolveClient, CONSTANTS } from "../..";

export class EvolveSocket extends ws {
	public seq?: number;

	constructor(
		public client: EvolveClient,
		public builder: EvolveBuilder,
		public shard: number
	) {
		super(CONSTANTS.Gateway);
		this.init();
	}

	init(): void {
		try {
			this.on("error", (err) => {
				throw Error(err.toString());
			});

			this.on("close", (code, res) => {
				EvolveLogger.error(`Code: ${code}, Response: ${res}`);
			});

			this.on("message", (data) => {
				this.client.ws.init(data, this, this.shard);
			});
			this.onclose = function(err) {
				EvolveLogger.error(err.reason);
			};
		} catch (e) {
			throw Error(e);
		}
	}
}
