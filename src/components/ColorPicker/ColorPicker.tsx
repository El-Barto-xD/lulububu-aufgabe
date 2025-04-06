import { useState } from 'react';
import ColorSlider from './ColorSlider/ColorSlider'
import ColorField from "./ColorPreview/ColorPreview";

import './ColorPicker.scss';


export default function ColorPicker() {
    const [rgb, setRgb] = useState<number[]>([0, 0, 0]);

    return (
        <div className="color-picker">
            <ColorSlider onColorChange={setRgb} />
            <ColorField rgb={rgb} />
        </div>
    );
}
