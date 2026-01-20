import fs from 'fs';
import path from 'path';

const dirs = ['doctors', 'specialties'];

dirs.forEach(d => {
    const targetDir = path.join('.', d);
    if (fs.existsSync(targetDir)) {
        console.log(`Scanning directory: ${targetDir}`);
        const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));
        files.forEach(file => {
             const baseName = path.basename(file, '.html');
             const targetFile = `${baseName}.php`;
             const filePath = path.join(targetDir, file);
             const targetPath = path.join(targetDir, targetFile);

             console.log(`Processing ${filePath} -> ${targetPath}...`);
             let content = fs.readFileSync(filePath, 'utf8');

             // 1. Add base_url (Deep depth)
             content = "<?php $base_url = '../'; ?>\n" + content;

             // 2. Replace Header
             const headerRegex = /<!-- Header -->[\s\S]*?<\/header>/;
             if (headerRegex.test(content)) {
                content = content.replace(headerRegex, "<?php include $base_url . 'components/navbar.php'; ?>");
             } else {
                 const headerTagRegex = /<header[\s\S]*?<\/header>/;
                 if (headerTagRegex.test(content)) {
                      content = content.replace(headerTagRegex, "<?php include $base_url . 'components/navbar.php'; ?>");
                 } else {
                     console.warn(`Header not found in ${filePath}`);
                 }
             }

             // 3. Replace Footer
             const footerRegex = /<footer[\s\S]*?<\/footer>/;
             if (footerRegex.test(content)) {
                content = content.replace(footerRegex, "<?php include $base_url . 'components/footer.php'; ?>");
             } else {
                 console.warn(`Footer not found in ${filePath}`);
             }

             // 4. Replace .html links
             content = content.replace(/href="([^"]+)\.html"/g, 'href="$1.php"');
             
             fs.writeFileSync(targetPath, content);
             console.log(`Created ${targetPath}`);
        });
    } else {
        console.log(`Directory not found: ${targetDir}`);
    }
});
