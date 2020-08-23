import { Snowflake } from '../Constants/Constants';
import { IUser } from './UserOptions';
import { IGuildMember } from './GuildMemberOptions';
import { GuildMember } from '../Structures/Guild/GuildMember';
import { User } from '../Structures/User/User';

export interface IMessage {
	id: Snowflake; // ID of the message
	channel_id: Snowflake; // ID of the channel the message was sent in
	guild_id?: Snowflake; // ID of the guild the message was sent in
	author: User; // The author of this message (not guaranteed to be a valid user, see below)
	member?: GuildMember; // Member properties for this message's author
	content: string; // Contents of the message
	timestamp: number; // Timestamp when this message was sent
	edited_timestamp: number | null; // Timestamp when this message was edited (or null if never)
	tts: boolean; // Whether this was a TTS message
	mention_everyone: boolean; // Whether this message mentions everyone
	mentions: IUser[]; // Users specifically mentioned in the message
	mention_roles: Snowflake[]; // Roles specifically mentioned in this message
	mention_channels?: {}; // Channels specifically mentioned in this message
	attachments: []; // Any attached files
	embeds: []; // Any embedded content
	reactions?: []; // Reactions to the message
	nonce?: number | string; // Used for validating a message was sent
	pinned: boolean; // Whether this message is pinned
	webhook_id?: Snowflake; // If the message is generated by a webhook, this is the webhook ID
	type: number; // Type of message
	activity?: {}; // Sent with Rich Presence-related chat embeds
	application?: {}; // Sent with Rich Presence-related chat embeds
	message_reference?: {}; // Reference data sent with cross-posted messages
	flags?: number; // Message flag
	sent_at: string
}

export interface IChannelMention {
	id: Snowflake; // ID of the channel
	guild_id: Snowflake; // ID of the guild containing the channel
	type: number; // The type of channel
	name: string; // the name of the channel
}
