import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { RoomEventMessageParser } from '../../parser/navigator/RoomEventMessageParser';

export class RoomEventEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomEventMessageParser);
    }

    public getParser(): RoomEventMessageParser
    {
        return this.parser as RoomEventMessageParser;
    }
}
