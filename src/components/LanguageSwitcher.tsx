'use client';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../redux/languageSlice';
import { RootState } from '../redux/store';
import i18n from '../lib/i18n';

export default function LanguageSwitcher() {
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        dispatch(changeLanguage(newLang));       
        i18n.changeLanguage(newLang);           
    };

    return (
        <select
            value={language}
            onChange={handleChange}
            className="form-select w-auto"
        >
            <option value="vi">VI</option>
            <option value="en">EN</option>
        </select>
    );
}
