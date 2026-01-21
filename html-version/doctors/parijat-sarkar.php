<?php
$base_url = '../';
$doctor = [
    'name' => 'Mr. Parijat Sarkar',
    'qualifications' => 'M.Sc (Sports Nutrition), B.Sc (Dietetics)',
    'specialty' => 'Dietetics & Nutrition',
    'experience' => '6+ Years',
    'regNo' => '', // Optional
    'image' => '../assets/Doc-Side/Mr. Parijat Sarkar (Dietetian).webp',
    'description' => "Mr. Parijat Sarkar is a specialized Clinical Dietician and Sports Nutritionist. He provides personalized nutrition plans for managing metabolic disorders, lifestyle diseases, and body recomposition. His approach focuses on preventive healthcare through balanced nutrition.",
    'expertise' => [
        'Clinical Dietetics & Nutrition',
        'Sports Dietetics',
        'Preventive Healthcare Nutrition',
        'Metabolic Disorder Management',
        'MNT of Lifestyle Disorder',
        'Body Recomposition'
    ],
    'education' => [
        [
            'degree' => 'M.Sc (Sports Nutrition Specialist)',
            'institution' => '',
            'year' => ''
        ],
        [
            'degree' => 'B.Sc (Dietetics & Nutrition)',
            'institution' => 'NSHM Knowledge Campus, Durgapur',
            'year' => ''
        ],
        [
            'degree' => 'ISSA (Life Science)',
            'institution' => '',
            'year' => ''
        ]
    ],
    'memberships' => [],
    'awards' => [],
    'contact' => [
        'phone' => '0651-2446111'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>