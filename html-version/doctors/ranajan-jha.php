<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Ranajan Kumar Jha',
    'qualifications' => 'MBBS, MS, FESS',
    'specialty' => 'ENT',
    'experience' => '15+ Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Ranajan Kumar Jha is an experienced ENT specialist at Raj Hospital, Ranchi, with expertise in functional endoscopic sinus surgery (FESS) and comprehensive treatment of ear, nose, and throat conditions. He is recognized for his patient-centric approach and advanced surgical skills.",
    'expertise' => [
        'Functional Endoscopic Sinus Surgery (FESS)',
        'Management of Nasal and Sinus Disorders',
        'Ear, Nose, and Throat Care',
        'Skull Base and Endoscopic Surgeries'
    ],
    'education' => [
        [
            'degree' => 'Fellowship in Functional Endoscopic Sinus Surgery (FESS)',
            'institution' => '',
            'year' => ''
        ],
        [
            'degree' => 'MS (ENT)',
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
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>