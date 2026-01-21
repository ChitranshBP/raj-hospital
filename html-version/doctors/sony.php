<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Sony',
    'qualifications' => 'MBBS, DNB (Anaesthesiology), PDCC',
    'specialty' => 'Interventional Pain Medicine & Critical Care',
    'experience' => '4+ Years',
    'regNo' => '', // Optional
    'image' => '../assets/Doc-Side/Dr Sony (Interventional Pain Medicine).webp',
    'description' => "Dr. Sony is a dedicated specialist in Interventional Pain Medicine and Critical Care. She has advanced training in managing chronic pain syndromes and uses minimally invasive techniques to improve patients' quality of life. Her expertise includes regenerative therapy and spine interventions.",
    'expertise' => [
        'Regenerative Therapy (GFC / PRP)',
        'Chronic Joint Pain Management',
        'Minimally Invasive Pain & Spine Interventions',
        'Low Back & Neck Pain',
        'Neuralgias & Headache Interventions',
        'Cancer Pain Management'
    ],
    'education' => [
        [
            'degree' => 'PDCC – Interventional Pain Medicine',
            'institution' => 'AIIMS Rishikesh',
            'year' => ''
        ],
        [
            'degree' => 'DNB (Anaesthesiology)',
            'institution' => 'Fortis Hospitals Ltd., Bangalore',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'A.N.M.M.C.H',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Lifetime Member – ISA & ISPC'
    ],
    'awards' => [
        [
            'title' => 'Young Researcher Award',
            'organization' => 'InSc',
            'year' => '2023'
        ],
        [
            'title' => 'Dr. Ashok Kumar Gupta YAA',
            'organization' => 'ISACON (East Zone)',
            'year' => '2025'
        ]
    ],
    'contact' => [
        'phone' => '0651-2446111'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>