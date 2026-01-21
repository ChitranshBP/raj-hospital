<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Anup Kumar Jha',
    'qualifications' => 'MBBS, Cardio-Physician (NI), IGNOU',
    'specialty' => 'Cardiology',
    'experience' => '30+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Anup Kumar Jha_.webp',
    'description' => "Dr. Anup Kumar Jha is an experienced cardiologist with over 30 years of expertise in cardiac care.",
    'expertise' => [],
    'education' => [
        [
            'degree' => 'Cardio-Physician (NI), IGNOU',
            'institution' => 'Fortis Escorts, New Delhi',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'Volgograd State Medical Academy',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Indian Medical Association',
        'ACLS Provider'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>