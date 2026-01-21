<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Prakash Chandra',
    'qualifications' => 'MBBS, MS, MCH',
    'specialty' => 'Neurosciences',
    'experience' => '18+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr. Prakash Chandra (Neuro Surgeon).webp',
    'description' => "Dr. Prakash Chandra is a highly experienced Neurosurgeon with expertise in Neurology, Epileptology, and Neurophysiology.",
    'expertise' => [
        'Neurosurgery',
        'Epileptology',
        'Neurophysiology',
        'Complex Brain Surgeries'
    ],
    'education' => [
        [
            'degree' => 'MCH (Neurosurgery)',
            'institution' => '',
            'year' => ''
        ],
        [
            'degree' => 'MS',
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