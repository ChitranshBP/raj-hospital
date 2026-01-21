<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Vijay Raj',
    'qualifications' => 'MBBS, MD, DM (Neurology)',
    'specialty' => 'Neurosciences',
    'experience' => '15+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/vijayraj.webp',
    'description' => "Dr. Vijay Raj is a skilled Neurologist specializing in Neurodiagnostics and Stroke Management with extensive experience.",
    'expertise' => [
        'Neurodiagnostics',
        'Stroke Management',
        'Neurological Disorders',
        'Brain & Nervous System Care'
    ],
    'education' => [
        [
            'degree' => 'DM (Neurology)',
            'institution' => '',
            'year' => ''
        ],
        [
            'degree' => 'MD',
            'institution' => '',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => '',
            'year' => ''
        ]
    ],
    'memberships' => [],
    'awards' => [],
    'contact' => [
        'phone' => '+919771488888'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>