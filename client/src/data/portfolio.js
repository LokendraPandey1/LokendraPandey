export const portfolioData = {
  personalInfo: {
    fullName: "Lokendra Pandey",
    jobTitle: "Computer Science & Engineering Student (AI/ML)",
    tagline: "I engineer solutions — from algorithms to deployable systems.",
    location: "Dehradun, Uttarakhand, India",
    email: "lokendrapandey914@gmail.com", // Inferred from previous .env contents
    phone: "", 
    github: "https://github.com/", // Add your username
    linkedin: "https://linkedin.com/in/", // Add your profile
    twitter: "#",
    resumeLink: "/resume.pdf", // Add resume.pdf to public folder
    profilePhoto: "https://ui-avatars.com/api/?name=Lokendra+Pandey&background=6610f2&color=fff&size=400"
  },
  aboutMe: {
    shortBio: "I'm a CSE undergrad specializing in AI/ML, blending algorithmic thinking with full-stack development to build systems that matter.",
    longBio: [
      "I'm Lokendra, a CSE undergrad specializing in AI/ML with a deep interest in backend engineering and algorithms. I don't just use tools — I build them.",
      "From implementing compression algorithms like Huffman Coding and DCT from scratch, to training deep learning models and competing in hackathons, I prefer understanding how things work under the hood.",
      "I'm currently looking for opportunities where I can build things that actually matter. My core domains include Data Structures & Algorithms, Machine Learning & Deep Learning, Backend Development, and Database Design."
    ],
    yearsOfExperience: 2, // Representing academic and project experience
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
      id: 1,
      name: "AI-Powered Health Assistant",
      description: "Built end-to-end during a 48-hour Hackathon. An intelligent application to assist users with health-related queries using ML models.",
      techUsed: ["Python", "Machine Learning", "Node.js", "React"],
      features: ["Symptom Analysis", "Real-time query processing", "Secure database"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      type: "Hackathon",
      featured: true
    },
    {
      id: 2,
      name: "Algorithm Implementations from Scratch",
      description: "Implemented complex algorithms including Huffman Coding, LZW, Discrete Cosine Transform (DCT), Burrows-Wheeler Transform (BWT), and Motion Estimation entirely from scratch without using high-level libraries.",
      techUsed: ["C++", "Python", "Data Structures"],
      features: ["Custom Logic", "High Performance", "Educational"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
      type: "Personal",
      featured: true
    },
    {
      id: 3,
      name: "Graph-e-thon Project",
      description: "Developed during a 72-hour Graph-e-thon Hackathon. A graph-based application to visualize and compute complex relationships.",
      techUsed: ["Algorithms", "JavaScript", "Graph Theory"],
      features: ["Data Visualization", "Shortest Path Computation", "Interactive UI"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      type: "Hackathon",
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      company: "Independent Developer",
      role: "Full Stack & ML Projects",
      duration: "2023 – Present",
      location: "Dehradun, India",
      highlights: [
        "Built 5 end-to-end projects independently across Machine Learning, Backend, and DBMS.",
        "Consistently practiced and solved complex Data Structures & Algorithms problems on HackerEarth.",
        "Designed and optimized database schemas using MongoDB and PostgreSQL."
      ]
    },
    {
      id: 2,
      company: "Hackathons",
      role: "Competitor & Developer",
      duration: "Various",
      location: "Remote/In-person",
      highlights: [
        "Developed an AI-Powered Health Assistant within 48 hours.",
        "Participated and built solutions in the 72-hour Graph-e-thon Hackathon.",
        "Collaborated under extreme time constraints to deliver functional prototypes."
      ]
    }
  ],
  education: [
    {
      id: 1,
      institute: "Your College / University Name",
      degree: "B.Tech — Computer Science & Engineering",
      field: "Artificial Intelligence & Machine Learning",
      duration: "Start Year – Graduation Year / Expected",
      cgpa: "X.X / 10"
    }
  ],
  assignments: [
    {
      id: 1,
      title: "Huffman Coding Compression",
      course: "Data Structures & Algorithms",
      description: "Implemented a lossless data compression algorithm using Huffman Coding trees. The program takes a text file, builds frequency maps, generates a prefix code tree, and outputs compressed binary.",
      techUsed: ["C++", "Trees", "Priority Queues"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Neural Network from Scratch",
      course: "Machine Learning",
      description: "Built a 3-layer feedforward neural network using raw Python and NumPy to classify handwritten digits (MNIST dataset) without using TensorFlow or PyTorch. Implemented forward propagation, backpropagation, and gradient descent.",
      techUsed: ["Python", "NumPy", "Math"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Custom OS Scheduler",
      course: "Operating Systems",
      description: "Designed a CPU scheduling simulation implementing Round Robin, Shortest Job First (SJF), and Priority scheduling algorithms to compare average wait and turnaround times.",
      techUsed: ["C", "Process Management", "Algorithms"],
      githubUrl: "#"
    }
  ]
};

