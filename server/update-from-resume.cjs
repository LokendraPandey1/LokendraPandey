const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const Portfolio = require('./models/Portfolio');

// Education in separate collection
const educationSchema = new mongoose.Schema({ degree: String, field: String, institute: String, duration: String, cgpa: String });
const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);

// Experience in separate collection
const experienceSchema = new mongoose.Schema({ company: String, role: String, duration: String, highlights: [String] });
const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

async function run() {
  await mongoose.connect(MONGO_URI);

  // ── Update Portfolio (personalInfo + aboutMe + skills) ──────────
  await Portfolio.findOneAndUpdate({}, {
    $set: {
      personalInfo: {
        fullName: 'Lokendra Pandey',
        jobTitle: 'Computer Science & Engineering Student (AI/ML)',
        tagline: 'I engineer solutions — from algorithms to deployable systems.',
        location: 'Dehradun, Uttarakhand, India',
        email: 'lokendrapandey914@gmail.com',
        phone: '+91 6396088980',
        github: 'https://github.com/LokendraPandey1',
        linkedin: 'https://www.linkedin.com/in/lokendra-pandey-7a7047253',
        twitter: '#',
        resumeLink: '/resume.pdf',
        profilePhoto: '/lokendra-dark.png',
      },
      aboutMe: {
        shortBio: 'B.Tech CSE (AI/ML) student passionate about algorithms, computer vision, and building full-stack systems.',
        longBio: [
          'I am a Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning at Graphic Era Hill University, Dehradun.',
          'My work spans deep learning systems for computer vision, full-stack e-commerce platforms, data engineering pipelines, and interactive file system simulators.',
          'I enjoy building things that sit at the intersection of AI and real-world applications — from training VGGNet models for facial emotion recognition to architecting MERN-stack platforms with secure authentication.',
        ],
        yearsOfExperience: 2,
        currently: 'Building AI/ML projects and exploring full-stack development',
      },
      skills: [
        { category: 'Languages',       items: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
        { category: 'AI / ML',         items: ['TensorFlow', 'Keras', 'OpenCV', 'CNNs', 'NLP', 'scikit-learn'] },
        { category: 'Web & Backend',   items: ['React', 'Node.js', 'Express.js', 'HTML/CSS', 'Three.js'] },
        { category: 'Databases',       items: ['PostgreSQL', 'MongoDB', 'SQL'] },
        { category: 'Libraries',       items: ['MediaPipe', 'Pillow', 'NumPy', 'Pandas', 'OpenCV'] },
        { category: 'Tools',           items: ['Git', 'GitHub', 'Postman', 'Jupyter Notebook'] },
      ],
    }
  }, { new: true, upsert: true });
  console.log('✅ Portfolio (personalInfo, aboutMe, skills) updated.');

  // ── Education ────────────────────────────────────────────────────
  await Education.deleteMany({});
  await Education.insertMany([
    {
      degree: 'B.Tech — Computer Science & Engineering (AI/ML)',
      field: 'AI & Machine Learning Specialization',
      institute: 'Graphic Era Hill University, Dehradun',
      duration: 'Aug 2023 – Present',
      cgpa: 'Ongoing',
    },
    {
      degree: 'Senior Secondary (Class XII)',
      field: 'Science – CBSE',
      institute: "St. Joseph's Convent School",
      duration: '2022 – 2023',
      cgpa: null,
    },
    {
      degree: 'Secondary (Class X)',
      field: 'CBSE',
      institute: "St. Joseph's Convent School",
      duration: '2020 – 2021',
      cgpa: null,
    },
  ]);
  console.log('✅ Education updated (3 entries).');

  // ── Experience (Academic / Projects exposure) ────────────────────
  await Experience.deleteMany({});
  await Experience.insertMany([
    {
      company: 'Personal Projects & Research',
      role: 'AI/ML Developer & Full Stack Engineer',
      duration: '2023 – Present',
      highlights: [
        'Trained VGGNet-based facial emotion recognition model (70% accuracy) using TensorFlow/Keras',
        'Built MechMinds — a production-ready MERN e-commerce platform with JWT + OTP authentication',
        'Developed FileXplore — a virtual file system simulator in C++17 with CLI and web GUI',
        'Implemented Stock_It — an ETL + sentiment analysis pipeline with PostgreSQL integration',
        'Created CompressoX — a multi-format file compression app using Huffman, DCT, and LZW algorithms',
      ],
    },
  ]);
  console.log('✅ Experience updated.');

  await mongoose.disconnect();
  console.log('\n🎉 All data updated from resume successfully!');
}

run().catch(err => { console.error('❌', err); process.exit(1); });
