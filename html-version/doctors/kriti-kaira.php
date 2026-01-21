<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Kriti Kaira',
    'qualifications' => 'MBBS, MD (Pathology), Post Doctoral Fellowship (Oncopathology)',
    'specialty' => 'FNAC, Biopsy, Blood & Laboratory Investigations',
    'experience' => '3+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr kirti_kaira_lab.webp',
    'description' => "Dr. Kriti Kaira is a pathologist specializing in histopathology, cytology, hematology, and clinical pathology.",
    'expertise' => [
        'Histopathology',
        'Cytology',
        'Hematology',
        'Clinical Pathology'
    ],
    'education' => [
        [
            'degree' => 'Post Doctoral Fellowship (Oncopathology)',
            'institution' => 'NIMS, Hyderabad',
            'year' => ''
        ],
        [
            'degree' => 'MBBS, MD (Pathology)',
            'institution' => 'SGRRIMHS, Dehradun',
            'year' => ''
        ],
        [
            'degree' => 'Senior Resident (Histopathology)',
            'institution' => 'AIIMS, Rishikesh',
            'year' => ''
        ],
        [
            'degree' => 'Ex Consultant',
            'institution' => 'AIG, Hyderabad',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Ex IAPM Member'
    ],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>