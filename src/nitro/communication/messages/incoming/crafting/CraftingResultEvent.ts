import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { CraftingResultMessageParser } from '../../parser/crafting/CraftingResultMessageParser';

export class CraftingResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CraftingResultMessageParser);
    }

    public getParser(): CraftingResultMessageParser
    {
        return this.parser as CraftingResultMessageParser;
    }
}
