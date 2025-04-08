// General Stuff
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {fetchColors, saveColor, deleteColor} from '../../api';
import { toast } from 'react-toastify';

// Sub-Components
import ColorSlider from './ColorSlider/ColorSlider'
import ColorField from "./ColorPreview/ColorPreview";
import ColorHistory from './ColorHistory/ColorHistory';

// Resources
import './ColorPicker.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFloppyDisk, faCheck} from '@fortawesome/free-solid-svg-icons'

interface SavedColor {
    id: number;
    name: string;
    red: number;
    green: number;
    blue: number;
    created_at: string;
}

export default function ColorPicker() {
    const {t} = useTranslation();

    const [rgb, setRgb] = useState<number[]>([0, 0, 0]);
    const [name, setName] = useState<string>('');
    const [history, setHistory] = useState<SavedColor[]>([]);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        fetchColors().then(setHistory);
    }, []);

    const handleSave = () => {
        saveColor(name, rgb[0], rgb[1], rgb[2])
            .then(() => {
                setName('');
                setSaved(true);
                setTimeout(() => setSaved(false), 2000);
                toast.success(t('saveSuccess') as string);
                return fetchColors().then(setHistory);
            })
            .catch(() => toast.error(t('error') as string));
    };

    const handleDelete = (id: number) => {
        deleteColor(id)
            .then(() => {
                toast.info(t('deleteSuccess') as string);
                return fetchColors().then(setHistory);
            })
            .catch(() => toast.error(t('error') as string));
    };

    return (
        <div className="color-picker">
            {/* Color slider inputs */}
            <ColorSlider onColorChange={setRgb}/>

            {/* Color preview field */}
            <ColorField rgb={rgb}/>

            {/* Name Input */}
            <input
                className="color-picker__nameInput"
                type="text"
                placeholder={t('colorNamePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSave();
                    }
                }}
            />

            {/* submit button */}
            <button
                className={`color-picker__submit ${saved ? 'color-picker__submit--success' : ''}`} onClick={handleSave}>
                {/* change button text during save action */}
                {saved ? (
                    <>
                        {t('saveSuccess')}<FontAwesomeIcon icon={faCheck}/>
                    </>
                ) : (
                    <>
                        {t('saveButton')}<FontAwesomeIcon icon={faFloppyDisk}/>
                    </>
                )}
            </button>

            {/* Show history only if there is one */}
            {history.length > 0 && <ColorHistory colors={history} onDelete={handleDelete} />}
            
        </div>
    );
}
