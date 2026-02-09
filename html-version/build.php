<?php
/**
 * Static Site Builder
 * Renders all .php pages into static .html files inside dist/
 */

$distDir = __DIR__ . '/dist';

// Clean dist folder
if (is_dir($distDir)) {
    $it = new RecursiveDirectoryIterator($distDir, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
    foreach ($files as $file) {
        if ($file->isDir()) {
            rmdir($file->getRealPath());
        } else {
            unlink($file->getRealPath());
        }
    }
} else {
    mkdir($distDir, 0755, true);
}

// Helper: recursively copy a directory
function copyDir($src, $dst) {
    if (!is_dir($dst)) {
        mkdir($dst, 0755, true);
    }
    $dir = opendir($src);
    while (($file = readdir($dir)) !== false) {
        if ($file === '.' || $file === '..') continue;
        $srcPath = $src . '/' . $file;
        $dstPath = $dst . '/' . $file;
        if (is_dir($srcPath)) {
            copyDir($srcPath, $dstPath);
        } else {
            copy($srcPath, $dstPath);
        }
    }
    closedir($dir);
}

// Helper: render a PHP file to HTML string using a subprocess
function renderPhp($filePath) {
    $escaped = escapeshellarg($filePath);
    $html = shell_exec("php $escaped 2>&1");
    return $html;
}

// Collect all page PHP files (exclude components, templates, header, footer, build script)
$excludeFiles = ['header.php', 'footer.php', 'doctor-profile-template.php', 'build.php'];
$excludeDirs = ['components'];

$pages = [];

// Root-level pages
foreach (glob(__DIR__ . '/*.php') as $file) {
    $basename = basename($file);
    if (in_array($basename, $excludeFiles)) continue;
    $pages[] = ['file' => $file, 'output' => $distDir . '/' . str_replace('.php', '.html', $basename), 'subdir' => ''];
}

// Specialty pages
foreach (glob(__DIR__ . '/specialties/*.php') as $file) {
    $basename = basename($file);
    $outDir = $distDir . '/specialties';
    if (!is_dir($outDir)) mkdir($outDir, 0755, true);
    $pages[] = ['file' => $file, 'output' => $outDir . '/' . str_replace('.php', '.html', $basename), 'subdir' => 'specialties'];
}

// Doctor pages
foreach (glob(__DIR__ . '/doctors/*.php') as $file) {
    $basename = basename($file);
    $outDir = $distDir . '/doctors';
    if (!is_dir($outDir)) mkdir($outDir, 0755, true);
    $pages[] = ['file' => $file, 'output' => $outDir . '/' . str_replace('.php', '.html', $basename), 'subdir' => 'doctors'];
}

echo "Building " . count($pages) . " pages...\n";

$success = 0;
$failed = 0;

foreach ($pages as $page) {
    $relPath = ($page['subdir'] ? $page['subdir'] . '/' : '') . basename($page['file']);
    try {
        $html = renderPhp($page['file']);
        file_put_contents($page['output'], $html);
        echo "  OK: $relPath\n";
        $success++;
    } catch (Exception $e) {
        echo "  FAIL: $relPath - " . $e->getMessage() . "\n";
        $failed++;
    }
}

// Copy assets folder
echo "\nCopying assets...\n";
if (is_dir(__DIR__ . '/assets')) {
    copyDir(__DIR__ . '/assets', $distDir . '/assets');
    echo "  Assets copied.\n";
}

echo "\nBuild complete: $success succeeded, $failed failed.\n";
echo "Output: dist/\n";
