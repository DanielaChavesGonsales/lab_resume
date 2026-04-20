function manageSystemInfo() {
    const ua = window.navigator.userAgent;
    
    const getBrowser = () => {
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Edg')) return 'Edge';
        if (ua.includes('Chrome')) return 'Chrome';
        if (ua.includes('Safari')) return 'Safari';
        return 'Unknown';
    };

    const info = {
        os: [
            ['Win', 'Windows'], ['Mac', 'MacOS'], ['Linux', 'Linux'], 
            ['Android', 'Android'], ['iPhone', 'iOS']
        ].find(([key]) => ua.includes(key))?.[1] || 'Unknown',
        lang: window.navigator.language,
        browser: getBrowser(),
        lastUpdate: new Date().toLocaleString()
    };

    const stored = JSON.parse(localStorage.getItem('systemInfo') || '{}');
    localStorage.setItem('systemInfo', JSON.stringify({ ...stored, ...info }));

    const footer = document.querySelector('.footer-bar');
    if (footer) {
        footer.innerHTML = `ОС: ${info.os} | Браузер: ${info.browser} | Мова: ${info.lang}`;
    }
}

manageSystemInfo();
