<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Ravi Shekhar Singh',
    'qualifications' => 'MBBS, DCH',
    'specialty' => 'Pediatrics & Neonatology',
    'experience' => '10+ Years',
    'regNo' => '',
    'image' => '../assets/specialties/PAEDIATRICS/dr-ravi-shekhar-singh.webp',
    'description' => "Dr. Ravi Shekhar Singh is a skilled Pediatrician specializing in Pediatric Medicine and Critical Care for infants and children.",
    'expertise' => [
        'Pediatric Medicine',
        'Pediatric Critical Care',
        'Neonatal Care',
        'Child Healthcare'
    ],
    'education' => [
        [
            'degree' => 'DCH',
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