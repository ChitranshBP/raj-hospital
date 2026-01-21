<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Piyali Banerjee',
    'qualifications' => 'MBBS, DVDL (Dermatology, Venereology, Leprosy)',
    'specialty' => 'Dermatology',
    'experience' => '12+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Piyali Banerjee(Derma).webp',
    'description' => "Dr. Piyali Banerjee is a skilled dermatologist and cosmetologist with over 12 years of experience, specializing in hair disorders, acne, and cosmetology. She has held advisory roles and received multiple awards for her academic and clinical excellence.",
    'expertise' => [
        'Hair Disorder',
        'Acne',
        'Cosmetology'
    ],
    'education' => [
        [
            'degree' => 'DVDL (Dermatology, Venereology, Leprosy)',
            'institution' => 'RIMS, Ranchi',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => 'RIMS, Ranchi',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Life Membership IADV (LM/J/7586)'
    ],
    'awards' => [
        ['title' => 'First Prize in Award Paper Presentation', 'organization' => 'Asia Aesthetica, Gangtok', 'year' => 'September 2019'],
        ['title' => 'Award Paper Presentation', 'organization' => 'International Dermacon, Hotel Ashoka, New Delhi', 'year' => '2013'],
        ['title' => 'E-Poster Scholarship', 'organization' => 'WCOCD, Bengaluru', 'year' => 'May 2017']
    ],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>