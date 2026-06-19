const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const HTML_DIR = path.join(PUBLIC_DIR, 'html');
const TARGET_JS_RELATIVE = 'js/scripts/left_header_menu.js';

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        
        // 🛡️ ЗАЩИТА: Скрипт пропустит файл с иконками и ничего в нем не изменит!
        if (file.toLowerCase() === 'left-header-menu.html') {
            console.log(`[ЗАЩИЩЕНО] Пропускаем главный файл меню: ${file}`);
            return; 
        }

        if (fs.statSync(filePath).isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (path.extname(file).toLowerCase() === '.html') {
            fileList.push(filePath);
        }
    });
    return fileList;
}

function processFiles() {
    if (!fs.existsSync(HTML_DIR)) {
        console.error(`Ошибка: Папка ${HTML_DIR} не найдена! Запусти из корня проекта.`);
        return;
    }

    const htmlFiles = getHtmlFiles(HTML_DIR);
    let updatedCount = 0;

    htmlFiles.forEach(filePath => {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            let isModified = false;

            // Замена блока div во всех файлах
            const divRegex = /<div\s+id="height-at-rectangle"[^]*?>[^]*?<\/div>/g;
            if (divRegex.test(content)) {
                content = content.replace(divRegex, `\n    <div id="left-header-menu"></div>\n    `);
                isModified = true;
            }

            // Подключение скрипта с динамическим путем
            const htmlDir = path.dirname(filePath);
            const targetJsPath = path.join(PUBLIC_DIR, TARGET_JS_RELATIVE);
            let relativePath = path.relative(htmlDir, targetJsPath).replace(/\\/g, '/');
            const scriptTag = `<script src="${relativePath}"></script>`;

            if (!content.includes(relativePath)) {
                if (content.includes('</head>')) {
                    content = content.replace('</head>', `    ${scriptTag}\n</head>`);
                } else {
                    content += `\n${scriptTag}`;
                }
                isModified = true;
            }

            if (isModified) {
                fs.writeFileSync(filePath, content, 'utf8');
                updatedCount++;
            }
        } catch (err) {
            console.error(`Ошибка в файле ${filePath}:`, err);
        }
    });

    console.log(`\n🎉 Готово! Успешно изменено файлов: ${updatedCount}`);
}

processFiles();