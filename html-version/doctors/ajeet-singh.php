<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Ajeet Singh',
    'qualifications' => 'MBBS (1982), Post Graduate Diploma (1988)',
    'specialty' => 'Administration & General Medicine',
    'experience' => '38 Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Ajeet Singh is an experienced medical administrator with extensive background in strategic planning, policy compliance, and health program supervision.",
    'expertise' => [
        'Strategic Planning Policies and Procedure Compliance',
        'Member and Committee & HIC Committee',
        'Nodal Officer COVID-19 Disease / Vaccination Drive',
        'Member On-board for MOU with CGHS, ESI, ECHS, Railways, CILETA',
        'Imparting AB-PMJAY Scheme as a Business Module',
        'Imparting CME PWG for Doctors and Nursing Staff',
        'Supervision of Health Check-up Program'
    ],
    'education' => [
        [
            'degree' => 'Post Graduate Diploma',
            'institution' => 'Ranchi University',
            'year' => '1988'
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'MGM Medical College, JSR',
            'year' => '1982'
        ]
    ],
    'memberships' => [
        'Chairman (CIL) Award for Prevention of Disease and Health Awareness',
        'Publication of Service Focused Journal',
        'Presentation of Scientific Paper on National Level'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>