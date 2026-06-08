const fs = require('fs');
const path = require('path');

const folder_path = __dirname;

const new_block = `    <!-- PATH -->
    <div class="path">
        <h2 class="">Path :
            <a class="a-link-path" href="/">Home</a> |
            <a class="a-link-path" href="/PAGE_NODE_JS">Node.js</a> |
        </h2>
    </div>
    <!-- PATH -->`;

const files = fs.readdirSync(folder_path);

files.forEach(file => {
    const full_path = path.join(folder_path, file);

    if (fs.statSync(full_path).isFile() && file.endsWith('.html')) {
        let content = fs.readFileSync(full_path, 'utf8');

        const updated = content.replace(
            /<!--\s*PATH\s*-->[\s\S]*?<!--\s*PATH\s*-->/g,
            new_block
        );

        fs.writeFileSync(full_path, updated, 'utf8');
        console.log('Updated:', file);
    }
});