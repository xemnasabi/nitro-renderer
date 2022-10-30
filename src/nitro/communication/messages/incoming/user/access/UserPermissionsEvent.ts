import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../core';
import { UserPermissionsParser } from '../../../parser/user/access/UserPermissionsParser';

export class UserPermissionsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserPermissionsParser);
    }

    public getParser(): UserPermissionsParser
    {
        return this.parser as UserPermissionsParser;
    }
}
