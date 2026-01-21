<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Abid Akhtar',
    'qualifications' => 'MBBS, MS (Ophthalmology)',
    'specialty' => 'Ophthalmology',
    'experience' => '20+ Years',
    'regNo' => '', // Optional
    'image' => '../assets/Doc-Side/Dr. Abid Akhtar (Opthal).webp',
    'description' => "Dr. Abid Akhtar is a highly experienced Ophthalmologist specializing in eye care surgeries and treatments. With over 20 years of experience, he is an expert in cataract and refractive surgeries, and treating corneal and external eye diseases.",
    'expertise' => [
        'Cataract Surgery',
        'Refractive Surgery',
        'Cornea Diseases',
        'External Eye Diseases',
        'Comprehensive Eye Care'
    ],
    'education' => [
        [
            'degree' => 'MS (Ophthalmology)',
            'institution' => 'PMCH, Patna, Bihar',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'PMCH, Patna, Bihar',
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