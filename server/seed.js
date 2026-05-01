const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');
const Portfolio = require('./models/Portfolio');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Assignment = require('./models/Assignment');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB Connected');

    // Clear existing
    await Admin.deleteMany();
    await Portfolio.deleteMany();
    await Project.deleteMany();
    await Experience.deleteMany();
    await Education.deleteMany();
    await Assignment.deleteMany();

    // 1. Create Admin
    const admin = new Admin({
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      password: process.env.ADMIN_PASSWORD || 'password123'
    });
    await admin.save();
    console.log('Admin user created');

    // 2. Create Portfolio Config
    const config = new Portfolio({
      personalInfo: {
        fullName: "Lokendra Pandey",
        jobTitle: "Computer Science & Engineering Student (AI/ML)",
        tagline: "I engineer solutions — from algorithms to deployable systems.",
        location: "Dehradun, Uttarakhand, India",
        email: "lokendrapandey914@gmail.com",
        phone: "", 
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
        twitter: "#",
        resumeLink: "/resume.pdf",
        profilePhoto: "https://ui-avatars.com/api/?name=Lokendra+Pandey&background=6610f2&color=fff&size=400"
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
      ]
    });
    await config.save();

    // 3. Create Projects
    await Project.insertMany([
      {
        name: "AI-Powered Health Assistant",
        description: "Built end-to-end during a 48-hour Hackathon. An intelligent application to assist users with health-related queries using ML models.",
        techUsed: ["Python", "Machine Learning", "Node.js", "React"],
        features: ["Symptom Analysis", "Real-time query processing", "Secure database"],
        liveUrl: "#",
        githubUrl: "#",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
        type: "Hackathon",
        featured: true,
        order: 1
      },
      {
        name: "Algorithm Implementations from Scratch",
        description: "Implemented complex algorithms including Huffman Coding, LZW, Discrete Cosine Transform (DCT), Burrows-Wheeler Transform (BWT), and Motion Estimation entirely from scratch without using high-level libraries.",
        techUsed: ["C++", "Python", "Data Structures"],
        features: ["Custom Logic", "High Performance", "Educational"],
        liveUrl: "#",
        githubUrl: "#",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
        type: "Personal",
        featured: true,
        order: 2
      }
    ]);

    // 4. Create Experience
    await Experience.insertMany([
      {
        company: "Independent Developer",
        role: "Full Stack & ML Projects",
        duration: "2023 – Present",
        location: "Dehradun, India",
        highlights: [
          "Built 5 end-to-end projects independently across Machine Learning, Backend, and DBMS.",
          "Consistently practiced and solved complex Data Structures & Algorithms problems on HackerEarth."
        ],
        order: 1
      }
    ]);

    // 5. Create Education
    await Education.insertMany([
      {
        institute: "Your College / University Name",
        degree: "B.Tech — Computer Science & Engineering",
        field: "Artificial Intelligence & Machine Learning",
        duration: "Start Year – Expected",
        cgpa: "X.X / 10",
        order: 1
      }
    ]);

    console.log('Data successfully seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
