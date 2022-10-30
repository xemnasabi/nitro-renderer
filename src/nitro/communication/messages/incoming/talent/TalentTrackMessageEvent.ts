import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { TalentTrackParser } from '../../parser/talent/TalentTrackParser';

export class TalentTrackMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TalentTrackParser);
    }

    public getParser(): TalentTrackParser
    {
        return this.parser as TalentTrackParser;
    }
}
