<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Shweta Sushmita',
    'qualifications' => 'MBBS, MD (Pathology)',
    'specialty' => 'FNAC, Biopsy, Blood & Laboratory Investigations',
    'experience' => '10+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Lab - Dr. Sweta Sushmita.webp',
    'description' => "Dr. Shweta Sushmita is a pathologist with expertise in histopathology, cytopathology, and hematology.",
    'expertise' => [
        'Histopathology',
        'Cytopathology',
        'Hematology'
    ],
    'education' => [
        [
            'degree' => 'Senior Residency',
            'institution' => 'VMMC & Safdarjung Hospital, New Delhi',
            'year' => ''
        ],
        [
            'degree' => 'MD (Pathology)',
            'institution' => 'KIMS, KIIT University (Bhubaneswar)',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'M.G.M Medical College Kishanganj',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Got Award for Blood Bank - Incharge Khunti'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>