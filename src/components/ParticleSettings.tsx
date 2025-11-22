import React from 'react';
import { particleTypes } from '../config.ts'; 
import { TooltipLabel } from './TooltipLabel.tsx';

const particleOptionsMap: Record<string, string[]> = {
  'reddust': ['color', 'size'],
  'mobspell': ['color'],
  'spell': ['color'],
  'fallingdust': ['color', 'material'],
  'dust_color_transition': ['transition', 'size'],
};

interface ParticleSettingsProps {
  particleType: string;
  setParticleType: (val: string) => void;
  amount: number;
  setAmount: (val: number) => void;
  size: number;
  setSize: (val: number) => void;
  useColor: boolean;
  setUseColor: (val: boolean) => void;
  color: string;
  setColor: (val: string) => void;
  color1: string;
  setColor1: (val: string) => void;
  color2: string;
  setColor2: (val: string) => void;
  material: string;
  setMaterial: (val: string) => void;
  repeat: number;
  setRepeat: (val: number) => void;
  repeati: number;
  setRepeati: (val: number) => void;

  amountUpProps: any;
  amountDownProps: any;
  sizeUpProps: any;
  sizeDownProps: any;
  repeatUpProps: any;
  repeatDownProps: any;
  repeatiUpProps: any;
  repeatiDownProps: any;
}

export const ParticleSettings: React.FC<ParticleSettingsProps> = (props) => {
  
  const isOptionAvailable = (optionName: string): boolean => {
    return particleOptionsMap[props.particleType]?.includes(optionName) || false;
  };

  return (
    <>
      <h3>2. Particle Options</h3>
      <div className="setting-item">
        <TooltipLabel
          label="Particle Type (p=)"
          description="表示するパーティクルの種類を選択します。"
        />
        <select
          id="particleType"
          value={props.particleType}
          onChange={(e) => props.setParticleType(e.target.value)}
        >
          {particleTypes.map((p) => (
            <option key={p} value={p}>
              {p === 'reddust' ? 'reddust (※In-game preview is available)' : p}
            </option>
          ))}
        </select>
      </div>

      <div className="setting-row">
        <div className="setting-item">
          <TooltipLabel
            label="Amount (a=)"
            description="1ピクセルあたりに表示するパーティクルの数。"
          />
          <div className="number-input-wrapper">
            <input
              type="number" id="amount" min="1" step="1"
              value={props.amount}
              onChange={(e) => props.setAmount(Number(e.target.value))}
            />
            <div className="number-input-arrows">
              <button type="button" {...props.amountUpProps} tabIndex={-1}>▲</button>
              <button type="button" {...props.amountDownProps} tabIndex={-1}>▼</button>
            </div>
          </div>
        </div>
        {isOptionAvailable('size') && (
          <div className="setting-item">
            <TooltipLabel
              label="Size (size=)"
              description="パーティクルのサイズ (reddust, dust_color_transition のみ)"
            />
            <div className="number-input-wrapper">
              <input
                type="number" id="size" min="0.1" step="0.1"
                value={props.size}
                onChange={(e) => props.setSize(Number(e.target.valueAsNumber || 0.1))}
              />
              <div className="number-input-arrows">
                <button type="button" {...props.sizeUpProps} tabIndex={-1}>▲</button>
                <button type="button" {...props.sizeDownProps} tabIndex={-1}>▼</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOptionAvailable('color') && (
        <div className="setting-item">
          <TooltipLabel
            label="Color (color=)"
            description="パーティクルの色。'Use Pixel Color' にチェックを入れると画像のピクセル色が反映されます。"
          />
          <div className="setting-row">
            <input
              type="checkbox" id="useColor"
              checked={props.useColor}
              onChange={(e) => props.setUseColor(e.target.checked)}
            />
            <label htmlFor="useColor" className="compact-label">Use Pixel Color</label>
            {!props.useColor && (
              <input
                type="color" id="color"
                value={props.color}
                onChange={(e) => props.setColor(e.target.value)}
              />
            )}
          </div>
        </div>
      )}

      {isOptionAvailable('transition') && (
        <div className="setting-item">
          <TooltipLabel
            label="Color Transition"
            description="パーティクルの色を Color 1 から Color 2 へ変化させます (dust_color_transition のみ)"
          />
          <div className="setting-row">
            <label htmlFor="color1" className="compact-label">C1 (color1=)</label>
            <input
              type="color" id="color1"
              value={props.color1}
              onChange={(e) => props.setColor1(e.target.value)}
            />
            <label htmlFor="color2" className="compact-label">C2 (color2=)</label>
            <input
              type="color" id="color2"
              value={props.color2}
              onChange={(e) => props.setColor2(e.target.value)}
            />
          </div>
        </div>
      )}

      {isOptionAvailable('material') && (
        <div className="setting-item">
          <TooltipLabel
            label="Material (material=)"
            description="パーティクルの見た目として使用するブロック/アイテム名 (fallingdust のみ)"
          />
          <input
            type="text" id="material"
            value={props.material}
            onChange={(e) => props.setMaterial(e.target.value)}
            placeholder="e.g. STONE"
          />
        </div>
      )}
      
      <div className="setting-row">
        <div className="setting-item">
          <TooltipLabel
            label="Repeat (repeat=)"
            description="パーティクルの表示を繰り返す回数。1の場合は無視されます。"
          />
          <div className="number-input-wrapper">
            <input
              type="number" id="repeat" min="1" step="1"
              value={props.repeat}
              onChange={(e) => props.setRepeat(Number(e.target.value))}
            />
            <div className="number-input-arrows">
              <button type="button" {...props.repeatUpProps} tabIndex={-1}>▲</button>
              <button type="button" {...props.repeatDownProps} tabIndex={-1}>▼</button>
            </div>
          </div>
        </div>
        <div className="setting-item">
          <TooltipLabel
            label="Interval (repeati=)"
            description="Repeatを繰り返す間隔（tick単位）"
          />
          <div className="number-input-wrapper">
            <input
              type="number" id="repeati" min="1" step="1"
              value={props.repeati}
              onChange={(e) => props.setRepeati(Number(e.target.value))}
            />
            <div className="number-input-arrows">
              <button type="button" {...props.repeatiUpProps} tabIndex={-1}>▲</button>
              <button type="button" {...props.repeatiDownProps} tabIndex={-1}>▼</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};