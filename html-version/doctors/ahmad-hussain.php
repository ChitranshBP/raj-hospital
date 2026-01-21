<?php
$base_url = '../';
$doctor = [
    'name' => 'Dr. Ahmad Hussain',
    'qualifications' => 'M.B.B.S (PMCH - Dhanbad), MD (Medicine - PMCH, Patna), DrNB (Neurology - Sir Gangaram Hospital, Delhi)',
    'specialty' => 'Neurosciences',
    'experience' => '5+ Years',
    'regNo' => '',
    'image' => '../assets/Doc-Side/Dr Ahmad Hussain.webp',
    'description' => "Dr. Ahmad Hussain is a neurologist with over 5 years of experience in managing complex neurological conditions including stroke, epilepsy, dementias, movement disorders, and neuro-infectious diseases.",
    'expertise' => [
        'Stroke (Ischemic & Haemorrhagic)',
        'Epilepsy',
        'Dementias (Alzheimer\'s Disease, Vascular Dementia etc.)',
        'Parkinson\'s Disease and Atypical Parkinsonism',
        'Autoimmune & Demyelinating Disorders (Multiple Sclerosis, ADEM, NMOSD & MOGAD)',
        'Myasthenia Gravis',
        'Neuro Infectious Disorders (Meningitis, Encephalitis, CNS Tuberculosis, Pott\'s Spine etc.)',
        'Neuropathies (GBS, CIDP etc.)',
        'MND (Motor Neuron Disease)',
        'Myopathies',
        'Movement Disorders'
    ],
    'education' => [
        [
            'degree' => 'DrNB (Neurology)',
            'institution' => 'Sir Gangaram Hospital - Delhi',
            'year' => ''
        ],
        [
            'degree' => 'MD (Medicine)',
            'institution' => 'PMCH - Patna',
            'year' => ''
        ],
        [
            'degree' => 'M.B.B.S',
            'institution' => 'PMCH - Dhanbad',
            'year' => ''
        ]
    ],
    'memberships' => [],
    'awards' => [],
    'contact' => [
        'phone' => '+919263630500'
    ]
];

include($base_url . 'doctor-profile-template.php');
?>