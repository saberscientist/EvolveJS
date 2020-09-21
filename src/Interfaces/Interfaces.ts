/* eslint-disable @typescript-eslint/no-explicit-any */
import { OPCODE } from "..";
import { Overwrite } from "../Structures/Channel/Overwrite";
import { CHANNELTYPES } from "../Utils/Constants";
import { MessageEmbed } from "../Utils/Embed/MessageEmbed";

export interface IAPIParams {
  endpoint: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  postType?: "Message" | "Channel";
  message?: MessageOptions;
  channel?: ChannelOptions;
}

export interface MessageOptions {
  content?: string;
  tts?: boolean;
  embed?: MessageEmbed;
}

export interface ChannelOptions {
  name: string;
  type?: CHANNELTYPES;
  topic?: string;
  bitrate?: string;
  user_limit?: number;
  rate_limit_per_user?: number;
  position?: number;
  permission_overwrites?: Array<Overwrite>;
  parent_id?: string;
  nsfw?: boolean;
}

export interface Payload {
  op: OPCODE;
  t?: string;
  s?: number;
  d?: any;
}