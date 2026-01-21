<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Pradeep Prasad',
    'qualifications' => 'MBBS, MD (Biochemistry)',
    'specialty' => 'FNAC, Biopsy, Blood & Laboratory Investigations',
    'experience' => '10+ Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Pradeep Prasad is a specialist in laboratory medicine with expertise in molecular and genomic testing.",
    'expertise' => [
        'Molecular Testing',
        'Genomic Testing'
    ],
    'education' => [
        [
            'degree' => 'MBBS, MD (Biochemistry)',
            'institution' => 'RIMS Ranchi, Jharkhand',
            'year' => ''
        ]
    ],
    'memberships' => [
        'ISO-15189-2022 Qualified',
        'Six-Sigma Methodologies',
        'Molecular Technique in Clinical Laboratory',
        'HIV Testing and Counselling Training (HTCT)'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>