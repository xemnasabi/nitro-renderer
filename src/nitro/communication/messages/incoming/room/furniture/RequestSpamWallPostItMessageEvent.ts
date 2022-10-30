import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../core';
import { RequestSpamWallPostItMessageParser } from '../../../parser/room/furniture/RequestSpamWallPostItMessageParser';

export class RequestSpamWallPostItMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RequestSpamWallPostItMessageParser);
    }

    public getParser(): RequestSpamWallPostItMessageParser
    {
        return this.parser as RequestSpamWallPostItMessageParser;
    }
}
