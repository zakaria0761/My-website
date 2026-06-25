"use client";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title */}
        <h1 className="relative text-white text-3xl md:text-5xl font-bold px-4">
          Evaluation of the TESOL Training Program

        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12 leading-relaxed space-y-6">
        <p>
          The 120-hour TESOL training program at the American TESOL Academy in Agadir was a highly valuable and transformative learning experience that significantly contributed to my professional growth as an English language teacher. The program combined theoretical knowledge with practical teaching experience, allowing me to develop the essential competencies required to teach English effectively to learners of different ages and proficiency levels.
        </p>
        <p>
          One of the greatest strengths of the program was its well-balanced curriculum. The training covered fundamental aspects of English language teaching, including teaching methodologies, lesson planning, classroom management, language assessment, and teaching the four language skills. Each module was designed to bridge the gap between theory and classroom practice, enabling trainees to understand not only what to teach but also how to teach effectively.
        </p>
        <p>
          The guidance provided by the teacher trainers was another major strength of the program. Their expertise, professionalism, and willingness to provide constructive feedback created a supportive learning environment that encouraged continuous improvement. Their observations and recommendations helped me identify my strengths while also recognizing areas that required further development. Their mentorship motivated me to become more reflective, confident, and adaptable in my teaching practice.
        </p>
        <p>
          The teaching practice (TP) sessions were undoubtedly the most rewarding component of the program. They provided authentic opportunities to apply the knowledge acquired during the training in realistic classroom situations. Preparing lesson plans, delivering lessons, managing classroom interaction, and receiving immediate feedback allowed me to transform theoretical concepts into practical teaching skills. These experiences increased my confidence and prepared me to face the challenges of real classrooms.
        </p>
        <p>
          Throughout the training, I also developed a learner-centered teaching philosophy. Rather than relying solely on teacher explanations, I learned to create interactive lessons that actively engage students through communication, collaboration, games, visual aids, and meaningful tasks. This approach helps learners become active participants in the learning process while improving their confidence and language proficiency.
        </p>
        <p>
          Another important aspect of the program was reflective practice. After each teaching practice session, I analyzed my own performance by identifying successful teaching strategies as well as areas that needed improvement. This habit of reflection helped me improve my lesson planning, classroom management, instructional clarity, timing, and adaptability. I came to understand that effective teaching is a continuous process of learning, evaluating, and improving.
        </p>
        <p>
          The observation of my peers' teaching sessions also contributed significantly to my professional development. Observing different teaching styles, classroom management techniques, and instructional strategies broadened my perspective on English language teaching. It allowed me to learn from both successful practices and common teaching challenges while developing the ability to critically evaluate classroom instruction.
        </p>
        <p>
          The program also strengthened several professional skills beyond classroom teaching. It enhanced my communication skills, creativity, problem-solving abilities, adaptability, teamwork, and confidence in speaking before groups. These transferable skills are essential for creating positive learning environments and responding effectively to the diverse needs of learners.
        </p>
        <p>
          Despite its many strengths, the program also presented several challenges. Designing lessons that matched learners' proficiency levels, managing classroom time effectively, and maintaining student engagement required considerable preparation and practice. However, these challenges became valuable learning opportunities that encouraged continuous improvement and professional growth. The constructive feedback provided by the trainers played a crucial role in helping me overcome these difficulties.
        </p>
        <p>
          Overall, I consider the TESOL training program to have exceeded my expectations. It successfully equipped me with both the theoretical foundation and the practical experience necessary for teaching English as a foreign language. More importantly, it helped me develop confidence in my teaching abilities and fostered a reflective mindset that will support my ongoing professional development.
        </p>
        <p>
          In conclusion, the TESOL training program has been a significant milestone in my journey toward becoming a competent and effective English language teacher. It has strengthened my pedagogical knowledge, improved my practical teaching skills, and reinforced my commitment to providing engaging, learner-centered instruction. The knowledge, experience, and confidence I gained throughout the program will continue to guide my teaching career and inspire me to pursue continuous professional development in the field of English language education.
        </p>
      </div>
    </div>
  );
}