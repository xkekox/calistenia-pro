const fs = require('fs');
const { execSync } = require('child_process');

const REPO = 'xkekox/calistenia-pro';
const files = ['app.html', 'database.js', 'admin.html'];

for (const file of files) {
    console.log(`\n--- Uploading ${file} ---`);
    try {
        const content = fs.readFileSync(file, 'utf8');
        const base64Content = Buffer.from(content).toString('base64');

        let sha = '';
        try {
            const info = execSync(`gh api repos/${REPO}/contents/${file}`, { encoding: 'utf8' });
            sha = JSON.parse(info).sha;
            console.log(`Found existing file, updating with sha: ${sha}`);
        } catch (e) {
            console.log(`File ${file} does not exist yet. Creating a new one.`);
        }

        const data = {
            message: `Update ${file} (Painel Admin e Fluxo de Exercícios)`,
            content: base64Content,
            branch: 'main'
        };
        if (sha) data.sha = sha;

        fs.writeFileSync('temp.json', JSON.stringify(data));
        execSync(`gh api -X PUT repos/${REPO}/contents/${file} --input temp.json`);
        console.log(`✅ Successfully uploaded ${file}`);
    } catch (err) {
        console.error(`❌ Error uploading ${file}:`, err.message);
    }
}
