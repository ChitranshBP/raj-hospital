/* eslint-env node */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the files
const specialtyFile = fs.readFileSync(path.join(__dirname, 'src/pages/SpecialtyDetail.jsx'), 'utf8');
const doctorProfileFile = fs.readFileSync(path.join(__dirname, 'src/pages/DoctorProfile.jsx'), 'utf8');

// Extract doctor IDs from SpecialtyDetail.jsx
const specialtyDoctors = [];
const specialtyRegex = /(\w+):\s*\{[^}]*id:\s*'([^']+)',\s*title:\s*'([^']+)'[^]*?specialists:\s*\[([\s\S]*?)\]/g;

let match;
while ((match = specialtyRegex.exec(specialtyFile)) !== null) {
    const specialtyId = match[1];
    const specialtyTitle = match[3];
    const specialistsBlock = match[4];

    // Extract individual doctors from the specialists block
    const doctorRegex = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
    let doctorMatch;

    while ((doctorMatch = doctorRegex.exec(specialistsBlock)) !== null) {
        specialtyDoctors.push({
            specialty: specialtyTitle,
            specialtyId: specialtyId,
            doctorId: doctorMatch[1],
            doctorName: doctorMatch[2]
        });
    }
}

// Extract doctor IDs from DoctorProfile.jsx
const profileDoctors = [];
const profileRegex = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;

while ((match = profileRegex.exec(doctorProfileFile)) !== null) {
    profileDoctors.push({
        doctorId: match[1],
        doctorName: match[2]
    });
}

// Create a map of profile doctor IDs for quick lookup
const profileDoctorMap = new Map();
profileDoctors.forEach(doc => {
    profileDoctorMap.set(doc.doctorId, doc.doctorName);
});

// Check for mismatches
console.log('=== DOCTOR PROFILE LINK VERIFICATION ===\n');
console.log(`Total doctors in specialty pages: ${specialtyDoctors.length}`);
console.log(`Total doctors in DoctorProfile.jsx: ${profileDoctors.length}\n`);

console.log('=== CHECKING EACH SPECIALTY ===\n');

const mismatches = [];
const matches = [];

specialtyDoctors.forEach(specDoc => {
    const profileName = profileDoctorMap.get(specDoc.doctorId);

    if (!profileName) {
        mismatches.push({
            ...specDoc,
            issue: 'Doctor ID not found in DoctorProfile.jsx'
        });
        console.log(`❌ MISMATCH: ${specDoc.specialty} - ${specDoc.doctorName} (ID: ${specDoc.doctorId})`);
        console.log(`   Issue: Doctor ID not found in DoctorProfile.jsx\n`);
    } else if (profileName !== specDoc.doctorName) {
        mismatches.push({
            ...specDoc,
            profileName: profileName,
            issue: 'Doctor name mismatch'
        });
        console.log(`⚠️  WARNING: ${specDoc.specialty} - ${specDoc.doctorName} (ID: ${specDoc.doctorId})`);
        console.log(`   Specialty page name: ${specDoc.doctorName}`);
        console.log(`   Profile page name: ${profileName}\n`);
    } else {
        matches.push(specDoc);
        console.log(`✅ MATCH: ${specDoc.specialty} - ${specDoc.doctorName} (ID: ${specDoc.doctorId})`);
    }
});

console.log('\n=== SUMMARY ===\n');
console.log(`✅ Correct links: ${matches.length}`);
console.log(`❌ Mismatches: ${mismatches.length}\n`);

if (mismatches.length > 0) {
    console.log('=== ISSUES FOUND ===\n');
    mismatches.forEach((mismatch, index) => {
        console.log(`${index + 1}. ${mismatch.specialty} - ${mismatch.doctorName}`);
        console.log(`   Doctor ID: ${mismatch.doctorId}`);
        console.log(`   Issue: ${mismatch.issue}`);
        if (mismatch.profileName) {
            console.log(`   Profile name: ${mismatch.profileName}`);
        }
        console.log('');
    });
} else {
    console.log('🎉 All doctor profile links are correctly configured!');
}

// Save results to a JSON file
const results = {
    totalSpecialtyDoctors: specialtyDoctors.length,
    totalProfileDoctors: profileDoctors.length,
    matches: matches.length,
    mismatches: mismatches.length,
    details: {
        matches,
        mismatches
    }
};

fs.writeFileSync('doctor-verification-results.json', JSON.stringify(results, null, 2));
console.log('\n📄 Detailed results saved to doctor-verification-results.json');
