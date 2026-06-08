const fs = require('fs');
const path = require('path');

// ================= НАСТРОЙКИ =================
const ROOT_DIR = '.';                    // Папка, откуда начинать поиск ('.' = текущая)
const OLD_PATH = '/user_choose_language';
const NEW_PATH = '/user_choose_language';

const EXCLUDE_DIRS = ['node_modules', '.git', 'dist', 'build'];
const TEXT_EXTENSIONS = [
    '.html', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', 
    '.json', '.md', '.txt', '.php', '.vue', '.svelte'
];
// ============================================

function shouldProcessFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return TEXT_EXTENSIONS.includes(ext);
}

function replaceInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const oldContent = content;

        // Заменяем точное совпадение
        content = content.split(OLD_PATH).join(NEW_PATH);

        if (content !== oldContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Заменено: ${filePath}`);
        }
    } catch (err) {
        console.error(`❌ Ошибка при обработке ${filePath}:`, err.message);
    }
}

function walkDir(dir) {
    try {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (!EXCLUDE_DIRS.includes(file)) {
                    walkDir(fullPath);
                }
            } else if (shouldProcessFile(fullPath)) {
                replaceInFile(fullPath);
            }
        }
    } catch (err) {
        console.error(`❌ Ошибка при чтении папки ${dir}:`, err.message);
    }
}

// Запуск
console.log(`🔍 Ищем и заменяем "${OLD_PATH}" → "${NEW_PATH}"\n`);
walkDir(ROOT_DIR);
console.log('\n🎉 Замена завершена!');