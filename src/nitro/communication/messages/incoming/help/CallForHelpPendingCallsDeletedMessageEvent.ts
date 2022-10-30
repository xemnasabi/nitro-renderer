import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { CallForHelpPendingCallsDeletedMessageParser } from '../../parser/help/CallForHelpPendingCallsDeletedMessageParser';

export class CallForHelpPendingCallsDeletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpPendingCallsDeletedMessageParser);
    }

    public getParser(): CallForHelpPendingCallsDeletedMessageParser
    {
        return this.parser as CallForHelpPendingCallsDeletedMessageParser;
    }
}
