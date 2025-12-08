/* eslint-env node */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== Image to WebP Converter ===\n');

// Check if sharp is installed
try {
  execSync('npm list sharp', { stdio: 'ignore' });
} catch (error) {
  console.log('Installing sharp for image conversion...');
  execSync('npm install sharp', { stdio: 'inherit' });
}

// Import sharp after ensuring it's installed
const sharp = (await import('sharp')).default;

// Directories to search for images
const imageDirectories = [
  path.join(__dirname, 'public', 'assets'),
  path.join(__dirname, 'src', 'assets')
];

// Directories to search for code files to update references
const codeDirectories = [
  path.join(__dirname, 'src')
];

// Statistics
const stats = {
  converted: 0,
  failed: 0,
  skipped: 0,
  filesUpdated: 0
};

// Store mapping of old paths to new paths
const pathMapping = new Map();

/**
 * Recursively find all image files in a directory
 */
function findImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Convert an image to WebP format
 */
async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Skipped (already exists): ${path.basename(webpPath)}`);
    stats.skipped++;
    return null;
  }

  try {
    // Create backup
    const backupPath = imagePath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(imagePath, backupPath);
    }

    // Convert to WebP
    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    console.log(`✅ Converted: ${path.basename(imagePath)} -> ${path.basename(webpPath)}`);
    stats.converted++;

    // Store path mapping for later reference updates
    const relativePath = imagePath.replace(__dirname, '').replace(/\\/g, '/');
    const relativeWebpPath = webpPath.replace(__dirname, '').replace(/\\/g, '/');
    pathMapping.set(relativePath, relativeWebpPath);

    return webpPath;
  } catch (error) {
    console.error(`❌ Failed to convert ${path.basename(imagePath)}: ${error.message}`);
    stats.failed++;
    return null;
  }
}

/**
 * Find all JSX/JS files to update
 */
function findCodeFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findCodeFiles(filePath, fileList);
    } else if (/\.(jsx|js|tsx|ts)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Update image references in code files
 */
function updateCodeReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Replace .png, .jpg, .jpeg with .webp
  const patterns = [
    /(['"`])([^'"`]*?)\.(png|jpg|jpeg)(['"`])/gi,
    /src=["']([^"']*?)\.(png|jpg|jpeg)["']/gi,
    /image:\s*["']([^"']*?)\.(png|jpg|jpeg)["']/gi,
    /poster=["']([^"']*?)\.(png|jpg|jpeg)["']/gi
  ];

  patterns.forEach(pattern => {
    const newContent = content.replace(pattern, (match, ...args) => {
      // Different patterns have different group structures
      let imagePath, extension;

      if (match.includes('src=') || match.includes('image:') || match.includes('poster=')) {
        imagePath = args[0];
        extension = args[1];
      } else {
        imagePath = args[1];
        extension = args[2];
      }

      updated = true;
      return match.replace(`.${extension}`, '.webp');
    });

    if (newContent !== content) {
      content = newContent;
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`📝 Updated references in: ${path.relative(__dirname, filePath)}`);
    stats.filesUpdated++;
  }

  return updated;
}

/**
 * Main conversion process
 */
async function main() {
  console.log('Step 1: Finding all PNG and JPG images...\n');

  const allImages = [];
  imageDirectories.forEach(dir => {
    const images = findImageFiles(dir);
    allImages.push(...images);
  });

  console.log(`Found ${allImages.length} images to convert\n`);
  console.log('Step 2: Converting images to WebP...\n');

  // Convert all images
  for (const imagePath of allImages) {
    await convertToWebP(imagePath);
  }

  console.log('\nStep 3: Updating code references...\n');

  // Find and update all code files
  const allCodeFiles = [];
  codeDirectories.forEach(dir => {
    const files = findCodeFiles(dir);
    allCodeFiles.push(...files);
  });

  allCodeFiles.forEach(filePath => {
    updateCodeReferences(filePath);
  });

  console.log('\n=== CONVERSION SUMMARY ===\n');
  console.log(`✅ Successfully converted: ${stats.converted} images`);
  console.log(`⏭️  Skipped (already exist): ${stats.skipped} images`);
  console.log(`❌ Failed: ${stats.failed} images`);
  console.log(`📝 Code files updated: ${stats.filesUpdated} files`);

  console.log('\n=== IMPORTANT NOTES ===\n');
  console.log('1. Original images have been backed up with .backup extension');
  console.log('2. All code references have been updated to .webp');
  console.log('3. Test your application thoroughly before deleting backups');
  console.log('4. To restore originals, rename .backup files back to original names');
  console.log('\nConversion complete! 🎉');
}

// Run the conversion
main().catch(error => {
  console.error('Conversion failed:', error);
  process.exit(1);
});
