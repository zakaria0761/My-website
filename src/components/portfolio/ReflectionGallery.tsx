"use client";

import { useState } from "react";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE: DESCRIPTIONS */}
      <div className="w-full md:w-1/2 p-6 space-y-100 overflow-y-auto border-r">

        {/* Description 1 */}
        <div>
          <h2 className="text-xl font-bold mb-2">The lesson plan I felt was successful :</h2>
          <p className="leading-relaxed">
            Teacher : Zakaria Aherach
          </p>
          <ul>
            <li>Level: A1 (Beginner) </li>
            <li></li>
          </ul>
        </div>

        {/* Description 2 */}
        <div>
          <h2 className="text-xl font-bold mb-2">The lesson plan that I felt could be improved :</h2>
          <p className="leading-relaxed">
            Teacher : Zakaria Aherach
          </p>
          <ul>
            <li>Level: A1 (Beginner) </li>
            <li></li>
          </ul>
        </div>
 {/* TP REPORT SECTION */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">Reflection on lesson taught:</h2>

          <div className="space-y-4 leading-relaxed text-justify">
            <p>
              Once, I had the chance to teach a lesson about animals to a young
              learner online. I prepared my lesson plan using different materials
              such as pictures, flashcards, and a short video. The topic was
              simple and interesting, but the lesson did not go as successfully
              as I expected.
            </p>

            <p>
              At the beginning of the class, I tried to warm up the student with
              a quick animal song and some pictures. However, my instructions
              were not clear enough, and the student became confused about what
              he was supposed to do. Sometimes, he just kept quiet or gave random
              answers that were not related.
            </p>

            <p>
              During the presentation stage, I introduced the animal vocabulary
              too quickly. I moved from one word to another without checking if
              the student had really understood. I also forgot to use enough
              repetition and concept checking questions, which made it harder for
              the student to remember the words.
            </p>

            <p>
              The practice stage also did not go smoothly. I gave a matching game,
              but I did not explain the rules properly. As a result, the student
              got confused, and I had to stop several times to explain again. The
              video activity also did not work well because I did not give clear
              instructions before playing it.
            </p>

            <p>
              In the final stage, I tried to do a quick review, but there was not
              enough time left, and I was unable to properly assess the student's
              understanding.
            </p>

            <p>
              Overall, this lesson helped me realize the importance of clear
              instructions, slower pacing, and checking understanding at every
              step. It was not my most successful lesson, but it was a very
              important learning experience for improving my teaching skills.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGES */}
<div className="w-full md:w-1/2 flex flex-col h-full">

  {/* Image 1 */}
  <div className="h-1/2 border-b flex items-center justify-center overflow-hidden bg-gray-50">
    <img
      src="/document/most lesson plan.png"
            alt="Lesson Plan 1"
            className="w-full h-full object-contain cursor-zoom-in"
            onClick={() => setSelectedImage("/document/most lesson plan.png")}
    />
  </div>

  {/* Image 2 */}
  <div className="h-1/2 flex items-center justify-center overflow-hidden bg-gray-50">
    <img
            src="/document/least lesson plan.jpg"
            alt="Lesson Plan 2"
            className="w-full h-full object-contain cursor-zoom-in"
            onClick={() => setSelectedImage("/document/least lesson plan.jpg")}
    />
  </div>

</div>
{/* MODAL / LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}