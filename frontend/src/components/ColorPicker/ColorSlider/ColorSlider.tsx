import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface ColorSliderProps {
    onColorChange?: (rgb: number[]) => void;
}

interface ColorSliderState {
    rgb: number[];
}

const labels = ['R', 'G', 'B'];

class ColorSlider extends React.Component<ColorSliderProps, ColorSliderState> {
    constructor(props: ColorSliderProps) {
        super(props);
        this.state = {
            rgb: [0, 0, 0],
        };
    }

    updateColor = (index: number, value: number) => {
        const newRgb = [...this.state.rgb];
        newRgb[index] = value;
        this.setState({ rgb: newRgb });

        if (this.props.onColorChange) {
            this.props.onColorChange(newRgb);
        }
    };

    handleSliderChange = (index: number, value: number) => {
        this.updateColor(index, value);
    };

    handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Math.min(255, Number(event.target.value)));
        this.updateColor(index, value);
    };

    render() {
        return (
            <div className="color-picker__slider-wrap">
                {this.state.rgb.map((value, index) => (
                    <div key={index} className="color-picker__slider">
                        <label>{labels[index]}</label>
                        <Slider
                            min={0}
                            max={255}
                            value={value}
                            onChange={(val) => this.handleSliderChange(index, val as number)}
                        />
                        <input
                            type="number"
                            min={0}
                            max={255}
                            value={value}
                            onChange={(e) => this.handleInputChange(index, e)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ColorSlider;
