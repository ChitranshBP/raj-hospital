<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Abhishek Bhattacharjee',
    'qualifications' => 'MBBS, MDS (Oral & Maxillofacial Surgery – Rajiv Gandhi University of Health Sciences, Bangalore, Karnataka)',
    'specialty' => 'Dental',
    'experience' => '10+ Years',
    'regNo' => '',
    'image' => '../assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.webp',
    'description' => "Dr. Abhishek Bhattacharjee has over 10 years of clinical experience, treating more than 3000 satisfied patients and performing over 2500 surgeries, including 1000+ major surgeries. He is the Chief Oral and Maxillofacial Surgeon in Asia's largest dental chain across Delhi and Bangalore.",
    'expertise' => [
        'Dental Implants',
        'Tooth Extraction',
        'Surgical Extraction',
        'Complex Maxillofacial Trauma',
        'Oral Pathology (Cyst and Tumors)',
        'Orofacial Infections',
        'Dentofacial Deformity Correction',
        'Facial Esthetic Procedures',
        'Oral Cancer Detection and Treatment',
        'Decreased Mouth Opening Treatment',
        'Temporomandibular Joint Diseases',
        'Minor and Major Oral Surgical Procedures',
        'Root Canal Treatment (RCT)',
        'Crowns & Bridges',
        'Dental Filling',
        'Scaling & Polishing'
    ],
    'education' => [
        [
            'degree' => 'MDS',
            'institution' => 'Rajiv Gandhi University of Health Sciences, Bangalore',
            'year' => ''
        ],
        [
            'degree' => 'MBBS',
            'institution' => '',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Member of the Indian Association of Oral and Maxillofacial Surgeons',
        'Member of the Indian Dental Association'
    ],
    'awards' => [
        ['title' => 'Certification in Hair Transplant Surgery', 'organization' => '', 'year' => '']
    ],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>