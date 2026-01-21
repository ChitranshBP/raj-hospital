<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Anamika Kumari',
    'qualifications' => 'MBBS, DNB (Radiotherapy)',
    'specialty' => 'Oncology (Cancer Care)',
    'experience' => '11+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Anamika Onco photo.webp',
    'description' => "Dr. Anamika Kumari is a dedicated Oncologist with expertise in radiation therapy for Head & Neck and Breast cancers.",
    'expertise' => [
        'Head & Neck Oncology',
        'Breast Oncology',
        'Radiotherapy',
        'Cancer Management'
    ],
    'education' => [
        [
            'degree' => 'DNB (Radiotherapy)',
            'institution' => 'Mahavir Cancer Sansthan, Patna',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'Patna Medical College, Patna',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Association of Radiation Oncologist of India'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '0651-2446111'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>