<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Shaista Huma',
    'qualifications' => 'M.B.B.S (Gold Medalist), M.D. (Dermatology, Venereology & Leprosy), M.D. (Physiology), A.C.S.I Fellowship in Dermatosurgery',
    'specialty' => 'Dermatology',
    'experience' => '10+ Years',
    'regNo' => '',
    'image' => '../assets/doc-dummy/male-dummy-raj.webp',
    'description' => "Dr. Shaista Huma is a respected dermatologist and dermatosurgeon with over 10 years of experience. She specializes in clinical dermatology, aesthetic dermatology, and advanced dermatosurgical procedures, committed to patient-centric, modern skin care treatments.",
    'expertise' => [
        'Clinical dermatology (acne, melasma, eczema, psoriasis, autoimmune blistering diseases, connective tissue diseases etc.)',
        'Dermatosurgery (vitiligo surgery, nail surgery, electro surgery etc.)',
        'Mole removal',
        'Cyst excision',
        'Acne scar revision & post traumatic scar revision surgery',
        'Freckles',
        'Chemical peels',
        'Platelet rich plasma therapy for hair loss and face',
        'Hair loss and other hair disorders',
        'Microneedling with prp',
        'Micro dermabrasion, dermaroller, dermapen etc.',
        'Laser skin toning',
        'Laser hair reduction',
        'Fractional laser resurfacing',
        'Mnrf (microneedling radiofrequency)'
    ],
    'education' => [
        [
            'degree' => 'M.D. (Dermatology, Venereology & Leprosy)',
            'institution' => 'R.I.M.S, Ranchi',
            'year' => ''
        ],
        [
            'degree' => 'M.D. (Physiology)',
            'institution' => 'R.I.M.S, Ranchi',
            'year' => ''
        ],
        [
            'degree' => 'M.B.B.S (Gold Medalist)',
            'institution' => 'M.G.M Medical College, Jamshedpur',
            'year' => ''
        ],
        [
            'degree' => 'A.C.S.I Fellowship in Dermatosurgery',
            'institution' => 'Shivani Skin Care & Cosmetic Clinic, Surat, Gujarat (Under Dr. Yogesh Bhingradia)',
            'year' => ''
        ]
    ],
    'memberships' => [
        'Life member of I.A.D.V.L. (Indian Association of Dermatologists, Venereologists & Leprologists)',
        'Life member of A.C.S.I. (Association of Cutaneous Surgeons of India)'
    ],
    'awards' => [
        ['title' => 'Presented multiple papers at various national and international dermatology conferences', 'organization' => '', 'year' => ''],
        ['title' => 'Received intensive training in clinical dermatology, aesthetics & lasers under various renowned dermologists in Bengaluru', 'organization' => '', 'year' => ''],
        ['title' => 'Publications in national and international journals', 'organization' => '', 'year' => '']
    ],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>