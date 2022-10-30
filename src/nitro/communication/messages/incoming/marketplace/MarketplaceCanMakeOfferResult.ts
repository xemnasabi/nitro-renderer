import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { MarketplaceCanMakeOfferResultParser } from '../../parser/marketplace/MarketplaceCanMakeOfferResultParser';


export class MarketplaceCanMakeOfferResult extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceCanMakeOfferResultParser);
    }

    public getParser(): MarketplaceCanMakeOfferResultParser
    {
        return this.parser as MarketplaceCanMakeOfferResultParser;
    }
}
