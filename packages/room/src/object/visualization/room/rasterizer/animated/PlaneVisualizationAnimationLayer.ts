﻿import { IDisposable, IGraphicAssetCollection, IVector3D } from '@nitrots/api';
import { TextureUtils } from '@nitrots/utils';
import { Sprite, Texture } from 'pixi.js';
import { AnimationItem } from './AnimationItem';

export class PlaneVisualizationAnimationLayer implements IDisposable
{
    private _color: number = 0;
    private _isDisposed: boolean = false;
    private _items: AnimationItem[];

    constructor(k: any, assets: IGraphicAssetCollection)
    {
        this._color = 0;
        this._isDisposed = false;
        this._items = [];

        if(k && assets)
        {
            for(const item of k)
            {
                if(!item) continue;

                const assetName = item.asset;

                if(assetName)
                {
                    const asset = assets.getAsset(assetName);

                    if(asset) this._items.push(new AnimationItem(item.x, item.y, item.speedX, item.speedY, asset));
                }
            }
        }
    }

    public get disposed(): boolean
    {
        return this._isDisposed;
    }

    public dispose(): void
    {
        this._isDisposed = true;

        if(this._items)
        {
            for(const item of this._items) item && item.dispose();

            this._items = [];
        }
    }

    public clearCache(): void
    {
    }

    public render(canvas: Texture, width: number, height: number, normal: IVector3D, offsetX: number, offsetY: number, maxX: number, maxY: number, dimensionX: number, dimensionY: number, timeSinceStartMs: number): Texture
    {
        if(((maxX > 0) && (maxY > 0)))
        {
            let index = 0;

            while(index < this._items.length)
            {
                const item = (this._items[index] as AnimationItem);

                if(item)
                {
                    const point = item.getPosition(maxX, maxY, dimensionX, dimensionY, timeSinceStartMs);

                    point.x = Math.trunc(point.x - offsetX);
                    point.y = Math.trunc(point.y - offsetY);

                    if(item.bitmapData)
                    {
                        if((point.x > -(item.bitmapData.width)) && (point.x < canvas.width) && (point.y > -(item.bitmapData.height)) && (point.y < canvas.height))
                        {
                            const sprite = new Sprite(item.bitmapData.texture);

                            sprite.position.set(point.x, point.y);

                            TextureUtils.writeToTexture(sprite, canvas, false);
                        }

                        if(((point.x - maxX) > -(item.bitmapData.width)) && ((point.x - maxX) < canvas.width) && (point.y > -(item.bitmapData.height)) && (point.y < canvas.height))
                        {
                            const sprite = new Sprite(item.bitmapData.texture);

                            sprite.position.set((point.x - maxX), point.y);

                            TextureUtils.writeToTexture(sprite, canvas, false);
                        }

                        if((point.x > -(item.bitmapData.width)) && (point.x < canvas.width) && ((point.y - maxY) > -(item.bitmapData.height)) && ((point.y - maxY) < canvas.height))
                        {
                            const sprite = new Sprite(item.bitmapData.texture);

                            sprite.position.set(point.x, (point.y - maxY));

                            TextureUtils.writeToTexture(sprite, canvas, false);
                        }

                        if(((point.x - maxX) > -(item.bitmapData.width)) && ((point.x - maxX) < canvas.width) && ((point.y - maxY) > -(item.bitmapData.height)) && ((point.y - maxY) < canvas.height))
                        {
                            const sprite = new Sprite(item.bitmapData.texture);

                            sprite.position.set((point.x - maxX), (point.y - maxY));

                            TextureUtils.writeToTexture(sprite, canvas, false);
                        }
                    }
                }

                index++;
            }
        }

        return canvas;
    }
}