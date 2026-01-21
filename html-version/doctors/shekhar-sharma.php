<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Shekhar Sharma',
    'qualifications' => 'MBBS, DMRD (Radiodiagnosis)',
    'specialty' => 'Radiology',
    'experience' => '20+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Shekhar Sharma (Radiologist).webp',
    'description' => "Dr. Shekhar Sharma is an experienced radiologist with over 20 years of expertise in MRI, CT, and conventional radiology.",
    'expertise' => [
        'MRI, CT & Conventional Radiology'
    ],
    'education' => [
        [
            'degree' => 'DMRD',
            'institution' => 'RIMS Ranchi',
            'year' => ''
        ],
        [
            'degree' => 'MBBS (Radiodiagnosis)',
            'institution' => 'MGM Jamshedpur',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Life Member IMA',
        'Life Member IRA',
        'Life Member Academic Medical Forum'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919771488888'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>