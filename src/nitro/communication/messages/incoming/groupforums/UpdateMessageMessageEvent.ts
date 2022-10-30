import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { UpdateMessageMessageParser } from '../../parser/groupforums/UpdateMessageMessageParser';

export class UpdateMessageMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UpdateMessageMessageParser);
    }

    public getParser(): UpdateMessageMessageParser
    {
        return this.parser as UpdateMessageMessageParser;
    }
}
