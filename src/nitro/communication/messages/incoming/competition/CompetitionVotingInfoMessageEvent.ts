import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { CompetitionVotingInfoMessageParser } from '../../parser';

export class CompetitionVotingInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CompetitionVotingInfoMessageParser);
    }

    public getParser(): CompetitionVotingInfoMessageParser
    {
        return this.parser as CompetitionVotingInfoMessageParser;
    }
}
