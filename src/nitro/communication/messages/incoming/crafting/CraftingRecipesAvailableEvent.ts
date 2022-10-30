import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { CraftingRecipesAvailableMessageParser } from '../../parser/crafting/CraftingRecipesAvailableMessageParser';

export class CraftingRecipesAvailableEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CraftingRecipesAvailableMessageParser);
    }

    public getParser(): CraftingRecipesAvailableMessageParser
    {
        return this.parser as CraftingRecipesAvailableMessageParser;
    }
}
