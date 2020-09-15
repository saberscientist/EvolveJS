/* eslint-disable no-prototype-builtins */
import "reflect-metadata";

function Client(options?: { token: string }) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            token = options?.token
        }
    }
}

function MessageEvent() {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, propertyDescriptor);
        console.log("target", target)
    };
}


@Client({
    token: "safdsadsdff"
})
class client {
    constructor() { console.log(this); }

    @MessageEvent()
    public messageEvent(): void {
        console.log("messageEvent called");
    }
}

console.log(new client())
export * from "./Client/EvolveBuilder";
export * from "./Client/EvolveClient";
export * from "./Client/ClientOptions";
export * from "./Client/ClientUser";
export * from "./Client/API/RestAPI";
export * from "./Client/API/RestAPIHandler";
export * from "./Client/Websocket/Gateway";
export * from "./Client/Websocket/Websocket";
export * from "./Client/Events/BaseEvent";
export * from "./Client/Events/ChannelEvents";
export * from "./Client/Events/GuildBanEvents";
export * from "./Client/Events/GuildEmojiEvents";
export * from "./Client/Events/GuildEvents";
export * from "./Client/Events/GuildIntegrationEvents";
export * from "./Client/Events/GuildMemberEvents";
export * from "./Client/Events/GuildMembersChunkEvents";
export * from "./Client/Events/GuildRoleEvents";
export * from "./Client/Events/MessageEvents";
export * from "./Client/Events/MessageReactionEvents";
export * from "./Interfaces/ActivityOptions";
export * from "./Interfaces/CategoryChannelOptions";
export * from "./Interfaces/DMChannelOptions";
export * from "./Interfaces/EmojiOptions";
export * from "./Interfaces/GroupChannelOptions";
export * from "./Interfaces/GuildMemberOptions";
export * from "./Interfaces/GuildOptions";
export * from "./Interfaces/Interfaces";
export * from "./Interfaces/InviteOptions";
export * from "./Interfaces/InviteOptions";
export * from "./Interfaces/MessageOptions";
export * from "./Interfaces/NewsChannelOptions";
export * from "./Interfaces/OverwriteOptions";
export * from "./Interfaces/PresenceUpdateOptions";
export * from "./Interfaces/RoleOptions";
export * from "./Interfaces/StoreChannelOptions";
export * from "./Interfaces/MessageReactionOptions";
export * from "./Interfaces/TextChannelOptions";
export * from "./Interfaces/UserOptions";
export * from "./Interfaces/VoiceChannelOptions";
export * from "./Interfaces/VoiceRegionOptions";
export * from "./Interfaces/VoiceStateOptions";
export * from "./Interfaces/WebhookOptions";
export * from "./Oauth2/Oauth2";
export * from "./Structures/Channel/CategoryChannel";
export * from "./Structures/Channel/Channel";
export * from "./Structures/Channel/DMChannel";
export * from "./Structures/Channel/GroupChannel";
export * from "./Structures/Channel/NewsChannel";
export * from "./Structures/Channel/Overwrite";
export * from "./Structures/Channel/StoreChannel";
export * from "./Structures/Channel/TextChannel";
export * from "./Structures/Channel/VoiceChannel";
export * from "./Structures/Guild/Emoji";
export * from "./Structures/Guild/Guild";
export * from "./Structures/Guild/GuildMember";
export * from "./Structures/Guild/Invite";
export * from "./Structures/Guild/Role";
export * from "./Structures/Guild/VoiceState";
export * from "./Structures/Guild/Webhook";
export * from "./Structures/Message/Message";
export * from "./Structures/Message/MessageReaction";
export * from "./Structures/Miscs/ClientStatus";
export * from "./Structures/User/Activity";
export * from "./Structures/User/PresenceUpdate";
export * from "./Structures/User/User";
export * from "./Structures/Structures";
export * from "./Utils/Embed/EmbedBuilder";
export * from "./Utils/Embed/EmbedAuthor";
export * from "./Utils/Embed/EmbedField";
export * from "./Utils/Embed/EmbedFooter";
export * from "./Utils/Embed/EmbedImage";
export * from "./Utils/Embed/EmbedProvider";
export * from "./Utils/Embed/EmbedThumbnail";
export * from "./Utils/Embed/EmbedVideo";
export * from "./Utils/Embed/MessageEmbed";
export * from "./Utils/Collectors/BaseCollector";
export * from "./Utils/Collectors/MessageCollector";
export * from "./Utils/Collectors/MessageReactionCollector";
export * from "./Utils/Constants";
