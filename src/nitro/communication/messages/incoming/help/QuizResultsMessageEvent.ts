import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { QuizResultsMessageParser } from '../../parser/help/QuizResultsMessageParser';

export class QuizResultsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuizResultsMessageParser);
    }

    public getParser(): QuizResultsMessageParser
    {
        return this.parser as QuizResultsMessageParser;
    }
}
