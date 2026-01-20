import fs from 'fs';
import path from 'path';

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    const baseName = path.basename(file, '.html');
    const targetFile = `${baseName}.php`;
    
    console.log(`Processing ${file} -> ${targetFile}...`);
    
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    content = "<?php $base_url = './'; ?>\n" + content;

    // Header logic
    // Pattern 1: Explicit comment indicating typical social header start
    const commentRegex = /<!-- Header \(Same as index.html\) -->[\s\S]*?<\/header>/;
    // Pattern 2: Standard Header comment
    const stdCommentRegex = /<!-- Header -->[\s\S]*?<\/header>/;
    // Pattern 3: Explicit header tag fallback
    const headerTagRegex = /<header[\s\S]*?<\/header>/;
    
    if (commentRegex.test(content)) {
        content = content.replace(commentRegex, "<?php include $base_url . 'components/navbar.php'; ?>");
    } else if (stdCommentRegex.test(content)) {
        content = content.replace(stdCommentRegex, "<?php include $base_url . 'components/navbar.php'; ?>");
    } else if (headerTagRegex.test(content)) {
        console.log(`Fallback to <header> tag for ${file}`);
        content = content.replace(headerTagRegex, "<?php include $base_url . 'components/navbar.php'; ?>");
    } else {
        console.warn(`WARNING: Header not found in ${file}`);
    }

    // Footer
    const footerRegex = /<footer[\s\S]*?<\/footer>/;
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, "<?php include $base_url . 'components/footer.php'; ?>");
    }

    content = content.replace(/href="([^"]+)\.html"/g, 'href="$1.php"');
    
    fs.writeFileSync(path.join(dir, targetFile), content);
    console.log(`Created ${targetFile}`);
});
