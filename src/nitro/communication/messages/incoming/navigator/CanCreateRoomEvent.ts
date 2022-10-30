import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { CanCreateRoomMessageParser } from '../../parser/navigator/CanCreateRoomMessageParser';

export class CanCreateRoomEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CanCreateRoomMessageParser);
    }

    public getParser(): CanCreateRoomMessageParser
    {
        return this.parser as CanCreateRoomMessageParser;
    }
}
