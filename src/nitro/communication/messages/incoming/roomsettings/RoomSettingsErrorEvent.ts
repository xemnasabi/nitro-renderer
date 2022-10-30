import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../core';
import { RoomSettingsErrorParser } from '../../parser/roomsettings/RoomSettingsErrorParser';

export class RoomSettingsErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomSettingsErrorParser);
    }

    public getParser(): RoomSettingsErrorParser
    {
        return this.parser as RoomSettingsErrorParser;
    }
}
