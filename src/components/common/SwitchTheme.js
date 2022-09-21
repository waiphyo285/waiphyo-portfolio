import React from "react";
import Switch from "react-switch";

export const checkedIcon = (
    // the sun icon
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
        <path fill="#ff9500" d="M11 11H37V37H11z" />
        <path fill="#ff9500" d="M11.272 11.272H36.728V36.728H11.272z" transform="rotate(-45.001 24 24)" />
        <path fill="#ffd500" d="M13,24c0,6.077,4.923,11,11,11c6.076,0,11-4.923,11-11s-4.924-11-11-11C17.923,13,13,17.923,13,24" />
    </svg>
);

export const uncheckedIcon = (
    // the moon icon
    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="-100 -72 720 720" >
        <path fill="#ffd500" d="M235.46 147.81c29.41 0 53.24 23.83 53.24 53.24 0 29.4-23.83 53.25-53.24 53.25-29.4 0-53.23-23.85-53.23-53.25 0-29.41 23.83-53.24 53.23-53.24zm49.92 337.45a241.624 241.624 0 0 0 48.05-28.44c-7.54-8.16-12.15-19.05-12.15-31.02 0-25.2 20.43-45.63 45.65-45.63 10.18 0 19.58 3.33 27.16 8.96 21.73-36.13 34.22-78.45 34.22-123.68 0-51.18-16-98.6-43.27-137.6a45.401 45.401 0 0 1-18.6 3.96c-25.21 0-45.65-20.44-45.65-45.65 0-6.56 1.38-12.79 3.88-18.43-30.06-20.83-65.1-34.98-102.98-40.31a229.498 229.498 0 0 0-73.86 24.3c15.8 1.1 28.27 14.26 28.27 30.34 0 16.78-13.6 30.4-30.4 30.4-16.79 0-30.39-13.62-30.39-30.4 0-3.87.72-7.57 2.04-10.98a230.644 230.644 0 0 0-24.77 21.5c-34.28 34.26-57.83 79.28-65.22 129.57 8.11-7.39 18.89-11.9 30.73-11.9 25.22 0 45.65 20.42 45.65 45.63s-20.43 45.65-45.65 45.65c-11.85 0-22.65-4.52-30.78-11.93 7.34 50.38 30.92 95.52 65.24 129.85a231.6 231.6 0 0 0 23.55 20.56c-.75-2.63-1.13-5.41-1.13-8.28 0-16.79 13.6-30.39 30.4-30.39 16.78 0 30.4 13.6 30.4 30.39 0 15.04-10.92 27.52-25.26 29.96 31.63 16.24 67.5 25.42 105.49 25.42 9.96 0 19.76-.63 29.38-1.85zM256 0c70.7 0 134.71 28.67 181.02 74.98S512 185.3 512 256c0 70.67-28.67 134.71-74.98 181.02l-.8.74C389.98 483.61 326.27 512 256 512c-70.64 0-134.65-28.68-180.97-74.98C28.68 390.65 0 326.64 0 256c0-70.66 28.68-134.65 74.98-180.97C121.29 28.67 185.33 0 256 0zm93.99 271.87c16.79 0 30.4 13.6 30.4 30.4 0 16.79-13.61 30.4-30.4 30.4-16.8 0-30.4-13.61-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4zM204 306.51c11.98 0 21.68 9.7 21.68 21.67 0 11.96-9.7 21.67-21.68 21.67-11.96 0-21.67-9.71-21.67-21.67 0-11.97 9.71-21.67 21.67-21.67z" />
    </svg>
);

function SwitchThemeComponent() {
    const hours = new Date().getHours();
    const isDay = hours >= 6 && hours < 18; // day => 6 am to 6 pm
    const [dayCheck, setDayCheck] = React.useState(isDay);

    React.useEffect(() => {
        const body = document.body;
        const listGroupItem = document.querySelectorAll(".list-group-item");

        if (dayCheck === true) {
            body.classList.remove("theme-dark");
            for (var i = 0; i < listGroupItem.length; ++i) {
                listGroupItem[i].classList.remove("theme-dark");
            }
        } else {
            body.classList.add("theme-dark");
            for (var i = 0; i < listGroupItem.length; ++i) {
                listGroupItem[i].classList.add("theme-dark");
            }
        }
    }, [dayCheck]);

    return (
        <label className="nav-link">
            <Switch
                onColor="#dfdfdf"
                offColor="#6c757d"
                onChange={() => setDayCheck(!dayCheck)} // custom
                uncheckedIcon={uncheckedIcon}
                checkedIcon={checkedIcon}
                checked={!dayCheck}
            />
        </label>
    );
}

export default SwitchThemeComponent;
