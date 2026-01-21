<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php echo isset($pageTitle) ? $pageTitle : "Raj Hospitals"; ?>
    </title>
    <meta name="description"
        content="<?php echo isset($pageDescription) ? $pageDescription : "Raj Hospitals - Best Multi Specialty Hospital in Ranchi"; ?>">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#fef5f3',
                            100: '#fde9e6',
                            200: '#fbd7d0',
                            300: '#f8b8a9',
                            400: '#f4917a',
                            500: '#fc684b',
                            600: '#ea5234',
                            700: '#c4401f',
                            800: '#a2381c',
                            900: '#86341d'
                        },
                        secondary: {
                            50: '#f0fbff',
                            100: '#e0f6fe',
                            200: '#b9edfe',
                            300: '#7cdcfd',
                            400: '#36c8fa',
                            500: '#0eb3e9',
                            600: '#0191c7',
                            700: '#0274a1',
                            800: '#066185',
                            900: '#0b516e'
                        },
                        accent: {
                            100: '#ffedd5',
                            500: '#f97316',
                            600: '#ea580c',
                        }
                    }
                }
            }
        }
    </script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        /* Custom scrollbar hiding */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Framer Motion mimic */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>

<body class="bg-gray-50">
    <?php include($base_url . 'components/navbar.php'); ?>