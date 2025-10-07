export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  timeline: string;
  role: string;
  teamSize: string;
  overview: string;
  problem: string;
  solution: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  techStack: string[];
  screenshots: string[];
  links: Array<{
    title: string;
    url: string;
  }>;
  folderPath: string;
};

export const projects: Project[] = [
    {
        slug: "wastara",
        title: "Wastara",
        subtitle: "Web Development & AI Integration",
        description:
            "Wastara is a mobile-first web app for real-time trash reporting and AI-powered route optimization, connecting citizens and organizers in an efficient digital ecosystem.",
        image: "/wastara/wastara1.png",
        timeline: "Jul 2025 - Aug 2025",
        role: "AI Engineer & Frontend Developer",
        teamSize: "2 People",
        overview:
            "Wastara (Waste Nusantara) is an intelligent waste management platform that empowers citizens to report trash with photos and geolocation, and enables organizers to coordinate pickups using AI-based urgency scoring and route optimization.",
        problem:
            "Indonesia faces massive waste management issues, with over half of its waste uncollected. Inefficiencies in coordination and delayed responses worsen environmental and public health conditions.",
        solution:
            "Wastara bridges the gap between communities and organizers through real-time trash reporting, urgency-based prioritization using LLMs, and AI-assisted route planning with optimized working radius.",
        features: [
            {
            title: "Real-time Reporting",
            description: "Users can report trash with descriptions, photos, and GPS locations."
            },
            {
            title: "AI Urgency Scoring",
            description:
                "Hybrid LLM + keyword-based scoring system ranks reports by urgency using Groq Llama-3.1-8b and custom rules."
            },
            {
            title: "Route Optimization",
            description:
                "Cleanups are optimized using Nearest Neighbor with 2-opt improvement, considering distance, urgency, and time."
            },
            {
            title: "Role-based Access",
            description: "Distinct interfaces for citizens (users) and organizers with login & session handling."
            },
            {
            title: "Status Tracking",
            description:
                "Users can track report progress (pending, in-progress, completed) for transparency and engagement."
            }
        ],
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Groq API (Llama 3)",
            "Python",
            "Tailwind CSS"
        ],
        screenshots: ["wastara1"],
        links: [
            {
                title: "View Repository",
                url: "https://github.com/michlleee/wastara"
            },
            {
                title: "View Demo",
                url: "https://wastara-frontend.vercel.app/"
            }
        ],
        folderPath: "/wastara"
    },
    {
        slug: "iris",
        title: "IRIS",
        subtitle: "Mobile Application & AI-Driven Features",
        description:
            "IRIS is a Flutter-based mobile app that helps the elderly and visually impaired navigate daily life through real-time object detection, OCR, and voice feedback.",
        image: "/iris/iris1.png",
        timeline: "May 2025 - Jun 2025",
        role: "AI Engineer & Mobile Developer",
        teamSize: "5 People",
        overview:
            "IRIS (Innovative Recognition for Impaired Sights) is a mobile-first assistive solution designed to support visually impaired and elderly users in daily life. By combining on-device object detection, OCR, and TTS into a unified Flutter experience, it empowers users with real-time auditory feedback to recognize their surroundings, read text, and stay safe and independent.",
        problem:
            "Many elderly and visually impaired individuals struggle with navigating daily environments, reading text, or recognizing objects, especially in unfamiliar or fast-paced settings. Traditional assistive tools often lack real-time responsiveness or integration.",
        solution:
            "IRIS provides a fully-integrated mobile solution using AI models for real-time object detection (YOLOv11), text recognition (Google Vision), and TTS. It enables users to receive spoken descriptions of their surroundings, set reminders, and access emergency help — all from their phone.",
        features: [
            {
            title: "Object Detection",
            description: "Real-time object recognition using YOLOv11 for environmental awareness."
            },
            {
            title: "Text Recognition (OCR)",
            description: "Extract printed text using Google Cloud Vision API for reading signs, menus, etc."
            },
            {
            title: "Text-to-Speech",
            description: "Convert detected text into natural speech using Google Cloud TTS."
            },
            {
            title: "Voice Reminders",
            description: "Custom reminders for medication, activities, and important events."
            },
            {
            title: "Emergency Button",
            description: "Quick-access SOS button to notify trusted contacts."
            },
            {
            title: "Cross-Platform Support",
            description: "Built with Flutter for smooth Android and iOS deployment."
            }
        ],
        techStack: [
            "Flutter",
            "YOLOv11",
            "Google Cloud Vision API",
            "Google Cloud Text-to-Speech",
            "Firebase Authentication",
            "Firebase",
        ],
        screenshots: ["iris1"],
        links: [
            {
                title: "View Repository",
                url: "https://github.com/valentypo/iris_application"
            }
        ],
        folderPath: "/iris"
    },
    {
        slug: "students-wellbeing-assessment",
        title: "Student Wellbeing Assessment",
        subtitle: "Web Development & Machine Learning",
        description:
            "A full-stack web app that predicts student depression levels using a machine learning model, featuring a Next.js frontend and a Flask backend deployed via Vercel and Railway.",
        image: "/students-wellbeing-assessment/students1.png",
        timeline: "May 2025 – Jun 2025",
        role: "ML Engineer & Fullstack Developer",
        teamSize: "3 People",
        overview:
            "The Student Wellbeing Assessment platform helps identify potential signs of depression among students through a data-driven, accessible web app. Built with a modern full-stack architecture, the app collects user inputs and sends them to a Flask-based ML backend, which returns predictions in real time using a trained scikit-learn model.",
        problem:
            "Many students face mental health challenges that go unnoticed due to limited access to early screening tools. Educational institutions lack scalable digital solutions to support timely intervention and wellbeing tracking.",
        solution:
            "This app provides a simple, privacy-conscious web interface where students can self-assess their wellbeing. A machine learning model processes responses and returns personalized mental health insights, helping bridge the gap between awareness and support.",
        features: [
            {
            title: "Depression Prediction",
            description: "ML-powered backend returns depression level predictions based on student responses."
            },
            {
            title: "Next.js Frontend",
            description: "Responsive, mobile-friendly UI built with React and Tailwind CSS."
            },
            {
            title: "Flask API",
            description: "Lightweight Python backend serving ML model predictions via REST API."
            },
            {
            title: "Model Integration",
            description: "Trained using scikit-learn with joblib serialization for deployment."
            },
            {
            title: "Cross-platform Deployment",
            description: "Frontend hosted on Vercel; backend deployed on Railway."
            }
        ],
        techStack: [
            "Next.js",
            "Tailwind CSS",
            "Flask",
            "scikit-learn",
            "pandas",
            "joblib",
            "Flask-CORS",
        ],
        screenshots: ["students1"],
        links: [
            {
                title: "View Frontend Repository",
                url: "https://github.com/valentypo/machine-learning"
            },
            {
                title: "View Backend Repository",
                url: "https://github.com/valentypo/depression-learning-backend"
            },
            {
                title: "View Kaggle",
                url: ""
            },
        ],
        folderPath: "/students-wellbeing-assessment"
    },
    {
        slug: "imdb-sentiment-analysis",
        title: "IMDB Sentiment Analysis",
        subtitle: "NLP, Machine Learning & Transformers",
        description:
            "An NLP project that classifies IMDB reviews using both traditional and transformer-based models, with RoBERTa achieving an F1-score of 89%.",
        image: "/imdb-sentiment-analysis/imdb1.png",
        timeline: "May 2025 – Jun 2025",
        role: "NLP Engineer & Research Lead",
        teamSize: "3 People",
        overview:
            "This project explores various approaches to sentiment classification on the IMDB movie review dataset, comparing traditional ML algorithms (Naive Bayes, SVM, Ridge, LightGBM, CatBoost) with state-of-the-art transformer models like BERT, RoBERTa, DistilBERT, and ALBERT. The final model, RoBERTa, achieved the best performance across metrics with an average F1-score of 89%.",
        problem:
            "IMDB reviews are often long and nuanced, making them challenging for rule-based or classical models to interpret sentiment accurately. Capturing context and subtle language requires deeper understanding beyond bag-of-words or static embeddings.",
        solution:
            "By cleaning and preprocessing the dataset and evaluating models from traditional classifiers to transformers, we identified RoBERTa as the most effective model due to its dynamic masking and efficient training strategy. It captured linguistic nuance better than BERT, DistilBERT, or linear models like Ridge.",
        features: [
            {
            title: "Data Cleaning Pipeline",
            description: "Preprocessing includes HTML stripping, lowercasing, tokenization, lemmatization, and stopword removal."
            },
            {
            title: "Traditional Model Comparison",
            description: "Evaluated TF-IDF + Naive Bayes, Ridge, SVM, LightGBM, and CatBoost with strong baselines."
            },
            {
            title: "Transformer-Based Models",
            description: "Implemented and fine-tuned BERT, RoBERTa, DistilBERT, and ALBERT for text classification."
            },
            {
            title: "Evaluation & Metrics",
            description: "Used accuracy, precision, recall, and F1-score to benchmark performance on validation sets."
            },
            {
            title: "RoBERTa Optimization",
            description: "Chosen as the final model for best tradeoff between speed and accuracy (avg F1-score: 89%)."
            }
        ],
        techStack: [
            "Python",
            "scikit-learn",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Transformers",
            "PyTorch",
            "BERT",
            "RoBERTa",
            "DistilBERT",
            "ALBERT",
            "LightGBM",
            "CatBoost"
        ],
        screenshots: ["imdb1"],
        links: [
            {
                title: "View Colab",
                url: "https://colab.research.google.com/drive/1rWl9pXjLU3blI1GfVr1hUD0SbHxijHJU?usp=sharing"
            },
        ],
        folderPath: "/imdb-sentiment-analysis"
    }



];