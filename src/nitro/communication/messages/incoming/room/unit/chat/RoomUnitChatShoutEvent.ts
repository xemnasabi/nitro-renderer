import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../core';
import { RoomUnitChatParser } from '../../../../parser/room/unit/chat/RoomUnitChatParser';

export class RoomUnitChatShoutEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitChatParser);
    }

    public getParser(): RoomUnitChatParser
    {
        return this.parser as RoomUnitChatParser;
    }
}
