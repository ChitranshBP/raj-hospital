<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Praveen Kumar',
    'qualifications' => 'MBBS, DCP (Pathology)',
    'specialty' => 'FNAC, Biopsy, Blood & Laboratory Investigations',
    'experience' => '8+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Praveen Kumar (Lab).webp',
    'description' => "Dr. Praveen Kumar is a pathologist specializing in clinical hematology, cell cytology, and histopathology.",
    'expertise' => [
        'Clinical Hematology',
        'Cell Cytology',
        'Bone Marrow Cytology / Biopsy',
        'Histopathology'
    ],
    'education' => [
        [
            'degree' => 'MBBS, DCP (Pathology)',
            'institution' => 'RIMS, Ranchi, Jharkhand',
            'year' => ''
        ]
    ],
    'memberships' => [
        'ISO-15189-2022 Trained'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>