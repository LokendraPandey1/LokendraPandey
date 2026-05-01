const portfolioData = {
  personalInfo: {
    fullName: "Lokendra Pandey",
    jobTitle: "Computer Science & Engineering Student (AI/ML)",
    tagline: "I engineer solutions — from algorithms to deployable systems.",
    location: "Dehradun, Uttarakhand, India",
    email: "lokendrapandey914@gmail.com",
    phone: "", 
    github: "https://github.com/lokendrapandey",
    linkedin: "https://linkedin.com/in/lokendrapandey",
    twitter: "#",
    resumeLink: "/resume.pdf",
    profilePhoto: "/lokendra-dark.png"
  },
  aboutMe: {
    shortBio: "I'm a CSE undergrad specializing in AI/ML, blending algorithmic thinking with full-stack development to build systems that matter.",
    longBio: [
      "I'm Lokendra, a CSE undergrad specializing in AI/ML with a deep interest in backend engineering and algorithms. I don't just use tools — I build them.",
      "From implementing compression algorithms like Huffman Coding and DCT from scratch, to training deep learning models and competing in hackathons, I prefer understanding how things work under the hood.",
      "I'm currently looking for opportunities where I can build things that actually matter. My core domains include Data Structures & Algorithms, Machine Learning & Deep Learning, Backend Development, and Database Design."
    ],
    yearsOfExperience: 2,
    currently: "Actively seeking internships and project collaborations"
  },
  skills: [
    { category: "Languages", items: ["C++", "Python", "Java", "JavaScript"] },
    { category: "Web & Backend", items: ["React.js", "Node.js", "Express.js", "HTML/CSS"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { category: "ML / AI", items: ["scikit-learn", "TensorFlow / Keras", "OpenCV", "NLP basics"] },
    { category: "Tools", items: ["Git", "GitHub", "Power BI", "Postman"] }
  ],
  projects: [
    {
      id: "p1",
      name: "MechMinds",
      category: "Full Stack E-Commerce",
      year: "2024",
      description: "A full-stack e-commerce platform for mechanical keyboards built with the MERN stack. Features secure OTP-based authentication, product catalog with filtering, shopping cart, order tracking, and a full admin dashboard.",
      longDescription: "MechMinds is a production-ready e-commerce application featuring a modern cyber/dark aesthetic. It implements secure JWT + OTP authentication via email/SMS, a fully interactive product catalog with search and filtering, a 5-star review system, shopping cart management, and a checkout system with Cash on Pickup support. The admin dashboard allows complete product, order, and user management with invoice generation capabilities.",
      techUsed: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Framer Motion", "Nodemailer"],
      features: [
        "Secure login/signup with OTP verification (Email/SMS)",
        "Product catalog with filtering, search, and detailed views",
        "Interactive 5-star rating system and user reviews",
        "Shopping cart with quantity management",
        "Secure checkout with Cash on Pickup support",
        "User order history and detailed order tracking",
        "Admin dashboard: Products, Orders, Users management",
        "Invoice generation (printable)",
        "Responsive design — desktop & mobile optimized",
        "Cyber/Dark theme aesthetic"
      ],
      thumbnail: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&q=80&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/lokendrapandey/mechminds",
      featured: true,
      order: 1
    },
    {
      id: "p2",
      name: "FileXplore",
      category: "Systems / CLI Tool",
      year: "2024",
      description: "A complete virtual file system simulator in C++17 that operates on a real folder sandbox with both a Unix-like CLI and a modern web-based GUI for managing files and directories.",
      longDescription: "FileXplore implements a sandboxed virtual file system with path safety to prevent directory traversal attacks. It offers a command-line interface with command history and real-time operations, alongside a modern web GUI featuring visual navigation, drag-and-drop upload, multiple view modes (list, grid, tree), dark/light theme, and keyboard shortcut support.",
      techUsed: ["C++17", "HTML5", "CSS3", "JavaScript", "File System API", "WebSockets"],
      features: [
        "Sandboxed virtual file system within a designated root directory",
        "Unix-like CLI with standard file/directory operations",
        "Path safety — prevents directory traversal attacks",
        "Persistent storage using real files and directories",
        "Command history (last 20 commands)",
        "Web-based GUI with visual file system navigation",
        "Drag-and-drop file upload",
        "Multiple view modes: list, grid, tree",
        "Dark/light theme support",
        "Keyboard shortcuts and touch support"
      ],
      thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/lokendrapandey/filexplore",
      featured: true,
      order: 2
    },
    {
      id: "p3",
      name: "StockIt",
      category: "Data Engineering / AI",
      year: "2024",
      description: "A Python ETL pipeline that fetches stock prices and financial news from multiple APIs, loads them into PostgreSQL, and supports real-time monitoring with sentiment analysis.",
      longDescription: "StockIt integrates with Yahoo Finance and Alpha Vantage for historical and intraday stock data, and NewsAPI/Marketaux for financial news. It runs a full ETL pipeline — extracting raw data, transforming and cleaning it, and loading into PostgreSQL. Sentiment analysis is performed using TextBlob and VADER. The system supports both one-time ETL runs and continuous real-time monitoring mode.",
      techUsed: ["Python", "PostgreSQL", "Yahoo Finance", "Alpha Vantage", "NewsAPI", "TextBlob", "VADER", "Pandas", "SQLAlchemy"],
      features: [
        "Fetch historical and intraday stock data (Yahoo Finance & Alpha Vantage)",
        "Fetch financial news (NewsAPI, Marketaux)",
        "Full ETL pipeline — extract, transform, load into PostgreSQL",
        "Sentiment analysis (TextBlob / VADER)",
        "Real-time monitoring / continuous tracking mode",
        "Utility scripts for one-time or continuous ETL runs",
        "Configurable via .env for API keys"
      ],
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/lokendrapandey/stockit",
      featured: false,
      order: 3
    },
    {
      id: "p4",
      name: "CompressoX",
      category: "Full Stack / File Processing",
      year: "2023",
      description: "A powerful full-stack file compression application supporting Images, PDFs, Videos, DOCX, and Text files with both lossy and lossless compression algorithms.",
      longDescription: "CompressoX provides a web interface backed by a Python/Flask server that applies algorithm-specific compression per file type: intelligent resizing and quality adjustment for images, structure optimization for PDFs, motion compensation and DCT for videos, XML optimization for DOCX, and Huffman/LZW coding for text. Files are processed locally and cleaned up automatically for security.",
      techUsed: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Pillow", "PyPDF2", "python-docx", "OpenCV", "NumPy"],
      features: [
        "Compress Images (JPG, PNG), PDFs, Videos (MP4, AVI), DOCX, and Text files",
        "Intelligent image resizing, quality adjustment, and format optimization",
        "PDF structure optimization and image downsampling",
        "Video compression: motion compensation and DCT",
        "DOCX image compression and XML structure optimization",
        "Text: Huffman coding, LZW and lossless techniques",
        "Lossy vs Lossless mode selection with quality level control",
        "Real-time compression progress and results",
        "Files processed locally and auto-cleaned for security"
      ],
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/lokendrapandey/compressox",
      featured: false,
      order: 4
    },
    {
      id: "p5",
      name: "FaceEmotion AI",
      category: "AI / Machine Learning",
      year: "2024",
      description: "A real-time facial emotion recognition system using transfer learning with VGGNet and ImageNet, capable of classifying 7 human emotions from live webcam feeds with 70% accuracy.",
      longDescription: "Developed as part of a B.Tech CSE (AI/ML) curriculum, this system uses Haar Cascades for face detection and a fine-tuned VGGNet model (pre-trained on ImageNet) for feature extraction and emotion classification. It processes live video streams in real-time, classifying frames into 7 emotional states: Happy, Sad, Angry, Neutral, Surprise, Disgust, and Fear. The model architecture is saved as JSON + H5 weights for easy deployment.",
      techUsed: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "VGGNet", "ImageNet", "Jupyter Notebook"],
      features: [
        "Real-time emotion detection from live webcam feed",
        "Facial detection using Haar Cascades",
        "Transfer learning with pre-trained VGGNet (ImageNet weights)",
        "Classifies 7 emotions: Happy, Sad, Angry, Neutral, Surprise, Disgust, Fear",
        "70% classification accuracy",
        "Model saved as JSON architecture + H5 weights",
        "Jupyter Notebook for training, evaluation, and visualization",
        "Python script for real-time detection (realtimedetect.py)"
      ],
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/lokendrapandey/facial-emotion-recognition",
      featured: true,
      order: 5
    }
  ],
  experience: [
    {
      id: "e1",
      company: "Independent Developer",
      role: "Full Stack & ML Projects",
      duration: "2023 – Present",
      location: "Dehradun, India",
      highlights: [
        "Built 5 end-to-end projects independently across Machine Learning, Backend, and DBMS.",
        "Consistently practiced and solved complex Data Structures & Algorithms problems on HackerEarth.",
        "Designed and optimized database schemas using MongoDB and PostgreSQL."
      ],
      order: 1
    },
    {
      id: "e2",
      company: "Hackathons",
      role: "Competitor & Developer",
      duration: "Various",
      location: "Remote/In-person",
      highlights: [
        "Developed an AI-Powered Health Assistant within 48 hours.",
        "Participated and built solutions in the 72-hour Graph-e-thon Hackathon.",
        "Collaborated under extreme time constraints to deliver functional prototypes."
      ],
      order: 2
    }
  ],
  education: [
    {
      id: "edu1",
      institute: "Your College / University Name",
      degree: "B.Tech — Computer Science & Engineering",
      field: "Artificial Intelligence & Machine Learning",
      duration: "Start Year – Graduation Year / Expected",
      cgpa: "X.X / 10",
      order: 1
    }
  ],
  assignments: [
    {
      id: "a1",
      title: "Huffman Coding Compression",
      course: "Data Structures & Algorithms",
      description: "Implemented a lossless data compression algorithm using Huffman Coding trees. The program takes a text file, builds frequency maps, generates a prefix code tree, and outputs compressed binary.",
      techUsed: ["C++", "Trees", "Priority Queues"],
      githubUrl: "#",
      order: 1
    },
    {
      id: "a2",
      title: "Neural Network from Scratch",
      course: "Machine Learning",
      description: "Built a 3-layer feedforward neural network using raw Python and NumPy to classify handwritten digits (MNIST dataset) without using TensorFlow or PyTorch. Implemented forward propagation, backpropagation, and gradient descent.",
      techUsed: ["Python", "NumPy", "Math"],
      githubUrl: "#",
      order: 2
    },
    {
      id: "a3",
      title: "Custom OS Scheduler",
      course: "Operating Systems",
      description: "Designed a CPU scheduling simulation implementing Round Robin, Shortest Job First (SJF), and Priority scheduling algorithms to compare average wait and turnaround times.",
      techUsed: ["C", "Process Management", "Algorithms"],
      githubUrl: "#",
      order: 3
    }
  ]
};

module.exports = portfolioData;
