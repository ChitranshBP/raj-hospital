<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Shubham Shekhar',
    'qualifications' => 'ACLS, BLS',
    'specialty' => 'Emergency',
    'experience' => '2 Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Shubham Shekhar is an emergency medicine specialist skilled in ICU management, patient counseling, and minor surgical procedures.",
    'expertise' => [
        'ICU Ward, Casualty, OPD Management',
        'Assistant Consultant',
        'Patient Counselling',
        'Minor Surgery',
        'Patient Administration'
    ],
    'education' => [
        [
            'degree' => 'ACLS, BLS',
            'institution' => 'IMS, SUM Hospital Institute of Medical Science and SUM Hospital, Bhubaneswar',
            'year' => ''
        ]
    ],
    'memberships' => [
        'ACLS, BLS'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>