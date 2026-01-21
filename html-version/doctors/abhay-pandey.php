<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Abhay Kumar Pandey',
    'qualifications' => 'BPT, MPT, PGDYT, FOMT, FDM, FNMT, MIAP',
    'specialty' => 'Physiotherapy & Rehabilitation',
    'experience' => '16+ Years',
    'regNo' => '',
    'image' => '../assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.webp',
    'description' => "Dr. Abhay Kr Pandey is a senior physiotherapist at Raj Hospital, Ranchi, with over 16 years of experience specializing in orthopedic and traumatology physiotherapy, yoga therapy, and manual therapy. His interests include cardiology, heart problems, and chest-related issues.",
    'expertise' => [
        'Orthopedic & Traumatology Physiotherapy',
        'Yoga Therapy',
        'Manual Therapy',
        'Cardiology',
        'Chest Related Issues'
    ],
    'education' => [
        [
            'degree' => 'Master Of Physiotherapy (MPT) - Yoga Therapy',
            'institution' => 'Saveetha Medical College, Chennai',
            'year' => ''
        ],
        [
            'degree' => 'Bachelor of Physiotherapy (BPT)',
            'institution' => 'Meenakshi Medical College, Chennai',
            'year' => ''
        ],
        [
            'degree' => 'Post Graduate Diploma In Yoga (COMT)',
            'institution' => 'Annamalai University, Chidambaram',
            'year' => ''
        ],
        [
            'degree' => 'Certificate Of Manual Therapy (COMT)',
            'institution' => '',
            'year' => ''
        ]
    ],
    'memberships' => [],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>