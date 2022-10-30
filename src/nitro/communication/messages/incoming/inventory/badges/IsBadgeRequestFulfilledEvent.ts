﻿import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../core';
import { IsBadgeRequestFulfilledParser } from '../../../parser/inventory/badges/IsBadgeRequestFulfilledParser';

export class IsBadgeRequestFulfilledEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IsBadgeRequestFulfilledParser);
    }

    public getParser(): IsBadgeRequestFulfilledParser
    {
        return this.parser as IsBadgeRequestFulfilledParser;
    }
}
