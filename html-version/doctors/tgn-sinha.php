<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. T.G.N. Sinha',
    'qualifications' => 'MBBS, MS, FICS',
    'specialty' => 'ENT',
    'experience' => '45+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr T G N Sinha ( ENT).webp',
    'description' => "Dr. T.G.N. Sinha is a highly experienced ENT specialist with over 45 years of practice.",
    'expertise' => [],
    'education' => [
        [
            'degree' => 'MS, FICS',
            'institution' => 'PMCH, Patna',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'RMCH, Ranchi',
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