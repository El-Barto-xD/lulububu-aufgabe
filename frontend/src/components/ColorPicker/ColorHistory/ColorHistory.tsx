import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

interface SavedColor {
    id: number;
    name: string;
    red: number;
    green: number;
    blue: number;
    created_at: string;
}

interface ColorHistoryProps {
    colors: SavedColor[];
    onDelete: (id: number) => void;
}

export default function ColorHistory({ colors, onDelete }: ColorHistoryProps) {
    const {t} = useTranslation();

    return (
        <div className="color-picker__history">
            <h3>{t('savedColors')}</h3>
            <ul>
                {colors.map((color) => {
                    const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
                    const rgbString = `R${color.red}, G${color.green}, B${color.blue}`;
                    return (
                        <li key={color.id}>
                            <div className="color-picker__color-details">
                                <div className="color-picker__color-preview"
                                     style={{backgroundColor: rgbColor,}}
                                />
                                <div className="color-picker__color-info">
                                    <strong>{color.name}</strong>
                                    <div>{rgbString}</div>
                                </div>
                            </div>
                            <button className="color-picker__color-delete" onClick={() => onDelete(color.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
