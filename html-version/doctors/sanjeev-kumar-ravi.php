<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Sanjeev Kumar Ravi',
    'qualifications' => 'MBBS, Ultrasound Training Course (New Delhi), Diploma in Family Medicine',
    'specialty' => 'Family Medicine & Ultrasonography',
    'experience' => '20 Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Sanjeev Kumar Ravi is an experienced family medicine specialist with expertise in ultrasonography and critical care.",
    'expertise' => [
        'Ultrasonography',
        'Casualty',
        'ICU',
        'HDU Ward',
        'GEN Ward'
    ],
    'education' => [
        [
            'degree' => 'Diploma in Family Medicine',
            'institution' => 'Bhagalpur Medical College',
            'year' => ''
        ],
        [
            'degree' => 'Diploma in Family Medicine',
            'institution' => 'Jawahar Lal Nehru, Apollo Hospital, New Delhi',
            'year' => ''
        ],
        [
            'degree' => 'Ultrasound Training Course',
            'institution' => 'New Delhi',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => '',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Ultra Sound Society of India'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>