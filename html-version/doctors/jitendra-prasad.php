<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Jitendra Prasad',
    'qualifications' => 'MBBS, MD (Microbiology)',
    'specialty' => 'FNAC, Biopsy, Blood & Laboratory Investigations',
    'experience' => '9+ Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Jitendra Prasad is a specialist in microbiology and laboratory investigations.",
    'expertise' => [],
    'education' => [
        [
            'degree' => 'MBBS, MD (Microbiology)',
            'institution' => 'HIMDI Institute of Medical Sciences, Lucknow',
            'year' => ''
        ],
        [
            'degree' => 'MBBS, MD (Microbiology)',
            'institution' => 'M.L.N Medical College, Allahabad',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Professor, Prasad Institute of Medical Sciences, Lucknow'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>