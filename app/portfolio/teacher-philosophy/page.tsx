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
          My Teaching Philosophy
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12 leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold text-center">1. Student-Centered and Interactive Learning</h1>
        <p>
            I believe that language acquisition is most effective when students are active participants rather than passive listeners. 
            My teaching approach centers on the individual needs of young learners, using vibrant multimedia tools, animations, games, and music to make English come alive.
            By breaking lessons down into structured, high-energy segments—such as warm-up songs, interactive matching games, and communication-driven guessing games—I ensure that language learning feels natural, intuitive, and, above all, fun.
        </p>
      <h1 className="text-2xl font-bold text-center">2. Communicative Competence from Day One</h1>
        <p>
          My ultimate goal as an educator is to build practical communication skills and student confidence. 
          I design lessons that introduce structured language focus patterns (e.g., "What do you want to be?") and immediately pair them with target vocabulary. 
          This allows students to ask and answer questions right away. By promoting immediate output through structured dialogue and peer or teacher interaction, 
          I help students shift from simply recognizing vocabulary words to actively using them in meaningful contexts .
        </p>
      <h1 className="text-2xl font-bold text-center">3. Empathy, Adaptability, and Positive Reinforcement</h1>
        <p>
          I strive to create a warm, low-anxiety environment where mistakes are viewed as essential milestones in the learning process. 
          I continually assess student performance in real-time to adapt the lesson difficulty, ensuring that every child remains highly motivated, supported, and appropriately challenged .
        </p>

        <p>
          Finally, I value positive classroom relationships. Respect, empathy,
          and encouragement are key elements that help create a safe space where
          students can grow.
        </p>

      </div>
    </div>
  );
}